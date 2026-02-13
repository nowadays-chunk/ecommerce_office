"use client";

import { useInteractivity } from '../../../../hooks/use-interactivity';

const products = [
    { id: '1', name: 'Luminous Glow Serum', price: 85, category: 'SKIN_RADIANCE', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be', description: 'Glow-inducing formula.', stock: 100 },
    { id: '2', name: 'Prism Silk Lip Color', price: 42, category: 'COLOR_ART', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c', description: 'Silk finish color.', stock: 50 },
    { id: '3', name: 'Velvet Cloud Foundation', price: 68, category: 'BASE_PERF', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d521', description: 'Air-light coverage.', stock: 30 },
    { id: '4', name: 'Aura Dust Moonlighter', price: 52, category: 'GLOW_TECH', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19', description: 'Ethereal shimmer.', stock: 20 },
];

export default function GlintShop() {
    const { addToCart } = useInteractivity();

    return (
        <div className="py-24 px-6 lg:px-20 space-y-32 bg-[#fffafd] text-[#4a3a4a]">
            <header className="max-w-4xl space-y-8 relative">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-200/20 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#d4af37]">Aesthetically_Engineered</span>
                </div>
                <h1 className="text-7xl lg:text-9xl font-light tracking-tighter leading-[0.9] text-[#4a3a4a] italic">
                    REFLECT <br /> <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff8fa3] to-[#d4af37]">ELEGANCE.</span>
                </h1>
                <p className="text-2xl text-[#4a3a4a]/40 font-light leading-relaxed max-w-xl">
                    Hyper-pigmented, skin-loving formulas designed to catch every ray of light. Discover your inner luminescence.
                </p>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="group space-y-8"
                    >
                        <div className="aspect-[3/4] bg-white shadow-[0_30px_60px_-15px_rgba(255,143,163,0.15)] p-12 relative overflow-hidden group-hover:-translate-y-4 transition-all duration-1000">
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#fff0f3] opacity-50"></div>
                            <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-1 text-[8px] font-black uppercase tracking-widest text-[#4a3a4a] border border-[#ff8fa3]/20">
                                {item.category}
                            </div>
                            <a href={`/variances/glint/frontoffice/product/${item.id}`} className="block w-full h-full relative">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]"
                                    alt={item.name}
                                />
                            </a>
                        </div>
                        <div className="space-y-4 text-center">
                            <h3 className="text-3xl font-light italic tracking-tight text-[#4a3a4a] group-hover:text-[#ff8fa3] transition-colors uppercase">{item.name}</h3>
                            <div className="h-[1px] w-12 bg-[#ff8fa3]/20 mx-auto"></div>
                            <div className="flex justify-between items-center px-4">
                                <p className="text-2xl font-light text-[#d4af37]">${item.price}</p>
                                <button
                                    onClick={() => addToCart({ ...item } as any)}
                                    className="text-[10px] font-bold uppercase tracking-widest text-[#ff8fa3] border border-[#ff8fa3]/20 px-4 py-2 hover:bg-[#ff8fa3] hover:text-white transition-all"
                                >
                                    ADORN
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Seasonal Collection Shimmer */}
            <section className="bg-gradient-to-br from-[#4a3a4a] to-[#2a1a2a] p-12 lg:p-24 text-white space-y-12 rounded-[5rem] relative overflow-hidden shadow-2xl">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff8fa3]/10 blur-[150px] rounded-full animate-pulse"></div>
                <h2 className="text-4xl lg:text-7xl font-light italic tracking-tighter uppercase text-center leading-none">THE_SHIMMER_COLLECTIVE</h2>
                <div className="flex flex-wrap gap-8 justify-center">
                    {['ROSE_QUARTZ', 'GOLDEN_HOUR', 'MOON_DUST', 'SILK_PRISM'].map(g => (
                        <button key={g} className="px-12 py-5 border border-white/10 text-white/60 font-black uppercase text-[10px] tracking-widest hover:border-[#ff8fa3] hover:text-[#ff8fa3] transition-all transform hover:scale-105 backdrop-blur-xl">
                            {g}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}
