import React from 'react';

const products = [
    { id: '1', name: 'Celestial Halo Ring', price: '$24,000', category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80' },
    { id: '2', name: 'Gilded Serpent Bangle', price: '$12,500', category: 'Bracelets', image: 'https://images.unsplash.com/photo-1611085583191-a3b13e840afc?auto=format&fit=crop&w=800&q=80' },
    { id: '3', name: 'Empire Drop Earrings', price: '$8,900', category: 'Earrings', image: 'https://images.unsplash.com/photo-1535633302704-b02f4f141208?auto=format&fit=crop&w=800&q=80' },
    { id: '4', name: 'Midnight Sun Pendant', price: '$15,200', category: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643477877-537ef52781b0?auto=format&fit=crop&w=800&q=80' },
    { id: '5', name: 'Royal Crest Cuff', price: '$31,000', category: 'Bracelets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?auto=format&fit=crop&w=800&q=80' },
    { id: '6', name: 'Aura Pearl Necklace', price: '$18,500', category: 'Necklaces', image: 'https://images.unsplash.com/photo-1596944210900-346707a6aa5d?auto=format&fit=crop&w=800&q=80' },
];

export default function LuxeShop() {
    return (
        <div className="py-20 space-y-16">
            <header className="space-y-4">
                <h1 className="text-5xl font-light tracking-widest text-[#b4945c] uppercase">The Collection</h1>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Explore our curated selection of fine jewelry</p>
            </header>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 space-y-10">
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#b4945c]">Categories</h3>
                        <ul className="space-y-3 text-sm font-medium uppercase tracking-widest text-gray-400">
                            <li className="text-[#b4945c] cursor-pointer">All Pieces</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Rings</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Bracelets</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Earrings</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Necklaces</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#b4945c]">Price Range</h3>
                        <div className="space-y-4">
                            <input type="range" className="w-full h-1 bg-[#b4945c]/20 accent-[#b4945c] appearance-none" />
                            <div className="flex justify-between text-[10px] font-bold text-gray-400">
                                <span>$0</span>
                                <span>$100,000+</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <a
                                key={product.id}
                                href={`/variances/luxe/frontoffice/product/${product.id}`}
                                className="group block space-y-4"
                            >
                                <div className="aspect-[4/5] bg-[#111] overflow-hidden relative border border-white/5 group-hover:border-[#b4945c]/40 transition-all duration-700">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#b4945c]">View Details</span>
                                    </div>
                                </div>
                                <div className="text-center space-y-1">
                                    <h3 className="text-sm font-light tracking-widest uppercase text-white group-hover:text-[#b4945c] transition-colors">{product.name}</h3>
                                    <p className="text-xs font-bold text-[#b4945c]">{product.price}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
