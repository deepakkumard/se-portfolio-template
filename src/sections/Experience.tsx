import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: 'Software Engineer',
      company: 'Development Centre, HQ',
      location: 'Chennai',
      period: 'March 2024 - Present',
      description: 'Leading full-stack development initiatives for enterprise applications, with focus on React.js frontends and PHP/Node.js backends.',
      achievements: [
        'Architecting and implementing scalable web applications using modern JavaScript frameworks and PHP backends',
        'Developing and optimizing database solutions using MySQL and Microsoft SQL Server',
        'Contributing to cross-functional team initiatives with a focus on code quality and performance optimization',
        'Building responsive user interfaces with React.js and integrating with backend APIs'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Development Centre, HQ',
      location: 'Chennai',
      period: 'August 2022 - March 2024',
      description: 'Delivered robust backend functionality and integrated frontend solutions for web applications, with a particular focus on document management systems.',
      achievements: [
        'Contributed to core application functionality using PHP frameworks and JavaScript libraries, ensuring cross-browser compatibility',
        'Leveraged Git and Jira for version control and agile project management, maintaining high code quality standards',
        'Performed API integrations and testing, including comprehensive debugging of hybrid mobile applications',
        'Supported DMS product through the complete lifecycle: requirement gathering, implementation, and migration',
        'Participated in Flutter mobile app development projects, expanding the product ecosystem'
      ]
    },
    {
      title: 'Junior Software Engineer',
      company: 'Development Centre, HQ',
      location: 'Chennai',
      period: 'September 2021 - August 2022',
      description: 'Designed and implemented backend components for web applications, focusing on framework-based development and API integration.',
      achievements: [
        'Developed application modules using CodeIgniter and Laravel frameworks, following industry best practices',
        'Contributed to API integrations using Postman for testing and documentation',
        'Implemented interactive UI components using jQuery and AJAX for improved user experience',
        'Performed basic debugging tasks and code optimization for performance improvements'
      ]
    },
    {
      title: 'Intern and Backend Developer',
      company: 'Development Centre, HQ',
      location: 'Chennai',
      period: 'December 2019 - September 2021',
      description: 'Designed and implemented backend systems for web applications, with focus on development and eCommerce platforms.',
      achievements: [
        'Supported development teams by creating reusable and testable backend modules and database integrations',
        'Worked extensively with OpenCart and CMS systems for vendor-based portals, customizing functionality',
        'Designed and implemented custom RESTful APIs to enhance system functionality and third-party integrations',
        'Optimized legacy systems to improve performance and security',
        'Assisted with bug tracking, documentation, and frontend styling using HTML/CSS',
        'Gained valuable experience with real-time issue resolution and project collaboration tools'
      ]
    }
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-800">
      <div className="section-container">
        <SectionHeading 
          title="Work Experience"
          subtitle="My professional journey as a software engineer, delivering high-performance solutions across various roles."
          centered
        />
        
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {jobs.map((job, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              
              <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-6 shadow-sm ml-6">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium mt-1">
                    <Calendar size={16} className="mr-1" />
                    {job.period}
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                  <Briefcase size={16} className="mr-2" />
                  <span className="font-medium">{job.company}</span>
                  <span className="mx-2">•</span>
                  <span>{job.location}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {job.description}
                </p>
                
                <h4 className="font-semibold text-dark-800 dark:text-gray-200 mb-2">
                  Key Achievements:
                </h4>
                
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;