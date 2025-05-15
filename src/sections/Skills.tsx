import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'database' | 'tools';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Backend
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'PHP/Laravel', level: 90, category: 'backend' },
    { name: 'Node.js/Express', level: 85, category: 'backend' },
    { name: 'RESTful API', level: 95, category: 'backend' },
    { name: 'Authentication', level: 90, category: 'backend' },
    
    // Frontend
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'JavaScript/TypeScript', level: 90, category: 'frontend' },
    { name: 'HTML/CSS/SASS', level: 90, category: 'frontend' },
    { name: 'Redux', level: 80, category: 'frontend' },
    { name: 'Material UI/Bootstrap', level: 85, category: 'frontend' },
    
    // Database
    { name: 'MySQL', level: 90, category: 'database' },
    { name: 'MongoDB', level: 90, category: 'database' },
    { name: 'Redis', level: 80, category: 'database' },
    { name: 'Query Optimization', level: 85, category: 'database' },
    
    // Tools
    { name: 'Git/GitHub', level: 95, category: 'tools' },
    { name: 'Docker', level: 80, category: 'tools' },
    { name: 'CI/CD Pipelines', level: 85, category: 'tools' },
    { name: 'Agile/Scrum', level: 90, category: 'tools' },
  ];

  const categories = [
    { id: 'backend', name: 'Backend Development', color: 'bg-primary-600 dark:bg-primary-500' },
    { id: 'frontend', name: 'Frontend Technologies', color: 'bg-secondary-600 dark:bg-secondary-500' },
    { id: 'database', name: 'Database & Storage', color: 'bg-accent-600 dark:bg-accent-500' },
    { id: 'tools', name: 'Tools & Methodologies', color: 'bg-primary-800 dark:bg-primary-700' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <SectionHeading 
          title="Technical Skills"
          subtitle="My expertise spans both frontend and backend technologies, with a focus on building scalable and high-performance applications."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className={`inline-block w-3 h-3 ${category.color} rounded-full mr-2`}></span>
                {category.name}
              </h3>
              
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${getCategoryColor(category.id)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'backend':
      return 'bg-primary-600 dark:bg-primary-500';
    case 'frontend':
      return 'bg-secondary-600 dark:bg-secondary-500';
    case 'database':
      return 'bg-accent-600 dark:bg-accent-500';
    case 'tools':
      return 'bg-primary-800 dark:bg-primary-700';
    default:
      return 'bg-gray-600 dark:bg-gray-500';
  }
};

export default Skills;