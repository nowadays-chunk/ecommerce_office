"use client";

import React from 'react';

export default function FitPolicy() {
    return (
        <div className="min-h-screen bg-white text-black font-sans italic">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-24 h-4 bg-black skew-x-[-12deg]"></div>
                <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none italic -skew-x-12">SYSTEMS.</h1>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">ELITE_REGULATIONS // v4.0 // ENFORCED</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter border-b-[12px] border-black pb-8 -skew-x-12">PERFORMANCE_FAQ.</h2>
                    <div className="space-y-16">
                        {[
                            { q: "Logistics Velocity?", a: "Deployment initiates within 12 hours. Express transit is 24-48 hours. We optimize for the shortest possible downtime between order and delivery." },
                            { q: "Defect Protocols?", a: "Hardware failure is covered under our 12-month elite warranty. If it doesn't perform to spec, we replace it. No excuses." },
                            { q: "Optimization Period?", a: "Returns accepted within 15 days in original condition. We design for results; if you're not seeing them, we facilitate the return." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6 group">
                                <h3 className="text-xl font-black tracking-tighter text-white bg-black px-6 py-2 inline-block uppercase italic group-hover:bg-[#ff0000] transition-colors">{item.q}</h3>
                                <p className="text-2xl font-black leading-tight italic decoration-black decoration-8 underline">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 border-12 border-black p-12 bg-black text-white -skew-x-6 transform hover:skew-x-0 transition-transform">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter">ELITE_TRANSIT.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic">
                        <p>Global logistics are synchronized with our core hubs. Real-time tracking is standard for all deployments. High-velocity transit is ensured via premium athletic couriers.</p>
                        <p>Calculated shipping rates based on sector weight. Zero-friction delivery to every major training zone worldwide.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter border-b-4 border-black/20 pb-8">DATA_INTEGRITY.</h2>
                    <div className="space-y-8 text-xl font-black leading-tight italic opacity-40">
                        <p>Your performance data is your asset. We only sync what is necessary for acquisition. High-level encryption guards your identity logs.</p>
                        <p>No third-party data extraction. We prioritize the security of your training network over simple commerce. Standby mode active.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
