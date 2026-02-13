"use client";

import { useInteractivity } from '../../../../hooks/use-interactivity';

const hardware = [
    { id: '1', name: 'TITAN X-GEN MOUSE', price: 120, category: 'INPUT', description: '8000Hz Optical Sensor.', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf', stock: 100 },
    { id: '2', name: 'QUANTUM MECHANICAL TKL', price: 180, category: 'PERIPHERAL', description: '1000Hz Speed Keys.', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae', stock: 50 },
    { id: '3', name: 'NEXUS ULTRA PAD', price: 45, category: 'ACCESSORY', description: 'Glide surface XXL.', image: 'https://images.unsplash.com/photo-1618285566371-700673d312bc', stock: 200 },
    { id: '4', name: 'APEX AUDIO CORE', price: 220, category: 'AUDIO', description: '7.1 Titanium Drivers.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', stock: 30 },
];

export default function ApexShop() {
    const { addToCart } = useInteractivity();

    return (
        <div className="py-24 px-6 lg:px-20 space-y-32 bg-[#050505] text-[#00ff9d] font-mono">
            <header className="max-w-4xl space-y-10 relative">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00ff9d]/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none"></div>
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-1 bg-[#00ff9d]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ff9d]/60">Neural_Link_v2.0 // Active</span>
                </div>
                <h1 className="text-8xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] text-white italic skew-x-[-12deg]">
                    READY <br /> <span className="text-transparent border-t-8 border-[#00ff9d] text-[#00ff9d]">PLAYER.</span>
                </h1>
                <p className="text-2xl text-white/40 font-bold leading-relaxed max-w-xl italic">
                    Unleash your potential with gear optimized for elite performance. No lag, no compromise, pure dominance.
                </p>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hardware.map((item) => (
                    <div
                        key={item.id}
                        className="group relative bg-[#0a0a0a] border-2 border-white/5 p-8 space-y-8 hover:border-[#00ff9d] transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-opacity">
                            <span className="text-[8px] font-black uppercase tracking-widest text-white">SYSTEM_COMPLIANT</span>
                        </div>

                        <a href={`/variances/apex/frontoffice/product/${item.id}`} className="block aspect-square bg-white/5 flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-[#00ff9d]/5 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src={item.image}
                                className="w-full h-full object-contain grayscale brightness-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                                alt={item.name}
                            />
                        </a>

                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <span className="text-[8px] font-black bg-[#00ff9d] text-black px-3 py-1 uppercase">{item.category}</span>
                            </div>
                            <h3 className="text-2xl font-black tracking-tighter text-white group-hover:text-[#00ff9d] transition-colors uppercase italic">{item.name}</h3>
                            <div className="flex justify-between items-end pt-4 border-t border-white/10 group-hover:border-[#00ff9d]/30">
                                <p className="text-3xl font-black text-white italic">${item.price}</p>
                                <button
                                    onClick={() => addToCart({ ...item } as any)}
                                    className="w-12 h-12 bg-white/5 text-white flex items-center justify-center border border-white/10 group-hover:bg-[#00ff9d] group-hover:text-black transition-all"
                                    title="SYNC_GEAR"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Competitive Zones */}
            <section className="bg-black border-4 border-[#00ff9d]/20 p-12 lg:p-24 text-white space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#00ff9d]/10 blur-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h2 className="text-5xl lg:text-8xl font-black italic tracking-tighter uppercase text-center leading-none skew-x-[-12deg]">DOMINANCE_DOMAINS</h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {['FPS_ELITE', 'MOBA_CORE', 'SIM_ULTRA', 'PRO_CAST', 'DEV_OPS'].map(g => (
                        <button key={g} className="px-12 py-6 border-2 border-[#00ff9d]/40 text-[#00ff9d] font-black uppercase text-xs tracking-[0.3em] hover:bg-[#00ff9d] hover:text-black transition-all transform hover:-rotate-3 skew-x-[-10deg]">
                            {g}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}
