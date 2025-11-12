'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 dynamic-background" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
      
      {/* Floating orbs with dynamic colors */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl floating-orb opacity-30"
           style={{ 
             background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite'
           }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl floating-orb-slow opacity-30" 
           style={{ 
             background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '5s'
           }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl floating-orb opacity-30" 
           style={{ 
             background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '10s'
           }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl floating-orb-slow opacity-25" 
           style={{ 
             background: 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '15s'
           }} />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl floating-orb opacity-25" 
           style={{ 
             background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '20s'
           }} />
      
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      <div className="relative z-10 max-w-[980px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium"
          >
            Visual Artist
          </motion.p>

          {/* Main heading - Apple style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]"
          >
            Hosein
            <br />
            <span className="text-gradient">Kheradmand</span>
          </motion.h1>

          {/* Description with accent */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-normal leading-relaxed"
          >
            <span className="text-gradient">Videography</span> <span className="text-gray-500">&</span> <span className="text-gradient">Photography</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base text-gray-500"
          >
            Istanbul • Available Worldwide
          </motion.p>

          {/* CTA Buttons - Apple style with dynamic colors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#instagram"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium gradient-button text-white"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 apple-button rounded-full font-medium transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ opacity: scrollIndicatorOpacity }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
              <svg 
                className="w-5 h-5 text-gray-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
