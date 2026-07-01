'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export function ContactSection() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, locale }),
      });
      if (!response.ok) {
        throw new Error('Erro ao enviar');
      }
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: t('info.email'), value: 'felixsdomingos93@gmail.com', href: 'mailto:felixsdomingos93@gmail.com', color: 'hover:bg-red-500/20' },
    { icon: <Phone className="w-5 h-5" />, label: t('info.phone'), value: '+244 926 195 572', href: 'tel:+244926195572', color: 'hover:bg-green-500/20' },
    { icon: <MapPin className="w-5 h-5" />, label: t('info.location'), value: t('info.locationValue'), href: null, color: 'hover:bg-blue-500/20' },
    { icon: <Clock className="w-5 h-5" />, label: t('info.availability'), value: t('info.availabilityValue'), href: null, color: 'hover:bg-yellow-500/20' },
  ];

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, name: 'GitHub', url: 'https://github.com/felixdomingos1', color: '#333' },
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://linkedin.com/in/felixdomingos', color: '#0077B5' },
    { icon: <FaWhatsapp className="w-5 h-5" />, name: 'WhatsApp', url: 'https://wa.me/244926195572', color: '#25D366' },
    { icon: <FaTelegram className="w-5 h-5" />, name: 'Telegram', url: 'https://t.me/felixdomingos', color: '#0088cc' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')} <span className="text-primary-neon">{t('titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-neon to-accent-purple mx-auto rounded-full" />
          <p className="text-text-gray mt-4">{t('subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <MessageCircle className="text-primary-neon w-5 h-5" />
                {t('info.title')}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${info.color} cursor-pointer`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-neon">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-white hover:text-primary-neon transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">{t('social.title')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-neon/50 transition-all group"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary-neon group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-white text-sm group-hover:text-primary-neon transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Horário de Resposta */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-2 text-primary-neon mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{t('responseTime.label')}</span>
              </div>
              <p className="text-white text-lg font-bold">{t('responseTime.value')}</p>
              <p className="text-text-gray text-xs mt-1">{t('responseTime.note')}</p>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Send className="text-primary-neon w-5 h-5" />
                {t('form.title')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-text-gray text-sm mb-1 block">{t('form.nameLabel')}</label>
                  <input
                    type="text"
                    placeholder={t('form.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-primary-neon transition-all focus:ring-1 focus:ring-primary-neon"
                  />
                </div>
                <div>
                  <label className="text-text-gray text-sm mb-1 block">{t('form.emailLabel')}</label>
                  <input
                    type="email"
                    placeholder={t('form.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-primary-neon transition-all focus:ring-1 focus:ring-primary-neon"
                  />
                </div>
                <div>
                  <label className="text-text-gray text-sm mb-1 block">{t('form.subjectLabel')}</label>
                  <input
                    type="text"
                    placeholder={t('form.subjectPlaceholder')}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-primary-neon transition-all focus:ring-1 focus:ring-primary-neon"
                  />
                </div>
                <div>
                  <label className="text-text-gray text-sm mb-1 block">{t('form.messageLabel')}</label>
                  <textarea
                    placeholder={t('form.messagePlaceholder')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-primary-neon transition-all focus:ring-1 focus:ring-primary-neon resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-primary-neon to-accent-purple rounded-xl font-medium text-white disabled:opacity-50 transition-all hover:scale-[1.02] shadow-lg hover:shadow-primary-neon/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t('form.sending')}
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {t('form.sent')}
                    </>
                  ) : (
                    <>
                      {t('form.send')}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {submitStatus === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {t('form.error')}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
