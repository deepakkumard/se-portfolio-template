import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

interface Article {
  title: string;
  platform: string;
  date: string;
  description: string;
  link?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Laravel Certified Developer",
      issuer: "Laravel.com",
      date: "2023",
      image: "https://images.pexels.com/photos/6858609/pexels-photo-6858609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
    {
      title: "React Advanced Concepts",
      issuer: "Frontend Masters",
      date: "2022",
      image: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
    {
      title: "Database Optimization Masterclass",
      issuer: "MySQL Professional Training",
      date: "2021",
      image: "https://images.pexels.com/photos/7709278/pexels-photo-7709278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
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
    <section id="certifications" className="py-20 bg-white dark:bg-dark-800">
      <div className="section-container">
        <SectionHeading 
          title="Certifications"
          subtitle="Professional certifications that validate my expertise and commitment to continuous learning."
          centered
        />
        
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-primary-500/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded">
                    {cert.date}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1 flex items-center">
                  <Award size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.issuer}
                </p>
                
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-primary-600 dark:text-primary-400 text-sm hover:underline"
                  >
                    View Certificate <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;