"use client";
import React, { useEffect, useState } from 'react';
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ProjectImg1 from "../public/souqak-eg.png";
import ProjectImg2 from '../public/Filmlane.png'
import ProjectImg3 from '../public/Dashboard.png'
import ProjectImg4 from "../public/Smm.png";
import { supabase } from '../../lib/supabaseClient';

type ProjectRow = {
  id?: string;
  title: string;
  description?: string | null;
  tech: string[];
  image_url?: string | null;
  code_url?: string | null;
  live_url?: string | null;
};

type ProjectDisplay = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  codeUrl: string;
  liveUrl: string;
};

const defaultProjects = [
  {
    title: "eCommerce platform",
    description:
      "eCommerce platform with user auth, product listing, cart, checkout, and admin dashboard for managing products and orders.",
    tech: ["Next.js", "Tailwind", "Laravel", "MySql"],
    image: ProjectImg1,
    codeUrl: "#",
    liveUrl: "https://souqak-eg.com",
  },
  {
    title: "Filmlane - Movie website",
    description:
      "Filmlane is a movie website ,featuring dynamic movie data and a modern UI.",
    tech: ["React", "JS", "Api", "Socket.io"],
    image: ProjectImg2,
    codeUrl: "https://github.com/MarcilenoReda/Filmlane",
    liveUrl: "https://marcilenoreda.github.io/Filmlane",
  },
  {
    title: "Admin Dashboard",
    description:
      "This dashboard is fully responsive for all devices, Built using HTML, CSS, and JavaScript.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: ProjectImg3,
    codeUrl: "#",
    liveUrl: "https://codewithsadee.github.io/dashboard/",
  },
  {
    title: "SMM Box",
    description:
      "Full-stack Socila Media Acc integration.",
    tech: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    image: ProjectImg4,
    codeUrl: "",
    liveUrl: "",
  },
];

const ProjectsSection = () => {
  const [projects, setProjects] = useState<ProjectDisplay[]>(defaultProjects);

  useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        if (data && data.length) {
          const mapped: ProjectDisplay[] = data.map((row: ProjectRow) => ({
            title: row.title,
            description: row.description ?? '',
            tech: Array.isArray(row.tech) ? row.tech : [],
            image: row.image_url ?? '',
            codeUrl: row.code_url ?? '',
            liveUrl: row.live_url ?? '',
          }));
          setProjects(mapped);
        }
      } catch {
        // keep defaultProjects
      }
    };
    load();
  }, []);

  return (

    <section id="projects" className="bg-[#0b0b0b] py-20 px-6">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}

              className="bg-[#131313b5] p-5 rounded-2xl shadow-lg shadow-black/20 flex flex-col justify-between"

            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"

                  className="rounded-xl mb-4 border border-[#1a1a1a] object-cover h-48 w-full"

                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#222] text-gray-300 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.codeUrl}
                  target="_blank"

                  className="flex items-center gap-1 text-sm text-white bg-[#1a1a1a] px-3 py-1.5 rounded hover:bg-[#444] transition"

                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-white bg-[#2563eb] px-3 py-1.5 rounded hover:bg-[#1d4ed8] transition"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
