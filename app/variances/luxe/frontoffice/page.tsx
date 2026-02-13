import React from 'react';

const products = [
    { id: 1, name: 'The Sovereign Diamond Ring', price: '$12,400', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Eternal Gold Timepiece', price: '$28,950', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Celestial Pearl Necklace', price: '$8,200', image: 'https://images.unsplash.com/photo-1535633302703-b070344b0e8c?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Emerald Legacy Earrings', price: '$15,600', image: 'https://images.unsplash.com/photo-1544441893-675973e31d85?auto=format&fit=crop&w=800&q=80' },
];

export default function LuxeHome() {
    return (
        <div className="space-y-24 pb-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1582533561751-ef740ca04b0b?auto=format&fit=crop&w=1920&q=80"
                        className="w-full h-full object-cover opacity-40"
                        alt="Luxury Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                </div>
                <div className="relative z-10 text-center space-y-8 max-w-4xl px-6">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                        THE ART OF <span className="text-[#d4af37]">LEGACY</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#d4af37]/80 italic max-w-2xl mx-auto">
                        Discover a collection where every piece tells a story of unparalleled craftsmanship and timeless elegance.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                        <button className="px-10 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105">
                            Explore Collection
                        </button>
                        <button className="px-10 py-4 border border-[#d4af37] text-[#d4af37] font-bold uppercase tracking-widest hover:bg-[#d4af37]/10 transition-all">
                            Private Viewing
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold uppercase tracking-widest">The Curated Selection</h2>
                    <div className="w-24 h-px bg-[#d4af37] mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-6 border border-[#d4af37]/10 group-hover:border-[#d4af37]/40 transition-colors">
                                <img
                                    src={product.image}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt={product.name}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="px-6 py-2 border border-white text-white uppercase text-xs tracking-widest">Detail</span>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-white transition-colors">{product.name}</h3>
                            <p className="text-[#d4af37] font-mono">{product.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Philosophy */}
            <section className="bg-black/50 py-24 border-y border-[#d4af37]/10">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <span className="text-xs uppercase tracking-[0.5em] text-[#d4af37]/60">Our Philosophy</span>
                    <h2 className="text-4xl font-light italic text-white line-height-relaxed">
                        "True luxury is not just about what you wear, but the emotion it evokes. We create artifacts of excellence for those who demand the extraordinary."
                    </h2>
                    <div className="pt-8 italic text-[#d4af37]">
                        — Arthur de Luxe, Founder
                    </div>
                </div>
            </section>
        </div>
    );
}
