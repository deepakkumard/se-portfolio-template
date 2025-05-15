import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { LineChart, Timer, Code2, Brain } from 'lucide-react';

interface MetricItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const Metrics: React.FC = () => {
  const metrics: MetricItem[] = [
    {
      icon: <Timer size={30} />,
      value: "65%",
      label: "Reduced API response times through optimization",
      color: "bg-primary-600 dark:bg-primary-500",
    },
    {
      icon: <LineChart size={30} />,
      value: "75%",
      label: "Decreased deployment time via CI/CD pipelines",
      color: "bg-secondary-600 dark:bg-secondary-500",
    },
    {
      icon: <Code2 size={30} />,
      value: "40%",
      label: "Accelerated UI development with component libraries",
      color: "bg-accent-600 dark:bg-accent-500",
    },
    {
      icon: <Brain size={30} />,
      value: "98%+",
      label: "Code review approval rate while reviewing 200+ PRs annually",
      color: "bg-primary-800 dark:bg-primary-700",
    },
  ];

  const fadeInUp = {
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
    <section id="metrics" className="py-20 bg-gradient-to-r from-primary-600/90 to-primary-800/90 text-white">
      <div className="section-container">
        <SectionHeading 
          title="Impact & Achievements"
          subtitle="Measurable results from my work that demonstrate my contributions to projects and teams."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <div className={`${metric.color} inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-white`}>
                {metric.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{metric.value}</h3>
              <p className="text-gray-200">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;