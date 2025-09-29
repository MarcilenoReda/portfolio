import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import type { Project } from '../types/project';

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const load = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      setError(error.message);
    } else {
      setProjects(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const onDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm('Delete this project?')) return;
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) {
      alert(error.message);
    } else {
      await load();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <button
          onClick={() => navigate('/admin/projects/new')}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          New Project
        </button>
      </div>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="bg-[#131313b5] p-4 rounded">
            <div className="flex items-start gap-3">
              {p.image_url && (
                <img src={p.image_url} alt={p.title} className="w-24 h-16 object-cover rounded border border-[#1a1a1a]" />
              )}
              <div className="flex-1">
                <h3 className="font-medium">{p.title}</h3>
                {p.tech?.length ? (
                  <p className="text-sm text-gray-400 mt-1">{p.tech.join(', ')}</p>
                ) : null}
                <div className="flex items-center gap-2 mt-3">
                  <Link to={`/admin/projects/${p.id}/edit`} className="text-sm text-blue-400 hover:underline">Edit</Link>
                  <button onClick={() => onDelete(p.id)} className="text-sm text-red-400 hover:underline">Delete</button>
                  {p.live_url && (
                    <a href={p.live_url} target="_blank" className="text-sm text-gray-300 hover:underline">Live</a>
                  )}
                  {p.code_url && (
                    <a href={p.code_url} target="_blank" className="text-sm text-gray-300 hover:underline">Code</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
