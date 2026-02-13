"use client";

import { useInteractivity } from '../../../../hooks/use-interactivity';

const collection = [
    { id: '1', name: 'Artek Stool 60', price: 2400, color: 'Natural Birch', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd63b48', category: 'Furniture', description: 'Classic Alvar Aalto stool.' },
    { id: '2', name: 'Muuto Pendant Light', price: 3100, color: 'Soft Grey', image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5', category: 'Lighting', description: 'Minimalist industrial lighting.' },
    { id: '3', name: 'Fritz Hansen Series 7', price: 4800, color: 'Oak', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267', category: 'Furniture', description: 'Timeless plywood chair.' },
    { id: '4', name: 'Hay Tray Table', price: 1950, color: 'Black Steel', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88', category: 'Furniture', description: 'Functional modern tray table.' },
];

export default function NordicShop() {
    const { addToCart } = useInteractivity();

    return (
        <div className="py-24 px-6 lg:px-24 space-y-32 bg-white text-[#1a1a1a]">
            <header className="max-w-3xl space-y-8">
                <div className="h-1 w-12 bg-[#1a1a1a]"></div>
                <h1 className="text-6xl lg:text-8xl font-medium tracking-tight leading-none text-[#1a1a1a]">
                    Simply <br /> Functional.
                </h1>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                    Explore our curated selection of Scandinavian design icons. Pieces that prioritize longevity, materials, and purpose.
                </p>
            </header>

            <div className="flex flex-col lg:flex-row gap-24">
                {/* Minimalist Filters */}
                <aside className="w-full lg:w-48 space-y-16">
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">Furniture</h3>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li className="text-[#1a1a1a] cursor-pointer">View All</li>
                            <li className="hover:text-[#1a1a1a] cursor-pointer transition-colors">Seating</li>
                            <li className="hover:text-[#1a1a1a] cursor-pointer transition-colors">Lighting</li>
                            <li className="hover:text-[#1a1a1a] cursor-pointer transition-colors">Storage</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">Material</h3>
                        <div className="flex flex-col gap-3 text-xs text-gray-400">
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <div className="w-4 h-4 border border-gray-200 rounded-sm"></div>
                                <span>Solid Wood</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <div className="w-4 h-4 border border-gray-200 rounded-sm"></div>
                                <span>Recycled Plastic</span>
                            </label>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                        {collection.map((item) => (
                            <div
                                key={item.id}
                                className="group space-y-8"
                            >
                                <a href={`/variances/nordic/frontoffice/product/${item.id}`} className="block aspect-[4/5] bg-[#f7f7f7] p-16 flex items-center justify-center transition-all duration-700 hover:bg-[#efefef]">
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-1000"
                                        alt={item.name}
                                    />
                                </a>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-medium tracking-tight text-[#1a1a1a]">{item.name}</h3>
                                            <p className="text-xs font-medium text-gray-300 uppercase tracking-widest">{item.color}</p>
                                        </div>
                                        <div className="text-right space-y-2">
                                            <p className="text-sm font-medium text-gray-400">Kr {item.price}</p>
                                            <button
                                                onClick={() => addToCart({ ...item, stock: 20 } as any)}
                                                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors"
                                            >
                                                Add to Basket
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
