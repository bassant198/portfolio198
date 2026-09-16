import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageSquare,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Frontend Developer Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject || 'Frontend Developer Opportunity'
    )}&body=${encodeURIComponent(
      `Hello Bassant,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\nBest regards,\n${formState.name}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070A12] overflow-hidden">
      {/* Subtle radial ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Strong CTA & Contact Channels */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-xs font-semibold text-violet-300 uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2
              id="contact-heading"
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              Let's build something great together.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              I am actively seeking Junior / Entry-Level Frontend Developer opportunities with modern tech teams, creative agencies, and international companies.
            </p>

            {/* Direct Contact Cards */}
            <div className="w-full space-y-4 mb-8">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#0B0F1C] border border-slate-800 flex items-center justify-between hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <a
                      id="contact-email-link"
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-violet-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <a
                    id="contact-email-action"
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 rounded-lg bg-violet-950/70 hover:bg-violet-900 text-violet-300 hover:text-white border border-violet-500/30 transition-colors text-xs flex items-center gap-1"
                    title="Send an email"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span className="text-xs hidden sm:inline">Compose</span>
                  </a>
                  <button
                    type="button"
                    id="contact-copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors text-xs flex items-center gap-1.5"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-xs hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-xs hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-[#0B0F1C] border border-slate-800 flex items-center justify-between hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-medium">Phone & WhatsApp</div>
                    <a
                      id="contact-phone-link"
                      href={PERSONAL_INFO.phoneTel}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <a
                    id="contact-whatsapp-link"
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 hover:text-white border border-emerald-500/30 transition-colors text-xs flex items-center gap-1"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="text-xs hidden sm:inline">WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    id="contact-copy-phone-btn"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors text-xs flex items-center gap-1.5"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-xs hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-xs hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#0B0F1C] border border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-xs text-emerald-400 mt-0.5">
                    Available for Remote Opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Profiles */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="contact-social-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4 text-violet-400" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                id="contact-social-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Email Inquiry Composer Form */}
          <div className="lg:col-span-6 w-full">
            <div
              id="contact-composer-card"
              className="bg-[#0B0F1C] border border-violet-900/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-violet-400" />
                    Quick Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Drafts an email directly to {PERSONAL_INFO.email}
                  </p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-form-name"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-form-email"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-form-subject"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-form-subject"
                    type="text"
                    required
                    placeholder="Frontend Developer Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-form-message"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-form-message"
                    rows={4}
                    required
                    placeholder="Hi Bassant, I’m interested in discussing a frontend development opportunity with you."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                  />
                </div>

                {submitted && (
                  <div
                    id="contact-form-success-banner"
                    className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Opening your email client to send message...</span>
                  </div>
                )}

                <button
                  id="contact-submit-button"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all shadow-lg shadow-violet-950/60 border border-violet-400/30 group cursor-pointer"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Send via Email Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
