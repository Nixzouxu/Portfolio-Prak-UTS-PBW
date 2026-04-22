import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:M.hafidz9999@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => { setForm({ name: '', email: '', message: '' }); setSent(false); }, 3000);
  };

  const socials = [
    { icon: FaGithub, href: 'https://github.com/Nixzouxu', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://www.instagram.com/nxuzn.ae/', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:M.hafidz9999@gmail.com', label: 'Email' },
  ];

  const services = [
    'Web & Mobile Development',
    'UI/UX Design',
    'Machine Learning Solutions',
    'Technical Consulting',
    'Cybersecurity Analysis',
  ];

  const inputClass = `
    w-full px-4 py-3 bg-[rgba(7,16,32,0.8)] border border-[rgba(0,255,231,0.15)]
    text-[rgba(226,235,240,0.8)] font-body text-sm outline-none
    focus:border-[rgba(0,255,231,0.6)] focus:shadow-[0_0_20px_rgba(0,255,231,0.1)]
    transition-all duration-300 placeholder:text-[rgba(226,235,240,0.2)]
  `;

  return (
    <section id="contact" className="relative bg-[#050A0E]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,231,0.3)] to-transparent" />

      {/* Glow bg */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[rgba(0,255,231,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">[ 04 ] — Contact</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <div className="cyan-divider mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="section-label mb-6">Send a Message</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] text-[rgba(0,255,231,0.5)] tracking-widest uppercase mb-2">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-[rgba(0,255,231,0.5)] tracking-widest uppercase mb-2">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-[rgba(0,255,231,0.5)] tracking-widest uppercase mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full justify-center"
              >
                {sent ? '✓ Opening Email Client...' : (
                  <>Send Message <HiArrowRight size={14} /></>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-10"
          >
            {/* Availability */}
            <div className="glow-card rounded-sm p-6 relative">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[rgba(0,255,231,0.5)]" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00FFE7] animate-pulse shadow-[0_0_8px_rgba(0,255,231,0.8)]" />
                <span className="section-label">Available for Projects</span>
              </div>
              <p className="text-[rgba(226,235,240,0.45)] text-sm">
                Currently accepting new freelance and collaboration opportunities.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="section-label mb-5">What I Offer</p>
              <div className="space-y-3">
                {services.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-3 text-[rgba(226,235,240,0.5)] text-sm"
                  >
                    <HiArrowRight size={12} className="text-[rgba(0,255,231,0.5)] shrink-0" />
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="section-label mb-3">Direct Email</p>
              <a href="mailto:M.hafidz9999@gmail.com" className="text-[rgba(0,255,231,0.7)] hover:text-[#00FFE7] font-mono text-sm transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,231,0.8)]">
                M.hafidz9999@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="section-label mb-4">Social Links</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="w-12 h-12 glow-card flex items-center justify-center text-[rgba(226,235,240,0.4)] hover:text-[#00FFE7] transition-colors"
                    title={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
