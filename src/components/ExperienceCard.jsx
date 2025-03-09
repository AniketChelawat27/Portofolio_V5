import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ role, company, location, duration, description, points }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative w-full"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        <div className="relative p-6 z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                {role}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{company}</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p className="text-gray-400 text-sm">{location}</p>
              <p className="text-gray-500 text-sm">{duration}</p>
            </div>
          </div>
          
          {description && (
            <p className="text-gray-300/80 text-sm leading-relaxed mb-4">{description}</p>
          )}
          
          {points && points.length > 0 && (
            <ul className="space-y-2">
              {points.map((point, index) => (
                <li key={index} className="text-gray-300/80 text-sm leading-relaxed flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500/50"></span>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
