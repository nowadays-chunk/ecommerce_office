"use client";

import React from 'react';
import { useParams } from 'next/navigation';

const categoryProducts = {
    rings: [
        { id: '1', name: 'Celestial Halo Ring', price: '$24,000', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80' },
    ],
    bracelets: [
        { id: '2', name: 'Gilded Serpent Bangle', price: '$12,500', image: 'https://images.unsplash.com/photo-1611085583191-a3b13e840afc?auto=format&fit=crop&w=800&q=80' },
    ],
};

export default function LuxeCategory() {
    const params = useParams();
    const slug = params?.slug as string || 'collection';

    return (
        <div className="py-20 space-y-20">
            <div className="text-center space-y-4">
                <div className="h-[1px] w-20 bg-[#b4945c] mx-auto mb-8"></div>
                <h1 className="text-6xl font-light tracking-[0.3em] text-white uppercase">{slug}</h1>
                <p className="text-[10px] font-bold tracking-[0.5em] text-[#b4945c] uppercase">The Art of Adornment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <a key={i} href={`/variances/luxe/frontoffice/product/${i}`} className="group space-y-6">
                        <div className="aspect-[3/4] bg-[#0a0a0a] overflow-hidden border border-white/5 relative group-hover:border-[#b4945c]/20 transition-all duration-700">
                            <img
                                src={`https://images.unsplash.com/photo-1611085583191-a3b13e840afc?auto=format&fit=crop&w=800&q=80`}
                                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all"
                                alt="Product"
                            />
                            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black uppercase px-6 py-3 tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                Quick View
                            </button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-[#b4945c]">Signature Piece No.{i}</h3>
                            <p className="text-sm font-light text-[#b4945c]">$18,200</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
