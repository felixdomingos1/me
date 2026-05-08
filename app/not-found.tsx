'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Background3D } from '../components/background-3d';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Background3D />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Número 404 Animado */}
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
            Página Não Encontrada
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-text-gray mb-8 max-w-md"
          >
            Ops! A página que você está procurando parece ter se perdido no espaço digital.
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
              Voltar para Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-medium text-white hover:bg-white/20 transition-all hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
