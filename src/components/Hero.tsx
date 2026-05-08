import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, Download } from 'lucide-react';
import heroImage from '../hero.jpeg';

export default function Hero() {
  return (
    <section className="pt-40 lg:pt-52 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-primary"
          >
            Available for opportunities
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            Building data <br /> 
            <span className="text-transparent border-t-0 bg-clip-text bg-gradient-to-r from-primary to-fuchsia-400">experiences</span>.
          </h1>
          <p className="text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
            I'm <span className="font-bold" style={{ color: 'var(--text-main)' }}>{PERSONAL_INFO.name}</span>. 
            A focus-driven <span className="font-bold" style={{ color: 'var(--text-main)' }}>{PERSONAL_INFO.title}</span> specialized in end-to-end data solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2 group transition-all"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            {/* <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border rounded-full font-bold flex items-center gap-2 hover:bg-primary/10 transition-all outline-none"
              style={{ borderColor: 'var(--border-color)', color: 'var(--text-main)', backgroundColor: 'var(--bg-surface)' }}
            >
              Resume
              <Download size={18} />
            </motion.button> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-square md:aspect-[4/5] max-h-[600px] w-full"
        >
          {/* Picture Placeholder */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
            
            {/* Abstract elements to make the placeholder look elegant */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-black/5 dark:border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-black/10 dark:border-white/10 rounded-full" />
            
            {/* Silhouette-ish placeholder */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[80%] bg-purple-500/10 dark:bg-indigo-400/10 rounded-t-[100px] blur-2xl" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>
                <img src={heroImage} alt="hero" className="w-full h-full object-cover" />
              </p>
            </div>
          </div>

          {/* Floating accent elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full blur-3xl opacity-20" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20" 
          />
        </motion.div>
      </div>
    </section>
  );
}
