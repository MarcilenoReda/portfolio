import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import type { Project } from '../types/project';
import { PROJECTS_BUCKET } from '../lib/constants';

const parseTech = (val: string) =>
  val
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

const ProjectForm: React.FC = () => {
  const { id } = useParams();
  const isEdit = Boolean(id && id !== 'new');
  const navigate = useNavigate();

  const [form, setForm] = useState<Project>({
    title: '',
    description: '',
    tech: [],
    image_url: '',
    code_url: '',
    live_url: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!isEdit || !id) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      if (error) setError(error.message);
      if (data) setForm(data as Project);
      setLoading(false);
    };
    load();
  }, [id, isEdit]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let image_url = form.image_url || '';
    const file = fileRef.current?.files?.[0];
    if (file) {
      const filePath = `${Date.now()}_${file.name}`;
      const { error: upErr } = await supabase.storage.from(PROJECTS_BUCKET).upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });
      if (upErr) {
        setError(`Upload failed (bucket: ${PROJECTS_BUCKET}): ${upErr.message}`);
        setLoading(false);
        return;
      }
      const { data: pub } = supabase.storage.from(PROJECTS_BUCKET).getPublicUrl(filePath);
      image_url = pub.publicUrl;
    }

    const payload: Project = {
      title: form.title,
      description: form.description ?? '',
      tech: Array.isArray(form.tech) ? form.tech : parseTech(String(form.tech ?? '')),
      image_url,
      code_url: form.code_url ?? '',
      live_url: form.live_url ?? '',
    };

    if (isEdit && id) {
      const { error } = await supabase.from('projects').update(payload).eq('id', id);
      if (error) setError(error.message);
      else navigate('/admin/projects');
    } else {
      const { error } = await supabase.from('projects').insert(payload);
      if (error) setError(error.message);
      else navigate('/admin/projects');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-6">{isEdit ? 'Edit' : 'New'} Project</h1>
      {error && <p className="text-red-400 mb-4">{error}</p>}
      {loading && <p className="text-gray-400 mb-4">Loading...</p>}

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            className="w-full bg-[#1a1a1a] border-0 rounded-md py-2.5 px-3 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description ?? ''}
            onChange={onChange}
            rows={4}
            className="w-full bg-[#1a1a1a] border-0 rounded-md py-2.5 px-3 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Tech (comma separated)</label>
          <input
            name="tech"
            value={Array.isArray(form.tech) ? form.tech.join(', ') : String(form.tech ?? '')}
            onChange={onChange}
            className="w-full bg-[#1a1a1a] border-0 rounded-md py-2.5 px-3 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Code URL</label>
          <input
            name="code_url"
            value={form.code_url ?? ''}
            onChange={onChange}
            className="w-full bg-[#1a1a1a] border-0 rounded-md py-2.5 px-3 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Live URL</label>
          <input
            name="live_url"
            value={form.live_url ?? ''}
            onChange={onChange}
            className="w-full bg-[#1a1a1a] border-0 rounded-md py-2.5 px-3 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Image</label>
          {form.image_url && (
            <img src={form.image_url} alt="project" className="w-40 h-24 object-cover rounded border border-[#1a1a1a] mb-2" />
          )}
          <input ref={fileRef} type="file" accept="image/*" className="block w-full text-sm text-gray-300" />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded disabled:opacity-60"
          >
            {isEdit ? 'Save changes' : 'Create project'}
          </button>
          <button type="button" onClick={() => navigate('/admin/projects')} className="text-gray-300 hover:underline">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
