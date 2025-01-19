import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Tech = () => {
  // Define a list of icons with their respective colors and durations
  const icons = [
    { component: RiReactjsLine, color: 'text-cyan-400', duration: 2.5 },
    { component: TbBrandNextjs, color: '', duration: 3 },
    { component: SiMongodb, color: 'text-green-500', duration: 5 },
    { component: DiRedis, color: 'text-red-700', duration: 2 },
    { component: FaNodeJs, color: 'text-green-500', duration: 6 },
    { component: BiLogoPostgresql, color: 'text-sky-700', duration: 4 },
  ];

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {icons.map(({ component: Icon, color, duration }, index) => (
          <motion.div
            key={index}
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }}
            transition={{
              duration: duration,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
