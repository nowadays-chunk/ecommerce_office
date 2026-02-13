"use client";

import React from 'react';

const foraging = [
    { id: '1', name: 'Raw Forest Moss', price: '$22', category: 'BOTANICAL', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Hand-Carved Cedar Bowl', price: '$85', category: 'CRAFT', image: 'https://images.unsplash.com/photo-1549221544-793547953258?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Wild Lavender Bundle', price: '$18', category: 'HERB', image: 'https://images.unsplash.com/photo-1471943311424-646960669fba?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Mountain Quartz Stone', price: '$45', category: 'MINERAL', image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=600&q=80' },
];

export default function WildShop() {
    return (
        <div className="py-24 px-6 lg:px-20 space-y-32 bg-[#f4f1ea] text-[#2d2a22] font-serif">
            <header className="max-w-4xl space-y-8 relative">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#a3b18a]/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#344e41] rounded-full flex items-center justify-center text-[#dad7cd] font-bold">W</div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#344e41]/60">Sourced_From_The_Wild</span>
                </div>
                <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-[#2d2a22]">
                    RETURN TO <br /> <span className="text-[#344e41] italic underline decoration-[#a3b18a] decoration-8 underline-offset-8">SOURCE.</span>
                </h1>
                <p className="text-2xl text-[#2d2a22]/60 font-medium leading-relaxed max-w-xl italic">
                    Unprocessed, untamed, and truly sustainable. We bring the essence of the wilderness directly to your sanctuary.
                </p>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {foraging.map((item) => (
                    <a
                        key={item.id}
                        href={`/variances/wild/frontoffice/product/${item.id}`}
                        className="group space-y-8"
                    >
                        <div className="aspect-square bg-white/50 border border-[#344e41]/10 p-12 relative overflow-hidden group-hover:-translate-y-4 transition-all duration-700">
                            <div className="absolute top-6 left-6 bg-[#344e41] text-[#dad7cd] px-3 py-1 text-[8px] font-bold uppercase tracking-widest">{item.category}</div>
                            <img
                                src={item.image}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] sepia-[0.2]"
                                alt="Wild Foraged Item"
                            />
                        </div>
                        <div className="space-y-2 text-center">
                            <h3 className="text-3xl font-bold tracking-tight text-[#2d2a22] group-hover:text-[#344e41] transition-colors">{item.name}</h3>
                            <p className="text-xl font-medium text-[#344e41]/60 pt-2 italic">{item.price}</p>
                        </div>
                    </a>
                ))}
            </main>

            {/* Seasonal Cycles */}
            <section className="bg-[#344e41] p-12 lg:p-24 text-[#dad7cd] space-y-12 rounded-[5rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#a3b18a]/10 blur-[150px] rounded-full"></div>
                <h2 className="text-4xl lg:text-7xl font-black italic tracking-tighter uppercase text-center leading-none">THE_WILD_CYCLE</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {['SPRING_EQUINOX', 'SUMMER_SOLSTICE', 'AUTUMN_EQUINOX', 'WINTER_SOLSTICE'].map(s => (
                        <div key={s} className="p-8 border-2 border-[#a3b18a]/20 hover:border-[#a3b18a] transition-all cursor-pointer group text-center">
                            <p className="text-[10px] font-bold tracking-widest opacity-40 group-hover:opacity-100 italic">{s}</p>
                            <p className="text-lg font-bold mt-4 uppercase">VIEW_FLORA</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
