'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function InstagramSection() {
  useEffect(() => {
    // Load Behold widget script
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.type = 'module';
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="instagram" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Floating orbs - doubled */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl floating-orb opacity-20" 
           style={{ 
             background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '2s'
           }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl floating-orb-slow opacity-20" 
           style={{ 
             background: 'radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '7s'
           }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-3xl floating-orb opacity-15" 
           style={{ 
             background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '11s'
           }} />
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full blur-3xl floating-orb-slow opacity-15" 
           style={{ 
             background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '14s'
           }} />
      <div className="absolute top-10 right-1/3 w-96 h-96 rounded-full blur-3xl floating-orb opacity-18" 
           style={{ 
             background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '4s'
           }} />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full blur-3xl floating-orb-slow opacity-18" 
           style={{ 
             background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '18s'
           }} />
      <div className="absolute top-2/3 left-10 w-64 h-64 rounded-full blur-3xl floating-orb opacity-15" 
           style={{ 
             background: 'radial-gradient(circle, rgba(251,146,60,0.4) 0%, transparent 70%)',
             animation: 'float 20s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '22s'
           }} />
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full blur-3xl floating-orb-slow opacity-15" 
           style={{ 
             background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
             animation: 'float-slow 30s ease-in-out infinite, gradient-rotate 60s linear infinite',
             animationDelay: '25s'
           }} />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            <span className="text-gradient">Latest Work</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Follow my journey on <span className="text-gradient">Instagram</span> for daily updates and the latest projects 
            from Istanbul and around the world.
          </p>
        </motion.div>

        {/* Instagram Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="glass-premium rounded-3xl p-8 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 hover:scale-110 hover:rotate-12">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg sm:text-xl">@h.krn_</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Hosein Kheradmand</p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/h.krn_/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 sm:px-6 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-all duration-500 font-medium overflow-hidden group flex items-center justify-center flex-shrink-0 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">Follow</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>

            <p className="text-gray-300">
              Videography & photography | runner 📍 Istanbul based | Available worldwide
            </p>
          </div>
        </motion.div>

        {/* Auto-updating Instagram Feed - Behold Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl behold-container"
          dangerouslySetInnerHTML={{
            __html: '<behold-widget feed-id="XNzGKtROb4z1lpPQ8gWi"></behold-widget>'
          }}
        />


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/h.krn_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span className="text-lg font-medium">View Full Instagram Profile</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
