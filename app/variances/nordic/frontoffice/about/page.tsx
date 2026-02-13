"use client";

import React from 'react';

export default function NordicAbout() {
    return (
        <div className="min-h-screen bg-white text-[#2d2d2d] font-sans">
            <header className="py-24 px-6 lg:px-24 flex flex-col items-center text-center space-y-12">
                <div className="w-12 h-px bg-[#2d2d2d]/20"></div>
                <h1 className="text-6xl lg:text-8xl font-light tracking-tight uppercase leading-none">THE_FUNCTION.</h1>
                <p className="max-w-xl text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 leading-loose italic">Crafted in the North // Dedicated to the essential form and the longevity of material.</p>
            </header>

            <main className="px-6 lg:px-24 space-y-48 pb-48">
                <section className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-light uppercase tracking-tight border-b border-[#2d2d2d]/10 pb-6 text-[#2d2d2d]">PURPOSEFUL_DESIGN.</h2>
                        <div className="space-y-8 text-xl font-light leading-relaxed opacity-80">
                            <p>We believe that an object's value is found in its utility and its silence. Our design philosophy is rooted in the Scandinavian tradition of honesty—honesty in material, honesty in function, and honesty in form.</p>
                            <p>Every piece we curate is tested against the elements and the passage of time, ensuring that it serves its purpose with grace for years to come.</p>
                        </div>
                    </div>
                    <div className="aspect-[16/9] bg-[#f4f4f4] relative group overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                        <div className="absolute inset-0 border border-[#2d2d2d]/5 pointer-events-none"></div>
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="text-center space-y-8">
                        <h2 className="text-5xl font-light tracking-tight uppercase">ESSENTIAL_VALUES.</h2>
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30">Nordic_Standards_v2.01</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-px bg-[#2d2d2d]/5">
                        {[
                            { title: "Material_Truth", desc: "We use only what is necessary and only what is real. Ash wood, cold-rolled steel, and vegetable-tanned leather." },
                            { title: "Quiet_Utility", desc: "Design that integrates seamlessly into your daily life without demanding attention or creating noise." },
                            { title: "Enduring_Form", desc: "A commitment to longevity. We design for decades, not seasons, reducing the footprint of consumption." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-16 bg-white space-y-8 hover:bg-[#fafafa] transition-colors duration-500">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]">{item.title}</h3>
                                <p className="text-lg font-light opacity-60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 border-y border-[#2d2d2d]/10 text-center space-y-12">
                    <h2 className="text-4xl font-light tracking-tight uppercase">JOIN_THE_STUDIO.</h2>
                    <p className="max-w-2xl mx-auto text-xl font-light opacity-60">Subscribe to our seasonal notes on craftsmanship and receive early access to new studio works.</p>
                    <button className="px-16 py-6 border-2 border-[#2d2d2d] text-[#2d2d2d] text-xl font-bold uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-white transition-all transform active:scale-95">
                        JOIN_STATED
                    </button>
                </section>
            </main>
        </div>
    );
}
