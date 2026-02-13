"use client";

import { useInteractivity } from '../../../../hooks/use-interactivity';

const drops = [
    { id: '1', name: 'NEON GHOST ZIP-UP', price: 180, stock: 10, status: 'LIVE', color: 'bg-[#facc15]', category: 'OUTERWEAR', image: 'https://images.unsplash.com/photo-1552066344-2464c1135c32', description: 'Limited neon aesthetic.' },
    { id: '2', name: 'BRUTALIST CARGO V1', price: 240, stock: 8, status: 'HOT', color: 'bg-white', category: 'CORE_BASIC', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1', description: 'Structural durability.' },
    { id: '3', name: 'CYBER-TRUCK TEE', price: 65, stock: 50, status: 'WAIT', color: 'bg-[#facc15]', category: 'CORE_BASIC', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518', description: 'Waitlist active.' },
    { id: '4', name: 'VOID RUNNER KICKS', price: 350, stock: 0, status: 'END', color: 'bg-zinc-800', category: 'ACCESSORIES', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', description: 'Sold out archive.' },
];

export default function HypeShop() {
    const { addToCart } = useInteractivity();

    return (
        <div className="py-20 space-y-32">
            <header className="px-6 space-y-8 border-b-8 border-black pb-20">
                <div className="flex justify-between items-start">
                    <h1 className="text-[15vw] font-black leading-none italic uppercase tracking-tighter">THE_<br />SURPLUS</h1>
                    <div className="text-right space-y-2">
                        <p className="text-xs font-black bg-black text-white px-2 py-1 inline-block uppercase">B_VERSION_03</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">System_Status: Aggressive</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    {['ALL_DROPS', 'OUTERWEAR', 'CORE_BASIC', 'ACCESSORIES'].map(t => (
                        <button key={t} className="px-6 py-4 bg-white border-4 border-black text-black font-black italic uppercase hover:bg-[#facc15] transition-all transform hover:-translate-y-1 hover:translate-x-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            {t}
                        </button>
                    ))}
                </div>
            </header>

            <main className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-y-8 border-black">
                {drops.map((drop, idx) => (
                    <div
                        key={drop.id}
                        className={`group border-black border-r-8 last:border-r-0 p-12 space-y-8 transition-colors ${drop.color === 'bg-[#facc15]' ? 'hover:bg-[#facc15]' : 'hover:bg-white'} ${idx % 2 === 0 ? 'bg-[#f1f1f1]' : 'bg-white'}`}
                    >
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-black italic bg-black text-white px-3 py-1 uppercase tracking-tighter">{drop.status}</span>
                            <span className="text-xs font-black uppercase tracking-tighter">[{drop.stock > 0 ? `${drop.stock} LEFT` : 'SOLD OUT'}]</span>
                        </div>

                        <a href={`/variances/hype/frontoffice/product/${drop.id}`} className="block aspect-square bg-black border-4 border-black relative overflow-hidden group-hover:rotate-2 transition-transform">
                            <img
                                src={drop.image}
                                className="w-full h-full object-cover grayscale brightness-125 contrast-150 mix-blend-screen opacity-80"
                                alt={drop.name}
                            />
                        </a>

                        <div className="space-y-4">
                            <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none">{drop.name}</h3>
                            <div className="flex justify-between items-end pt-4 border-t-4 border-black/10">
                                <span className="text-2xl font-black uppercase">${drop.price}</span>
                                <button
                                    onClick={() => addToCart({ ...drop } as any)}
                                    className="text-4xl hover:translate-x-4 transition-transform hover:text-black font-black"
                                    title="ADD_TO_DROP"
                                >
                                    ADD_
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Brutalist Pulse */}
            <section className="px-6 py-40 bg-black text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="relative z-10 space-y-12">
                    <h2 className="text-[20vw] font-black leading-none italic uppercase tracking-tighter -mt-20">NO_RESTOCK</h2>
                    <div className="grid md:grid-cols-2 gap-20 items-end">
                        <p className="text-5xl font-black italic leading-none uppercase tracking-tighter">Wait for nothing. <br /> Pay for quality. <br /> Wear the noise.</p>
                        <button className="w-full py-12 bg-[#facc15] text-black text-4xl font-black italic uppercase tracking-tighter hover:bg-white transition-all transform hover:-rotate-3">
                            ENTER_THE_VOID
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
