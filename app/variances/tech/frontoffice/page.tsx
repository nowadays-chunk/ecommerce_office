import React from 'react';

const hardware = [
    { id: 'X-1', name: 'NEURAL_LINK ARM', price: '$2,850', spec: 'Latency: 0.1ms', tag: 'CYBER' },
    { id: 'P-9', name: 'PLASMA_CORE PSU', price: '$890', spec: 'Efficiency: 99.8%', tag: 'POWER' },
    { id: 'V-4', name: 'VISION_MOD GLASSES', price: '$1,200', spec: 'FOV: 220°', tag: 'OPTIX' },
    { id: 'Z-0', name: 'HOVER_DOCK GEN_2', price: '$450', spec: 'Load: 250kg', tag: 'GRAV' },
];

export default function TechHome() {
    return (
        <div className="space-y-32 pb-32">
            {/* Hero Terminal */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8 relative z-10">
                        <div className="inline-flex items-center space-x-4 px-4 py-2 bg-[#00f2ff]/5 border border-[#00f2ff]/20 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-ping"></span>
                            <span className="text-[10px] text-[#00f2ff] font-bold uppercase tracking-[0.2em]">New Hardware Detected // Found: X-Series</span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-none">
                            PUSH_THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#7000ff]">LIMITS.</span>
                        </h1>
                        <p className="text-lg text-[#a0aec0] max-w-lg font-sans leading-relaxed">
                            Equip yourself with the hardware of the 22nd century. Precision engineered for the most demanding digital environments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 pt-8">
                            <button className="px-12 py-5 bg-[#00f2ff] text-black font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,242,255,0.3)]">
                                BOOT_CATALOG
                            </button>
                            <button className="px-12 py-5 border border-[#00f2ff] text-[#00f2ff] font-bold uppercase tracking-widest hover:bg-[#00f2ff]/10 transition-all">
                                LEARN_MORE
                            </button>
                        </div>
                    </div>
                    <div className="relative group perspective-1000 hidden lg:block">
                        <div className="w-full aspect-square border-2 border-[#00f2ff]/20 bg-[#00f2ff]/5 rounded-3xl p-12 transition-all duration-1000 group-hover:rotate-y-12 group-hover:-rotate-x-12 relative overflow-hidden">
                            {/* Visual Glitch Effect */}
                            <div className="absolute inset-0 bg-[#00f2ff]/10 opacity-20 animate-pulse"></div>
                            <div className="w-full h-full border border-[#00f2ff]/40 rounded-2xl flex items-center justify-center text-8xl font-black text-[#00f2ff]/20 italic">
                                IMPLANT_01
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hardware Interface */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-[#00f2ff]/10 pb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-2">Available_Modules</h2>
                        <p className="text-sm opacity-40">Load successful: 4 nodes active</p>
                    </div>
                    <div className="flex space-x-1 font-bold text-[8px] uppercase">
                        {['CPU', 'GPU', 'SENSE', 'POWER'].map(f => (
                            <button key={f} className="px-4 py-2 border border-[#00f2ff]/20 hover:border-[#00f2ff] text-[#00f2ff]/40 hover:text-[#00f2ff] transition-all">{f}</button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {hardware.map((item) => (
                        <div key={item.id} className="relative group bg-[#0d121b] border border-[#00f2ff]/10 p-10 hover:bg-[#00f2ff]/5 transition-all cursor-pointer overflow-hidden">
                            <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center border-l border-b border-[#00f2ff]/10 text-[8px] font-bold text-[#00f2ff]/40 group-hover:text-[#00f2ff]">
                                {item.id}
                            </div>
                            <div className="space-y-6">
                                <span className="text-[8px] px-2 py-0.5 border border-[#00f2ff]/40 text-[#00f2ff] font-bold group-hover:bg-[#00f2ff] group-hover:text-black transition-colors">{item.tag}</span>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#00f2ff] transition-colors">{item.name}</h3>
                                <div className="p-4 bg-black/40 border border-white/5 space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] opacity-40 uppercase">Spec_Load</span>
                                        <span className="text-[10px] text-green-500 font-bold uppercase italic">Pass</span>
                                    </div>
                                    <p className="text-[10px] text-white/60">{item.spec}</p>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-[#00f2ff]">{item.price}</span>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#00f2ff]"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Spec Breakdown */}
            <section className="bg-black py-32 border-y border-[#00f2ff]/20">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <div className="text-sm font-bold text-[#00f2ff] mb-8">INITIATE_DIAGNOSTIC</div>
                    <p className="text-3xl md:text-5xl font-bold text-white leading-tight uppercase tracking-tighter">
                        Hardware that thinks. <br /> Systems that <span className="underline decoration-[#00f2ff] decoration-4 underline-offset-8">evolve.</span>
                    </p>
                    <div className="grid grid-cols-3 gap-8 pt-12">
                        <div>
                            <div className="text-2xl text-white font-bold mb-2">0.001s</div>
                            <div className="text-[8px] uppercase tracking-widest">Latency</div>
                        </div>
                        <div>
                            <div className="text-2xl text-white font-bold mb-2">100%</div>
                            <div className="text-[8px] uppercase tracking-widest">Neural_Match</div>
                        </div>
                        <div>
                            <div className="text-2xl text-white font-bold mb-2">8.2kW</div>
                            <div className="text-[8px] uppercase tracking-widest">Core_Power</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
