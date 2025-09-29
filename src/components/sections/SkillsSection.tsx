import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Code, Server, Database, Globe, Shield, Cpu } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; experience: string }[];
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, color }) => {
  return (
    <div

      className="bg-[#131313b5] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[color]/10 hover:-translate-y-1"

      style={{ '--color': color } as React.CSSProperties}
    >
      <div className="inline-flex p-3 rounded-lg mb-4" style={{ backgroundColor: `${color}20` }}>
        <div style={{ color }}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-between items-center text-gray-300">
            <div className="flex items-center">
              <span
                className="w-1.5 h-1.5 rounded-full mr-2"
                style={{ backgroundColor: color }}
              ></span>
              <span>{skill.name}</span>
            </div>
            <span className="text-sm" style={{ color }}>{skill.experience}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skillsData = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'Next.js', experience: '2+ years' },
        { name: 'React', experience: '2+ years' },
        { name: 'Tailwind CSS', experience: '2+ years' },
        { name: 'Redux', experience: '1+ years' }
      ],
      color: '#00ffcc'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Laravel', experience: '1+ years' },
        { name: 'PHP', experience: '2+ years' }, 
        { name: 'Sql', experience: '2+ years' },
        { name: 'Node.js', experience: '1+ years' },
        { name: 'Express.js', experience: '1+ years' }
      ],
      color: '#a855f7'
    },
    {
      icon: <Database size={24} />,
      title: 'Databases',
      skills: [
        { name: 'MySQL', experience: '2+ years' },
        { name: 'PostgreSQL', experience: '1+ years' },
        { name: 'MongoDB', experience: '1+ years' },
        { name: 'Redis', experience: '1+ years' },
        { name: 'Supabase', experience: '1+ years' }
      ],
      color: '#00bfff'
    },
    {
      icon: <Globe size={24} />,
      title: 'DevOps',
      skills: [
        { name: 'AWS', experience: '1+ years' },
        { name: 'Docker', experience: '1+ years' },
        { name: 'CI/CD', experience: '2+ years' },
        { name: 'Git', experience: '3+ years' },
      ],
      color: '#ff6b6b'
    },
    {
      icon: <Shield size={24} />,
      title: 'Security',
      skills: [
        { name: 'CEH', experience: 'Certified' },
        { name: 'CCNA', experience: 'Certified' },
        { name: 'OAuth', experience: '1+ years' },
        { name: 'JWT', experience: '1+ years' },
        { name: 'Penetration Testing', experience: '2+ years' }
      ],
      color: '#ffa116'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Other',
      skills: [
        { name: 'Python', experience: '3+ years' },
        { name: 'System Design', experience: '2+ years' },
        { name: 'Performance Optimization', experience: '2+ years' },
        { name: 'Agile', experience: '1+ years' },
        { name: 'Scrum', experience: '1+ years' }
      ],
      color: '#ff85e4'
    }
  ];

  return (

    <section id="skills" className="py-20 bg-[#0b0b0b]

 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and frameworks I specialize in"
          className="text-center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
