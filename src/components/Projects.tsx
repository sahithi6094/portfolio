import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Users } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold tracking-tight mb-4 text-primary">Featured Works</h2>
            <p className="opacity-60 max-w-md">Selected projects demonstrating my expertise in data visualization, application development, and business intelligence.</p>
          </div>
          <a href="#" className="font-semibold underline underline-offset-8 decoration-primary/30 hover:decoration-primary transition-all">View Archive</a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden border p-8 flex flex-col justify-between hover:shadow-2xl transition-all"
              style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-color)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60">
                    <Users size={14} />
                    <span>Team of {project.teamSize}</span>
                  </div>
                  <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                <ul className="space-y-3">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm font-semibold leading-relaxed flex gap-2" style={{ color: 'var(--text-muted)' }}>
                      <span className="text-primary mt-1 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 pt-6 border-t flex gap-3" style={{ borderColor: 'var(--border-color)' }}>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/20">Enterprise</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/20">Production</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
