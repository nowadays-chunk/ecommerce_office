"use client";

import React from 'react';

export default function NordicCheckout() {
  return (
    <div className="py-24 px-6 lg:px-24 max-w-5xl mx-auto space-y-24 bg-white text-[#1a1a1a]">
       <header className="space-y-4">
          <div className="h-[1px] w-8 bg-[#1a1a1a]"></div>
          <h1 className="text-4xl font-medium tracking-tight text-[#1a1a1a]">Secure Transaction.</h1>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-300">Step 2 / 2 Information</p>
       </header>

       <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-20">
             {/* Shipping Information */}
             <section className="space-y-12">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a]">Fulfillment Details</h2>
                <div className="grid grid-cols-1 gap-8">
                   {[
                     { label: 'Recipient Name', p: 'Soren Lund' },
                     { label: 'Notification Email', p: 'soren@nordic.co' },
                     { label: 'Destination Address', p: 'Kungsgatan 12' },
                     { label: 'City & Zip', p: 'Stockholm, 111 22' },
                   ].map(f => (
                     <div key={f.label} className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{f.label}</label>
                        <input className="w-full bg-white border border-gray-100 p-5 text-sm text-[#1a1a1a] outline-none focus:border-gray-300 transition-all placeholder:opacity-20" placeholder={f.p} />
                     </div>
                   ))}
                </div>
             </section>

             {/* Logistics Select */}
             <section className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">Shipping Method</h3>
                <div className="p-8 border border-[#1a1a1a] space-y-2 cursor-pointer hover:bg-gray-50 transition-all">
                   <div className="flex justify-between items-center text-sm font-medium">
                      <span>Standard Parcel</span>
                      <span>FREE</span>
                   </div>
                   <p className="text-xs text-gray-400">Estimated transit: 4-6 business days</p>
                </div>
             </section>
          </div>

          {/* Secure Payment */}
          <aside className="space-y-12">
             <div className="p-12 border border-gray-100 bg-[#fdfdfd] space-y-10 sticky top-32">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">Collection Summary</h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-start text-sm text-gray-500">
                      <span>Artek Stool 60 (x1)</span>
                      <span>Kr 2,400</span>
                   </div>
                   <div className="h-[1px] bg-gray-100"></div>
                   <div className="flex justify-between items-end">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">Grand Total</span>
                      <span className="text-3xl font-medium text-[#1a1a1a]">Kr 2,400</span>
                   </div>
                </div>
                
                <div className="space-y-6 pt-12 border-t border-gray-100">
                   <div className="space-y-3 font-mono">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Payment Protocol</label>
                      <input className="w-full border-b border-gray-200 p-2 text-sm focus:border-black outline-none transition-colors" placeholder="0000 0000 0000 0000" />
                   </div>
                   <button className="w-full py-6 bg-[#1a1a1a] text-white font-medium uppercase text-xs tracking-widest hover:bg-black transition-all shadow-lg">
                      Confirm Purchase
                   </button>
                </div>
                
                <div className="pt-6 text-center">
                   <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] italic">SSL 256-BIT ENCRYPTED TRANSIT</p>
                </div>
             </div>
          </aside>
       </div>
    </div>
  );
}
