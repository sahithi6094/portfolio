import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10 px-6 border-t border-gray-100 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-8 italic">Let's build <br /> something <span className="text-primary underline underline-offset-12 decoration-primary/50">great</span>.</h2>
            <p className="text-lg font-medium max-w-md leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
              Open for collaborations and new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>
            <div className="flex gap-6">
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all transition-colors" style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)' }}>
                <Linkedin size={20} />
              </a>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all transition-colors" style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)' }}>
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-8">
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-3" style={{ color: 'var(--text-muted)' }}>Email Me</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold hover:text-primary transition-colors block">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-3" style={{ color: 'var(--text-muted)' }}>Location</p>
                <p className="text-lg font-bold">{PERSONAL_INFO.location}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-3" style={{ color: 'var(--text-muted)' }}>Call Me</p>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/ /g, '')}`} className="text-lg font-bold hover:text-primary transition-colors block">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">Privacy</a>
            <a href="#" className="text-xs opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
