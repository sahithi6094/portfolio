import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold tracking-tight mb-4">Professional Journey</h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-[1fr_2fr] gap-8 pb-12 border-b last:border-0"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div>
                <div className="flex items-center gap-3 text-primary mb-3">
                  <Briefcase size={20} />
                  <span className="font-display font-bold text-xl tracking-tight">{exp.role}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                <div className="flex items-center gap-2 text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest">
                  {exp.period}
                </div>
              </div>

              <div>
                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm font-medium leading-relaxed flex items-start gap-3" style={{ color: 'var(--text-muted)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
