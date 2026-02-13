import React from 'react';

const products = [
    { id: 1, name: 'Illuminating Aura Mist', price: '$58', note: 'Hyaluronic Boost', image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Velvet Petal Lip Tint', price: '$32', note: 'Organic Pigment', image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Sacred Clay Cleanser', price: '$45', note: 'Mineral Rich', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Midnight Repair Serum', price: '$85', note: 'Retinol Complex', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80' },
];

export default function GlintHome() {
    return (
        <div className="space-y-32 py-20">
            {/* Hero Reveal */}
            <section className="relative grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12 relative z-10">
                    <div className="inline-block px-4 py-1 border border-[#fb7185]/30 text-[#fb7185] text-[10px] uppercase font-bold tracking-[0.4em] rounded-full">
                        Nouvelle Collection '24
                    </div>
                    <h1 className="text-7xl md:text-[9rem] font-light tracking-tighter leading-[0.8] text-[#fb7185]">
                        THE <br /> SILK <br /> <span className="italic font-normal opacity-30 text-[#5c4033]">TOUCH.</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light italic text-[#5c4033]/60 max-w-sm">
                        Experience the fusion of rare botanicals and cellular science. Radiant skin is an art form.
                    </p>
                    <div className="flex gap-8 items-center pt-8">
                        <button className="bg-[#fb7185] text-white px-12 py-5 rounded-full font-bold uppercase text-[10px] tracking-widest shadow-2xl hover:bg-[#5c4033] transition-colors">
                            Explore Elixirs
                        </button>
                        <button className="text-[#fb7185] border-b border-[#fb7185] pb-1 font-bold uppercase text-[10px] tracking-widest hover:text-[#5c4033] hover:border-[#5c4033] transition-colors">
                            Our Vision
                        </button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="aspect-[4/5] bg-white rounded-[100px] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-[2000ms] shadow-2xl p-1">
                        <img
                            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=80"
                            className="w-full h-full object-cover rounded-[99px] grayscale-[20%] group-hover:grayscale-0 transition-all"
                            alt="Glint Radiant"
                        />
                    </div>
                    <div className="absolute top-10 right-0 w-32 h-32 bg-white/20 backdrop-blur-3xl rounded-full border border-white/50 animate-pulse"></div>
                </div>
            </section>

            {/* Boutique Feed */}
            <section className="space-y-24">
                <div className="text-center space-y-4">
                    <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-[#fb7185]">The Curated Boutique</h2>
                    <p className="text-4xl font-light italic text-[#5c4033]">Radiance simplified.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {products.map((p) => (
                        <div key={p.id} className="group cursor-pointer">
                            <div className="aspect-[1/1] overflow-hidden bg-white mb-8 relative p-12 group-hover:bg-[#fff0f3] transition-colors">
                                <img
                                    src={p.image}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 mix-blend-multiply opacity-80 group-hover:opacity-100"
                                    alt={p.name}
                                />
                                <button className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center justify-center border border-[#fb7185]/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fb7185" strokeWidth="2.5"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </button>
                            </div>
                            <div className="space-y-2 text-center">
                                <h3 className="text-lg font-light italic text-[#5c4033]">{p.name}</h3>
                                <p className="text-[10px] uppercase tracking-widest text-[#fb7185] font-bold">{p.note}</p>
                                <p className="text-sm font-bold opacity-30">{p.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Philosophy Banner */}
            <section className="bg-white py-40 mx-[-100%] px-[100%] border-y border-[#fb7185]/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-[#fb7185]/5 translate-x-full group-hover:translate-x-0 transition-transform duration-[3000ms]"></div>
                <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
                    <h2 className="text-5xl font-light leading-tight italic">"Beauty is the illuminate of a soul at peace."</h2>
                    <div className="flex justify-center space-x-12 pt-8">
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Vegan_Formula</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Cruelty_Free</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Ethical_Extracts</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
