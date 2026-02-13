"use client";

import React from 'react';

export default function ApexContact() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
                <div className="absolute top-0 text-[18vw] font-black text-[#ff3e3e]/5 uppercase skew-x-[-12deg] select-none pointer-events-none">SYNC</div>
                <div className="w-16 h-16 border-4 border-[#ff3e3e] rounded-none rotate-45 flex items-center justify-center shadow-[0_0_30px_#ff3e3e]">
                    <div className="w-4 h-4 bg-[#ff3e3e] animate-ping"></div>
                </div>
                <h1 className="text-7xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none italic text-white skew-x-[-12deg]">SIGNAL.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e3e]/40 italic">MISSION_CONTROL // v8.01.XP // ON_AIR</p>
            </header>

            <main className="max-w-6xl mx-auto px-6 lg:px-24 pb-48 grid lg:grid-cols-2 gap-24 relative z-10">
                <section className="space-y-20">
                    <div className="space-y-12 text-left">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b-8 border-[#ff3e3e]/20 pb-8 text-white skew-x-[-12deg]">NODES.</h2>
                        <div className="space-y-16">
                            <div className="group cursor-crosshair relative">
                                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 border-2 border-[#ff3e3e] group-hover:bg-[#ff3e3e] transition-all"></div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-4 block underline decoration-[#ff3e3e]/20 underline-offset-8">SQUAD_VOICE_SYNC</p>
                                <p className="text-6xl font-black tracking-tighter text-white group-hover:text-[#ff3e3e] transition-colors transition-transform group-hover:translate-x-4">01-800-APEX-REC</p>
                            </div>
                            <div className="group cursor-crosshair relative">
                                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 border-2 border-[#ff3e3e] group-hover:bg-[#ff3e3e] transition-all"></div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-4 block underline decoration-[#ff3e3e]/20 underline-offset-8">ENCRYPTED_SIGNAL</p>
                                <p className="text-6xl font-black tracking-tighter text-white group-hover:bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] group-hover:text-white px-8 py-2 inline-block transition-all shadow-[0_0_40px_rgba(255,62,62,0.2)]">ops@apex.gg</p>
                            </div>
                            <div className="pt-8 border-t-8 border-[#ff3e3e]/10">
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-4 italic">Bunker_Sector_88</p>
                                <p className="text-3xl font-black italic text-white/40 leading-tight">
                                    Level -12, Hub Alpha<br />
                                    Virtual Commons // Grid 001<br />
                                    Neo Tokyo // Apex_Network
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-16 border-8 border-[#ff3e3e]/20 bg-black text-[#ff3e3e] space-y-8 skew-x-[-6deg] transform hover:skew-x-0 transition-transform shadow-[0_0_100px_rgba(255,62,62,0.1)] relative group">
                        <div className="absolute top-0 right-0 p-8 text-[10px] font-black opacity-20 group-hover:opacity-100 italic transition-opacity">DECRYPT_ACTIVE</div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 italic">COMM_HANDSHAKE</h3>
                        <p className="text-2xl font-black italic uppercase leading-tight italic text-white/80">"Signals are prioritize by rank and amplitude. We maintain constant vigilance over mission-critical transmissions. Expect zero-latency acknowledgement."</p>
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-2 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] shadow-[0_0_30px_#ff3e3e]"></div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 italic text-white">SQUAD_READY_v8.01.XP</p>
                        </div>
                    </div>
                </section>

                <form className="space-y-12 p-16 border-8 border-[#ff3e3e]/10 bg-black shadow-[0_0_150px_rgba(255,62,62,0.15)] flex flex-col justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3e3e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-12 relative z-10">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter text-center text-white skew-x-[-12deg]">TRANSMIT_PAYLOAD.</h2>
                        <div className="space-y-10">
                            <div className="relative bg-[#ff3e3e]/5 p-8 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-2 block">PLAYER_ALIAS</label>
                                <input type="text" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-white uppercase tracking-tighter" placeholder="IDENT_LOG" />
                            </div>
                            <div className="relative bg-[#ff3e3e]/5 p-8 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-2 block">SIGNAL_PATH</label>
                                <input type="email" className="w-full bg-transparent outline-none text-2xl font-black italic py-2 text-white uppercase tracking-tighter" placeholder="LEGEND@APEX.GG" />
                            </div>
                            <div className="relative bg-[#ff3e3e]/5 p-8 border-2 border-[#ff3e3e]/10 focus-within:border-[#ff3e3e] transition-all">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#ff3e3e]/40 mb-2 block">MISSION_LOG</label>
                                <textarea rows={4} className="w-full bg-transparent outline-none text-2xl font-black italic py-4 resize-none text-white uppercase tracking-tighter" placeholder="DESCRIBE THE DATA..."></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-12 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-5xl font-black uppercase tracking-tighter hover:scale-[1.05] transition-all transform skew-x-[-12deg] shadow-[0_0_80px_rgba(255,62,62,0.5)] active:scale-95 mt-12 relative z-10 overflow-hidden group/btn">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                        EXECUTE_HANDSHAKE
                    </button>
                </form>
            </main>
        </div>
    );
}
