import React from 'react';

const products = [
    { id: 1, name: 'Morning Dew Essence', price: '$48', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80', description: 'Pure botanical recovery' },
    { id: 2, name: 'Forest Mist Toner', price: '$32', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80', description: 'Balanced hydration' },
    { id: 3, name: 'Earth Clay Mask', price: '$45', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80', description: 'Deep volcanic detox' },
    { id: 4, name: 'Moonlight Repair Oil', price: '$64', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80', description: 'Overnight cell regeneration' },
];

export default function ZenHome() {
    return (
        <div className="space-y-32 pb-32">
            {/* Hero */}
            <section className="relative h-[85vh] flex items-center bg-[#f7f5f0]">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 order-2 md:order-1">
                        <span className="text-xs uppercase tracking-[0.5em] text-[#8ca68c] font-bold">The Essence of Organic</span>
                        <h1 className="text-5xl md:text-7xl font-light text-[#2d3e30] leading-[1.1] font-serif italic">
                            Experience the <br /> <span className="font-sans not-italic font-bold opacity-30">Purest Bloom.</span>
                        </h1>
                        <p className="text-[#2d3e30]/60 max-w-md leading-relaxed text-lg">
                            Crafted with hand-picked botanicals and ancient wisdom to restore your natural glow.
                        </p>
                        <div className="pt-4">
                            <button className="bg-[#2d3e30] text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#8ca68c] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#2d3e30]/10">
                                Shop Rituals
                            </button>
                        </div>
                    </div>
                    <div className="relative order-1 md:order-2">
                        <div className="aspect-[4/5] rounded-[100px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-1000 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=80"
                                className="w-full h-full object-cover"
                                alt="Zen product"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#8ca68c]/20 backdrop-blur-xl rounded-full flex items-center justify-center text-center p-6 border border-white/50">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-[#2d3e30]">100% Vegan & Ethical</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product List */}
            <section className="max-w-6xl mx-auto px-4">
                <div className="mb-20 space-y-4">
                    <h2 className="text-3xl font-serif italic text-center text-[#2d3e30]">Seasonal Offerings</h2>
                    <p className="text-center opacity-50 text-xs uppercase tracking-widest">Picked at peak potency</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="aspect-[1/1] overflow-hidden bg-white rounded-3xl mb-8 p-12 hover:shadow-xl hover:shadow-[#8ca68c]/5 transition-all duration-500 relative border border-[#8ca68c]/5">
                                <img
                                    src={product.image}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                    alt={product.name}
                                />
                                <button className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-lg border border-[#8ca68c]/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </button>
                            </div>
                            <div className="space-y-2 text-center">
                                <h3 className="text-lg font-serif italic text-[#2d3e30]">{product.name}</h3>
                                <p className="text-[10px] uppercase tracking-widest text-[#8ca68c] font-bold">{product.description}</p>
                                <p className="text-sm font-bold opacity-60">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature Section */}
            <section className="bg-[#2d3e30] py-24 mx-4 md:mx-12 rounded-[60px] text-white">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">"A daily ritual to honor your skin and the Earth."</h2>
                    <div className="flex flex-wrap justify-center gap-12 pt-8 opacity-60">
                        <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8ca68c]"></div>
                            <span className="text-[10px] uppercase tracking-[0.3em]">Cold-Pressed</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8ca68c]"></div>
                            <span className="text-[10px] uppercase tracking-[0.3em]">Wild-Harvested</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8ca68c]"></div>
                            <span className="text-[10px] uppercase tracking-[0.3em]">Carbon Neutral</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
