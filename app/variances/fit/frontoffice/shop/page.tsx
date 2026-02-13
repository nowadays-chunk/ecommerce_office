"use client";

import { useInteractivity } from '../../../../hooks/use-interactivity';

const gear = [
    { id: '1', name: 'APEX PRO RUNNER', price: 160, category: 'FOOTWEAR', status: 'SPEED_OPT', score: '9.8', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', description: 'Engineered for elite speed.' },
    { id: '2', name: 'THERMO-GRID TEE', price: 65, category: 'APPAREL', status: 'DRY_TECH', score: '9.5', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518', description: 'Thermal regulation technology.' },
    { id: '3', name: 'ULTRA-LITE CARGO', price: 120, category: 'EQUIPMENT', status: 'WEIGHTLESS', score: '9.9', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b', description: 'Weightless durability.' },
    { id: '4', name: 'COMPRESSION X-V1', price: 85, category: 'BASE_LAYER', status: 'BIO_MAX', score: '9.7', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd', description: 'Maximum muscle support.' },
];

export default function FitShop() {
    const { addToCart } = useInteractivity();

    return (
        <div className="py-20 px-6 lg:px-12 space-y-32 bg-white text-black italic">
            <header className="max-w-4xl space-y-10 relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/5 -skew-x-12 select-none pointer-events-none"></div>
                <div className="flex items-center space-x-4">
                    <div className="h-1 w-20 bg-black"></div>
                    <span className="text-xs font-black uppercase tracking-[0.5em] animate-pulse">SYSTEM_STRENGTH: 100%</span>
                </div>
                <h1 className="text-[12vw] lg:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase text-black">
                    NO <br /> <span className="text-transparent border-t-8 lg:border-t-[12px] border-black text-black">LIMITS.</span>
                </h1>
                <p className="text-2xl text-black/40 font-black uppercase italic leading-none max-w-xl">
                    High-performance gear for those who refuse to stop. Engineered for maximum output.
                </p>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {gear.map((item) => (
                    <div
                        key={item.id}
                        className="group relative bg-[#f1f1f1] p-10 space-y-8 hover:bg-black hover:text-white transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <span className="text-4xl font-black">//{item.score}</span>
                        </div>

                        <div className="relative z-10 flex justify-between items-start">
                            <span className="text-[10px] font-black bg-white text-black px-3 py-1 uppercase italic tracking-tighter">{item.category}</span>
                            <span className="text-[8px] font-black uppercase tracking-widest group-hover:text-white/40">{item.status}</span>
                        </div>

                        <a href={`/variances/fit/frontoffice/product/${item.id}`} className="block relative z-10 aspect-square bg-white border-2 border-black/5 flex items-center justify-center p-8 group-hover:rotate-2 transition-transform">
                            <img
                                src={item.image}
                                className="w-full h-full object-contain grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                alt={item.name}
                            />
                        </a>

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">{item.name}</h3>
                            <div className="flex justify-between items-end pt-4 border-t-4 border-black/5 group-hover:border-white/10">
                                <p className="text-3xl font-black">${item.price}</p>
                                <button
                                    onClick={() => addToCart({ ...item, stock: 100 } as any)}
                                    className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all hover:scale-110 active:scale-95"
                                    title="Add to Gear"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Performance Zones */}
            <section className="border-t-8 border-black py-24 flex flex-wrap gap-12 justify-center">
                {['CARDI_X', 'HEAVY_SYNC', 'FLOW_MOD', 'RECOVERY', 'BASE_OPS'].map(zone => (
                    <button key={zone} className="group relative px-12 py-6 border-4 border-black hover:bg-black transition-all transform hover:-rotate-1">
                        <span className="relative z-10 text-xl font-black uppercase italic tracking-tighter group-hover:text-white">{zone}</span>
                        <div className="absolute -bottom-2 -right-2 text-[8px] font-bold">V.03-ALPHA</div>
                    </button>
                ))}
            </section>
        </div>
    );
}
