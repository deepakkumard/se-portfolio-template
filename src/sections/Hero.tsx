import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileText, Download, Eye } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
              Software Engineer
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Building digital <span className="text-primary-600 dark:text-primary-400">experiences</span> that matter
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Innovative Software Engineer with 5+ years of experience crafting high-performance web applications and RESTful APIs. Specializing in PHP/Laravel, Python, Node.js/Express, and React development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary flex items-center"
              >
                Get in touch <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-outline"
              >
                View my work
              </Link>

              <div className="relative">
                <button
                  onClick={() => setShowResumeOptions(!showResumeOptions)}
                  className="btn-outline flex items-center"
                  onBlur={() => setTimeout(() => setShowResumeOptions(false), 200)}
                >
                  <FileText size={18} className="mr-2" />
                  Resume
                </button>
                
                {showResumeOptions && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-lg shadow-lg py-2 z-50">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                    >
                      <Eye size={16} className="mr-2" />
                      View Resume
                    </a>
                    <a
                      href="/resume.pdf"
                      download="YourName_Resume.pdf"
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                    >
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="p-2 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
          
          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-600/20 dark:bg-primary-500/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Software Engineer" 
                  className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white dark:border-dark-800 shadow-lg"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-secondary-400 dark:bg-secondary-600 opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-accent-400 dark:bg-accent-600 opacity-20 animate-pulse delay-700"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;