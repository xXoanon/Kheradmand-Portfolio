'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Videography',
    description: 'Cinematic storytelling that captures the essence of your moments.',
    features: ['Event Coverage', 'Commercial Videos', 'Documentaries', 'Social Media Content'],
  },
  {
    title: 'Photography',
    description: 'Stunning visuals that freeze time and tell your story.',
    features: ['Portraits', 'Events', 'Product Photography', 'Lifestyle Shoots'],
  },
  {
    title: 'Creative Direction',
    description: 'Bringing your vision to life with artistic expertise.',
    features: ['Concept Development', 'Art Direction', 'Post-Production', 'Brand Content'],
  },
];

export default function Services() {
  return (
    <section className="py-32 lg:py-40 bg-black relative overflow-hidden">
      {/* Dynamic background gradient */}
      <div className="absolute inset-0 dynamic-background opacity-50" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      {/* Floating orbs - doubled */}
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full blur-3xl floating-orb opacity-20" 
           style={{ 
             background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '3s'
           }} />
      <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full blur-3xl floating-orb-slow opacity-20" 
           style={{ 
             background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '8s'
           }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl floating-orb opacity-15" 
           style={{ 
             background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '12s'
           }} />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl floating-orb-slow opacity-15" 
           style={{ 
             background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '16s'
           }} />
      <div className="absolute bottom-20 right-1/3 w-88 h-88 rounded-full blur-3xl floating-orb opacity-18" 
           style={{ 
             background: 'radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '5s'
           }} />
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl floating-orb-slow opacity-18" 
           style={{ 
             background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '19s'
           }} />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full blur-3xl floating-orb opacity-15" 
           style={{ 
             background: 'radial-gradient(circle, rgba(251,146,60,0.4) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '23s'
           }} />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl floating-orb-slow opacity-15" 
           style={{ 
             background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '26s'
           }} />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            <span className="text-gradient">What I Do</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Specializing in <span className="text-gradient">visual storytelling</span> that connects, inspires, and leaves a lasting impression.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group"
            >
              <div className="apple-card rounded-2xl p-6 md:p-8 h-full transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gradient">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2 md:space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                      className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-300 transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats - Apple style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {[
            { number: '500+', label: 'Projects' },
            { number: '50+', label: 'Clients' },
            { number: '10+', label: 'Countries' },
            { number: '∞', label: 'Creativity' },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-center group cursor-default"
            >
              <div className="text-4xl md:text-5xl font-semibold mb-2 text-gradient transition-transform duration-300 group-hover:scale-110">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
