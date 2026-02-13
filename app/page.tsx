"use client";

import React from 'react';
import Link from 'next/link';

const variances = [
  {
    id: 'luxe',
    name: 'LUXE',
    desc: 'Bespoke Jewelry & Objects',
    color: 'bg-[#b4945c]',
    theme: 'gold',
    emoji: '💍',
    tagline: 'Timeless Elegance'
  },
  {
    id: 'zen',
    name: 'ZEN',
    desc: 'Organic Skincare Rituals',
    color: 'bg-[#d1d5db]',
    theme: 'organic',
    emoji: '🌿',
    tagline: 'Pure & Ethical'
  },
  {
    id: 'hype',
    name: 'HYPE',
    desc: 'Underground Streetwear',
    color: 'bg-[#facc15]',
    theme: 'brutalist',
    emoji: '👟',
    tagline: 'Limited Drops'
  },
  {
    id: 'tech',
    name: 'TECH',
    desc: 'Future-Core Hardware',
    color: 'bg-[#00f2ff]',
    theme: 'futuristic',
    emoji: '💻',
    tagline: 'High Performance'
  },
  {
    id: 'nordic',
    name: 'NORDIC',
    desc: 'Minimalist Stockholm Design',
    color: 'bg-[#ffffff]',
    theme: 'minimalist',
    emoji: '🪑',
    tagline: 'Simple Living'
  },
  {
    id: 'vibe',
    name: 'VIBE',
    desc: 'Analog Vinyl & Soul',
    color: 'bg-[#fb923c]',
    theme: 'retro',
    emoji: '📻',
    tagline: 'Retro Spirit'
  },
  {
    id: 'grub',
    name: 'GRUB',
    desc: 'Instant Grocery Extreme',
    color: 'bg-[#ec4899]',
    theme: 'playful',
    emoji: '🍕',
    tagline: 'No Drama Food'
  },
  {
    id: 'fit',
    name: 'FIT',
    desc: 'Elite Engineering for Athletes',
    color: 'bg-[#bef264]',
    theme: 'aggressive',
    emoji: '⚡',
    tagline: 'Faster Stronger'
  },
  {
    id: 'glint',
    name: 'GLINT',
    desc: 'Radiant Beauty Atelier',
    color: 'bg-[#fbcfe8]',
    theme: 'sophisticated',
    emoji: '✨',
    tagline: 'Glow Within'
  },
  {
    id: 'apex',
    name: 'APEX',
    desc: 'Competitive Gaming Gear',
    color: 'bg-[#a855f7]',
    theme: 'gaming',
    emoji: '🎮',
    tagline: 'Dominate The Arena'
  },
];

export default function DiscoveryPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Multiverse_Catalog_V2.0</span>
        </div>
        <h1 className="text-[12vw] md:text-[8rem] font-black tracking-tighter leading-[0.8] uppercase italic">
          DESIGN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10">EXCELLENCE.</span>
        </h1>
        <p className="mt-12 text-xl md:text-2xl font-medium text-white/40 max-w-2xl leading-relaxed italic">
          Explore 10 bespoke ecommerce architectures. Each variance is a complete ecosystem from Frontoffice reveal to Backoffice command.
        </p>
      </section>

      {/* Grid of Variances */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-64">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {variances.map((v, idx) => (
            <div
              key={v.id}
              className={`group relative h-[500px] border border-white/10 overflow-hidden bg-zinc-900/40 p-10 flex flex-col justify-between transition-all duration-700 hover:border-white/40 ${idx === 0 || idx === 7 ? 'lg:col-span-2' : ''}`}
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${v.color} opacity-0 group-hover:opacity-10 blur-[120px] transition-opacity duration-700`}></div>

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-4xl">{v.emoji}</span>
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20 italic group-hover:text-white/60 transition-colors">Var_{idx + 1}</span>
                </div>
                <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none">{v.name}</h3>
                <p className="text-xs font-bold text-white/40 leading-relaxed uppercase tracking-wider">{v.desc}</p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-white/40 group-hover:border-white/30 group-hover:text-white transition-all">{v.theme}</span>
                  <span className="px-3 py-1 border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-white/40 group-hover:border-white/30 group-hover:text-white transition-all">{v.tagline}</span>
                </div>
              </div>

              <div className="relative z-10 space-y-4 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="h-[1px] bg-white/10 w-full mb-6"></div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/variances/${v.id}/frontoffice`}
                    className="flex items-center justify-center py-4 bg-white text-black text-[10px] font-black uppercase italic tracking-tighter hover:bg-[#bef264] transition-colors"
                  >
                    Frontoffice
                  </Link>
                  <Link
                    href={`/variances/${v.id}/backoffice/dashboard`}
                    className="flex items-center justify-center py-4 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase italic tracking-tighter hover:bg-white hover:text-black transition-all"
                  >
                    Backoffice
                  </Link>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute -bottom-12 -right-12 text-[15rem] font-black italic text-white/5 pointer-events-none transition-all duration-700 group-hover:text-white/10 group-hover:-translate-x-8 group-hover:-translate-y-8">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="border-t border-white/10 py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black italic text-white">ANTIGRAVITY_LABS</h2>
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mt-2">Design_System_Output_Stable</p>
          </div>
          <div className="flex space-x-12 text-[10px] font-black uppercase tracking-widest text-white/40 underline underline-offset-4 decoration-white/10 hover:decoration-white transition-all cursor-pointer">
            <span>Documentation</span>
            <span>Contact_Support</span>
            <span>v1.0.42</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
