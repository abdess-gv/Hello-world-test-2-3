/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Achtergrondafbeelding met overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/amsterdam_canals/1920/1080?blur=2"
          alt="Amsterdamse grachten"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Inhoudskaart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20"
      >
        {/* Amsterdamse Vlag Banner (Rood-Zwart-Rood) */}
        <div className="h-2 bg-[#E3001B]" />
        <div className="h-12 bg-black flex items-center justify-center space-x-4">
          <span className="text-white text-2xl font-bold">✕</span>
          <span className="text-white text-2xl font-bold">✕</span>
          <span className="text-white text-2xl font-bold">✕</span>
        </div>
        <div className="h-2 bg-[#E3001B]" />

        <div className="p-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 bg-stone-100 rounded-full mb-6"
          >
            <MapPin className="w-6 h-6 text-[#E3001B]" />
          </motion.div>

          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-2">
            Hallo Wereld
          </h1>
          <p className="font-sans text-gray-600 mb-8">
            Groeten uit prachtig Amsterdam
          </p>

          <div className="space-y-4">
            <p className="text-sm text-gray-500 italic font-serif">
              "De stad van grachten, fietsen en vrijheid."
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-8 py-4 border-t border-stone-100 flex justify-between items-center">
          <span className="text-xs text-gray-400 font-mono">AMS // 2026</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#E3001B]"></div>
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div className="w-2 h-2 rounded-full bg-[#E3001B]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
