"use client";

import React from 'react';

export default function NordicPolicy() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-12 h-px bg-[#2d2d2d]/20"></div>
                <h1 className="text-6xl lg:text-9xl font-light tracking-tight uppercase leading-none">TERMS.</h1>
                <p className="max-w-xl text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 leading-loose italic">Studio_Regulations // Transit_Clarity // Data_Transparency.</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 lg:px-24 pb-48 space-y-32">
                <section className="space-y-12">
                    <h2 className="text-3xl font-light uppercase tracking-tight border-b border-[#2d2d2d]/10 pb-6 text-[#2d2d2d]">STUDIO_FAQ.</h2>
                    <div className="space-y-16">
                        {[
                            { q: "Shipping Interval?", a: "Standard studio shipping takes 3-6 business days. We provide tracking information as soon as the material is dispatched from our Copenhagen hub." },
                            { q: "Material Guarantee?", a: "We stand by the longevity of our objects. If a piece fails due to structural reasons within 2 years, we will repair or replace it." },
                            { q: "Return Window?", a: "Items can be returned within 30 days of receipt, provided they are in their original state and packaging." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="text-lg font-bold tracking-widest text-[#2d2d2d] uppercase italic opacity-40">{item.q}</h3>
                                <p className="text-xl font-light leading-relaxed opacity-80">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12 bg-[#fafafa] border border-[#2d2d2d]/10 p-12">
                    <h2 className="text-3xl font-light uppercase tracking-tight">TRANSIT_EFFICIENCY.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed opacity-80">
                        <p>Delivery is managed by our logistical partners across the EU and internationally. We aim for the most direct route to reduce the carbon footprint of transit.</p>
                        <p>Flat rate shipping applied globally. Free studio pickup available for residents of Copenhagen. All shipping materials are FSC certified and recyclable.</p>
                    </div>
                </section>

                <section className="space-y-12">
                    <h2 className="text-3xl font-light uppercase tracking-tight border-b border-[#2d2d2d]/10 pb-6">DATA_CLARITY.</h2>
                    <div className="space-y-8 text-xl font-light leading-relaxed opacity-60">
                        <p>We only collect the data necessary to fulfill your studio order. No unnecessary cookies. No third-party marketing lists. Just clear and essential communication.</p>
                        <p>All data is stored securely on servers within the EU, following strict GDPR guidelines for transparency and rights of access.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
