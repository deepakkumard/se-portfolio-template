import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { BookOpen, Calendar, ExternalLink } from 'lucide-react';

interface Article {
  title: string;
  platform: string;
  date: string;
  description: string;
  link?: string;
}

const Articles: React.FC = () => {
  const articles: Article[] = [
    {
      title: "Optimizing Laravel API Performance for High-Traffic Applications",
      platform: "Medium",
      date: "2023",
      description: "A comprehensive guide to optimizing Laravel API performance through caching strategies, database indexing, and efficient query patterns.",
      link: "https://medium.com/@yourusername/optimizing-laravel-api-performance",
    },
    {
      title: "Building Scalable React Applications with Custom Hooks",
      platform: "Dev.to",
      date: "2022",
      description: "How to leverage React's custom hooks to create reusable logic and improve code organization in large-scale applications.",
      link: "https://dev.to/yourusername/building-scalable-react-applications",
    },
    {
      title: "Microservices Architecture with Node.js and Docker",
      platform: "HackerNoon",
      date: "2022",
      description: "A practical approach to designing and implementing a microservices architecture using Node.js, Express, and Docker containers.",
      link: "https://hackernoon.com/yourusername/microservices-architecture",
    },
    {
      title: "Advanced MySQL Query Optimization Techniques",
      platform: "DZone",
      date: "2021",
      description: "Deep dive into MySQL query optimization with practical examples and performance benchmarks for high-load applications.",
      link: "https://dzone.com/articles/advanced-mysql-query-optimization",
    },
  ];

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
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
    <section id="articles" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="section-container">
        <SectionHeading 
          title="Technical Articles"
          subtitle="Sharing knowledge and insights with the developer community through published technical content."
          centered
        />
        
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <BookOpen size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {article.platform}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {article.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {article.description}
                </p>
                
                {article.link && (
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Read Article <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="https://medium.com/@yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center"
          >
            View All Articles <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;