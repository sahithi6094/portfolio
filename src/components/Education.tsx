import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold tracking-tight">Education</h2>
          </div>

          <div className="space-y-10 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-gray-200 dark:before:bg-white/10">
            <div className="pl-14 relative group">
              <div className="absolute left-[20px] top-2 w-3 h-3 rounded-full bg-primary border-4 border-white dark:border-black z-10 group-hover:scale-125 transition-transform" />
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">08/2023 - 9.17 CGPA</p>
              <h4 className="text-xl font-bold mb-1">Bachelor of Technology</h4>
              <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>Computer Science & Engineering</p>
              <p className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>Dr. B R Ambedkar University - Srikakulam</p>
            </div>

            <div className="pl-14 relative group">
              <div className="absolute left-[20px] top-2 w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 border-4 border-white dark:border-black z-10 group-hover:scale-125 transition-transform" />
              <p className="text-xs font-bold opacity-40 uppercase tracking-widest mb-2">04/2019 - 9.2 CGPA</p>
              <h4 className="text-lg font-bold mb-1">Intermediate Education</h4>
              <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>MPC (Mathematics, Physics, Chemistry)</p>
              <p className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>Vidya Vikas Junior College</p>
            </div>

            <div className="pl-14 relative group">
              <div className="absolute left-[20px] top-2 w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border-4 border-white dark:border-black z-10 group-hover:scale-125 transition-transform" />
              <p className="text-xs font-bold opacity-40 uppercase tracking-widest mb-2">06/2017 - 8.5 CGPA</p>
              <h4 className="text-lg font-bold mb-1">High School Education</h4>
              <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>General Studies</p>
              <p className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>Swarna Bharathi High School</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold tracking-tight">Certifications</h2>
          </div>

          <div className="grid gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl border hover:border-primary/20 transition-colors group"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
              >
                <div className="text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-sm font-semibold leading-tight">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
