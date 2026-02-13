"use client";

import React from 'react';

const products = [
    { id: '1', name: 'Sage & Cedar Mist', price: '$42', category: 'Facial Mists', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d521?auto=format&fit=crop&w=400&q=80' },
    { id: '2', name: 'Raw Honey Cleanser', price: '$58', category: 'Cleansers', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80' },
    { id: '3', name: 'Hibiscus Glow Serum', price: '$85', category: 'Serums', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80' },
    { id: '4', name: 'Oatmeal Soothing Balm', price: '$35', category: 'Moisturizers', image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=400&q=80' },
    { id: '5', name: 'Sea Salt Body Grain', price: '$62', category: 'Body Care', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&q=80' },
    { id: '6', name: 'Nettle Scalp Tonic', price: '$48', category: 'Hair', image: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?auto=format&fit=crop&w=400&q=80' },
];

export default function ZenShop() {
    return (
        <div className="py-20 space-y-24 px-6 lg:px-12">
            <header className="max-w-2xl text-left space-y-6">
                <h1 className="text-5xl font-light text-[#5f634f] lowercase tracking-tighter">holistic garden solutions.</h1>
                <p className="text-lg text-[#5f634f]/60 font-medium leading-relaxed">
                    Sourced from protected botanical gardens. 100% cruelty-free and biodegradable formulas for the conscious soul.
                </p>
            </header>

            <div className="flex flex-col lg:flex-row gap-20">
                {/* Natural Filters */}
                <aside className="w-full lg:w-48 space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f634f]/40">Ritual Type</h3>
                        <ul className="space-y-4 text-sm font-medium text-[#5f634f]/80">
                            <li className="text-[#a78b71] cursor-pointer">Daily Basics</li>
                            <li className="hover:text-[#a78b71] cursor-pointer transition-colors">Evening Repair</li>
                            <li className="hover:text-[#a78b71] cursor-pointer transition-colors">Sun Protection</li>
                            <li className="hover:text-[#a78b71] cursor-pointer transition-colors">Bath Rituals</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f634f]/40">Ingredient Focus</h3>
                        <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-[#5f634f]/60">
                            <span className="px-3 py-1 bg-[#f3f4ef] rounded-full hover:bg-[#a78b71] hover:text-white transition-colors cursor-pointer">Vegan</span>
                            <span className="px-3 py-1 bg-[#f3f4ef] rounded-full hover:bg-[#a78b71] hover:text-white transition-colors cursor-pointer">Cold-Pressed</span>
                        </div>
                    </div>
                </aside>

                {/* Product Earth Grid */}
                <main className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20">
                        {products.map((product) => (
                            <a
                                key={product.id}
                                href={`/variances/zen/frontoffice/product/${product.id}`}
                                className="group space-y-8"
                            >
                                <div className="aspect-[1/1] bg-[#f9faf6] p-12 relative overflow-hidden group-hover:bg-[#f3f4ef] transition-colors duration-[1.5s]">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-[2s]"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/60 backdrop-blur-md px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-[#5f634f]">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-light text-[#5f634f] lowercase tracking-tight group-hover:text-[#a78b71] transition-colors">{product.name}</h3>
                                    <div className="flex justify-between items-center text-sm font-medium text-[#5f634f]/40 uppercase tracking-widest">
                                        <span>Ethical Origin</span>
                                        <span className="text-[#5f634f]">{product.price}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
