import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Code, Database, Server, Globe } from 'lucide-react';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-12 bg-white dark:bg-dark-800">
      <div className="section-container">
        <SectionHeading 
          title="About Me"
          subtitle="Innovative Software Engineer with a passion for crafting high-performance applications that solve real-world problems."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Software Engineer at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience Popup */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-700 p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary-600 dark:text-primary-400">5+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <div>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I'm a Software Engineer with 5+ years of experience specializing in crafting high-performance web applications and RESTful APIs. My expertise spans Python, PHP/Laravel 8/9 and Node.js/Express backend development, complemented by React 16+ frontend development skills.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Throughout my career, I've successfully delivered scalable solutions that have reduced system latency by up to 45% and improved user engagement metrics. I manage the complete development lifecycle—from robust database architecture to intuitive user interfaces—while maintaining code quality standards and optimizing for performance.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg flex items-start"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md mr-3">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-dark-900 dark:text-white mb-1">
                    Frontend Development
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React.js, Angular, TypeScript, Redux
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg flex items-start"
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded-md mr-3">
                  <Server size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-dark-900 dark:text-white mb-1">
                    Backend Development
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Java, Python, Laravel, Node.js, Express
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg flex items-start"
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="p-2 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-md mr-3">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-dark-900 dark:text-white mb-1">
                    Database Design
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    MySQL, MongoDB, Redis, Optimization
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg flex items-start"
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md mr-3">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-dark-900 dark:text-white mb-1">
                    API Development
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    RESTful, Authentication, Swagger
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;