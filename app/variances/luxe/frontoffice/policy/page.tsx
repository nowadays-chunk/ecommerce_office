"use client";

import React from 'react';

export default function LuxePolicy() {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a] font-serif">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-px h-24 bg-black/10"></div>
                <h1 className="text-6xl lg:text-9xl font-light tracking-tighter uppercase leading-none italic">PROTOCOLS.</h1>
                <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.5em] opacity-40 leading-loose">Legal_Framework_v8.0 // Acquisition_Standards // Privacy_Encryption.</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-4xl font-light italic uppercase tracking-tight border-b-2 border-black/5 pb-8">ACQUISITION_FAQ.</h2>
                    <div className="space-y-16">
                        {[
                            { q: "How are archives secured?", a: "Every acquisition is handled through a private concierge protocol. Global delivery is executed via specialized white-glove couriers within 48-72 hours of verification." },
                            { q: "What is the membership tiering?", a: "Membership is granting upon the third successful acquisition or by private invitation. Tiers unlock access to the deeper archives and priority concierge lines." },
                            { q: "Can an acquisition be reversed?", a: "Due to the artisanal nature of our collection, reversals are handled case-by-case within 7 days of receipt. Custom commissions are non-reversible." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6">
                                <h3 className="text-xl font-normal tracking-tight opacity-40 uppercase italic">{item.q}</h3>
                                <p className="text-2xl font-light leading-relaxed italic opacity-80">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 bg-[#f8f8f8] p-12 border-l-8 border-[#d4af37]">
                    <h2 className="text-4xl font-light italic uppercase tracking-tight">GLOBAL_TRANSIT.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed italic opacity-80">
                        <p>We provide complimentary global transit for all acquisitions exceeding $2,500. For elite tier members, all transit is handled with absolute priority and zero cost.</p>
                        <p>Transit duration is typically 2-5 business days depending on the geographical coordinate of the recipient. All items are insured at 110% of their acquisition value.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-4xl font-light italic uppercase tracking-tight border-b-2 border-black/5 pb-8">PRIVACY_ENCRYPTION.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed italic opacity-60">
                        <p>Your identity is our most guarded asset. We employ military-grade encryption for all transaction logs and personal data. We do not participate in data sharing networks.</p>
                        <p>All physical transmission manifests are purged 30 days after successful delivery to ensure absolute discretion for our clientele.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
