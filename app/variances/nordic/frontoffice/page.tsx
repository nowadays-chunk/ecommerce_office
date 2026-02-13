import React from 'react';

const collection = [
    { id: 1, name: 'Ask Table Lamp', price: '$240', material: 'Ash Wood', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Sjö Lounge Chair', price: '$1,120', material: 'Wool/Oak', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Klint Sideboard', price: '$1,850', material: 'Smoked Oak', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Sten Pendant Light', price: '$310', material: 'Hand-blown Glass', image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb21?auto=format&fit=crop&w=800&q=80' },
];

export default function NordicHome() {
    return (
        <div className="space-y-32 py-20">
            {/* Editorial Hero */}
            <section className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-10">
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.9]">
                        Functional <br /> <span className="text-black/20 italic">Aesthetics.</span>
                    </h1>
                    <p className="text-lg text-black/60 max-w-sm leading-relaxed">
                        Discover our Spring '24 collection. Timeless pieces designed to bring light and calm into your home.
                    </p>
                    <div className="pt-4">
                        <button className="border-b-2 border-black pb-2 text-sm font-bold uppercase tracking-widest hover:text-black/40 hover:border-black/20 transition-all">
                            View Catalog
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="aspect-[4/3] bg-[#f0f0f0] overflow-hidden rounded-sm">
                        <img
                            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                            alt="Nordic Interior"
                        />
                    </div>
                </div>
            </section>

            {/* Product Feed */}
            <section className="space-y-20">
                <div className="flex justify-between items-end border-b border-gray-100 pb-8">
                    <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black/20">Selected Works</h2>
                    <span className="text-xs text-black/40">Showing 4 of 24</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {collection.map((item) => (
                        <div key={item.id} className="group cursor-pointer space-y-6">
                            <div className="aspect-[1/1] overflow-hidden bg-white mb-6 border border-gray-50 group-hover:bg-[#f9f9f9] transition-colors">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                                    alt={item.name}
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                    <span className="text-xs text-black/40">{item.price}</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-widest text-black/20 font-bold">{item.material}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sustainable Section */}
            <section className="bg-white p-20 border border-gray-100 rounded-sm grid md:grid-cols-2 gap-20 items-center">
                <div className="space-y-6">
                    <span className="text-xs font-bold text-black/20 uppercase tracking-[0.4em]">Our Ethics</span>
                    <h2 className="text-4xl font-medium tracking-tight">Crafted for generations, not seasons.</h2>
                    <p className="text-black/60 leading-relaxed font-serif text-lg italic">
                        "We use only FSC-certified timber and 100% renewable energy in our production facilities. Design that respects the material."
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 opacity-40">
                    <div className="aspect-square bg-gray-50 flex items-center justify-center text-[10px] uppercase tracking-widest text-center p-4">Sweden <br /> Designed</div>
                    <div className="aspect-square bg-gray-50 flex items-center justify-center text-[10px] uppercase tracking-widest text-center p-4">Solid <br /> Oak</div>
                    <div className="aspect-square bg-gray-50 flex items-center justify-center text-[10px] uppercase tracking-widest text-center p-4">Toxic <br /> Free</div>
                    <div className="aspect-square bg-gray-50 flex items-center justify-center text-[10px] uppercase tracking-widest text-center p-4">Recyclable <br /> Packaging</div>
                </div>
            </section>
        </div>
    );
}
