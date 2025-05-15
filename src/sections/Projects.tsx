import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Github, ExternalLink, Code, Database, Server, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  category: 'all' | 'frontend' | 'backend' | 'fullstack';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise Employee Management System',
      description: 'A comprehensive system designed to streamline HR processes with user management, role-based access control, project tracking, leave management, and employee profiles.',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Node.js', 'Express', 'React', 'MySQL', 'JWT', 'Socket.io', 'Material UI', 'Chart.js', 'Redux'],
      features: [
        'Secure RESTful API with middleware for authentication, validation, and error handling',
        'Role-based access control with JWT authentication',
        'Responsive React frontend using hooks, context API, and Material UI',
        'Normalized MySQL database schema with properly indexed tables',
        'WebSockets for real-time notifications and alerts',
        'Comprehensive reporting with CSV/PDF export'
      ],
      github: 'https://github.com/yourprofile/employee-management',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'E-Commerce Platform Optimization',
      description: 'Revamped an existing OpenCart e-commerce platform to improve performance, security, and user experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['PHP 8', 'Laravel 9', 'MySQL', 'Redis', 'JavaScript', 'AJAX', 'RESTful APIs', 'Stripe SDK'],
      features: [
        'Refactored legacy PHP code to follow modern Laravel patterns',
        'Optimized database queries and implemented Redis caching (65% faster page loads)',
        'Integrated payment gateway APIs (Stripe, PayPal)',
        'Custom inventory management system with real-time stock updates',
        'Responsive design improvements (30% increase in mobile conversion)'
      ],
      github: 'https://github.com/yourprofile/ecommerce-optimization',
      category: 'backend'
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'An interactive dashboard for visualizing business metrics and performance indicators with real-time updates.',
      image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'TypeScript', 'WebSockets', 'D3.js', 'Tailwind CSS', 'Vite'],
      features: [
        'Interactive charts and data visualization with D3.js',
        'Real-time data updates via WebSockets',
        'Customizable dashboard with drag-and-drop layout',
        'Theme customization and responsive design',
        'Export reports in various formats'
      ],
      github: 'https://github.com/yourprofile/analytics-dashboard',
      live: 'https://analytics-dashboard-demo.netlify.app',
      category: 'frontend'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterChange = (filter: 'all' | 'frontend' | 'backend' | 'fullstack') => {
    setActiveFilter(filter);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <SectionHeading 
          title="Featured Projects"
          subtitle="A showcase of my recent work, demonstrating my skills and problem-solving approach across different domains."
          centered
        />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => handleFilterChange('frontend')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'frontend'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => handleFilterChange('backend')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'backend'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => handleFilterChange('fullstack')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'fullstack'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
            }`}
          >
            Full Stack
          </button>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="card group"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-dark-900/90 text-white rounded-full hover:bg-primary-600 transition-colors"
                          aria-label="View GitHub Repository"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-dark-900/90 text-white rounded-full hover:bg-primary-600 transition-colors"
                          aria-label="View Live Site"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-dark-800 dark:text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    {getProjectIcon(project.category)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const getProjectIcon = (category: 'all' | 'frontend' | 'backend' | 'fullstack') => {
  switch (category) {
    case 'frontend':
      return <Code size={20} className="text-secondary-600 dark:text-secondary-400" />;
    case 'backend':
      return <Server size={20} className="text-primary-600 dark:text-primary-400" />;
    case 'fullstack':
      return <Globe size={20} className="text-accent-600 dark:text-accent-400" />;
    default:
      return <Database size={20} className="text-gray-600 dark:text-gray-400" />;
  }
};

export default Projects;