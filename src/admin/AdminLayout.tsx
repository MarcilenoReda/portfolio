import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/admin/projects" className="font-semibold hover:text-blue-400">Admin</Link>
          <nav className="flex items-center gap-3 text-sm text-gray-300">
            <Link to="/admin/projects" className="hover:text-white">Projects</Link>
          </nav>
        </div>
        <button onClick={handleLogout} className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded">Logout</button>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
