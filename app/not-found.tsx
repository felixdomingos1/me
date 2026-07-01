'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const content: Record<string, { title: string; text: string; backHome: string; back: string }> = {
  pt: { title: 'Página Não Encontrada', text: 'Ops! A página que você está procurando parece ter se perdido no espaço digital.', backHome: 'Voltar para Home', back: 'Voltar' },
  en: { title: 'Page Not Found', text: 'Oops! The page you\'re looking for seems to have gotten lost in digital space.', backHome: 'Back to Home', back: 'Go Back' },
  fr: { title: 'Page Non Trouvée', text: 'Oups ! La page que vous recherchez semble s\'être perdue dans l\'espace numérique.', backHome: 'Retour à l\'Accueil', back: 'Retour' },
};

export default function NotFound() {
  const [t] = useState(() => {
    if (typeof document === 'undefined') return content.pt;
    const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/);
    const locale = match?.[1];
    return locale && content[locale] ? content[locale] : content.pt;
  });

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            textShadow: [
              "0 0 20px rgba(0,242,254,0.5)",
              "0 0 40px rgba(189,0,255,0.5)",
              "0 0 20px rgba(0,242,254,0.5)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-8xl md:text-9xl font-bold mb-4 bg-linear-to-r from-primary-neon to-accent-purple bg-clip-text text-transparent"
        >
          404
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-text-gray mb-8 max-w-md"
        >
          {t.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-primary-neon to-accent-purple rounded-lg font-medium text-white hover:opacity-90 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            {t.backHome}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-medium text-white hover:bg-white/20 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
