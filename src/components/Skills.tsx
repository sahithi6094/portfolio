import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../constants';
import { Database, Layout, Code2 } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
  "Data & Visualization": <Database size={24} />,
  "Power Platform": <Layout size={24} />,
  "Web Development": <Code2 size={24} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold tracking-tight mb-4">Core Expertise</h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border transition-colors"
              style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-color)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                {CATEGORY_ICONS[group.category] || <Code2 size={24} />}
              </div>
              <h3 className="text-xl font-bold mb-6 font-display">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-default border"
                    style={{ 
                      backgroundColor: 'var(--bg-surface)', 
                      color: 'var(--text-main)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
