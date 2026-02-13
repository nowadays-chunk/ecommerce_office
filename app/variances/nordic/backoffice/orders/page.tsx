"use client";

import { useInteractivity } from '../../../../hooks/use-interactivity';

export default function NordicOrderManagement() {
   const { orders, updateOrderStatus } = useInteractivity();

   const handleUpdateStatus = (id: string) => {
      const status = prompt("NEW_STATUS (pending, shipped, delivered, cancelled):") as any;
      if (status) updateOrderStatus(id, status);
   };

   return (
      <div className="min-h-screen bg-white text-[#2d2d2d] font-sans flex text-black">
         {/* Sidebar */}
         <aside className="w-80 border-r border-[#2d2d2d]/10 p-12 flex flex-col justify-between">
            <div className="space-y-12">
               <div className="w-8 h-px bg-[#2d2d2d]/40"></div>
               <h2 className="text-3xl font-light uppercase tracking-tight">STUDIO_OPS.</h2>
               <nav className="space-y-8 text-[10px] font-bold uppercase tracking-widest text-[#2d2d2d]/40 italic">
                  <a href="/variances/nordic/backoffice/dashboard" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">UTILITY_VIEW</a>
                  <a href="/variances/nordic/backoffice/products" className="block opacity-40 hover:text-[#2d2d2d] transition-colors">MATERIAL_STOCK</a>
                  <a href="#" className="block text-[#2d2d2d]">CRAFT_LOGS</a>
                  <a href="#" className="block hover:text-[#2d2d2d] transition-colors">STUDIO_CLIENTS</a>
                  <a href="#" className="block hover:text-[#2d2d2d] transition-colors">LOG_ARCHIVE</a>
               </nav>
            </div>
            <div className="text-[10px] font-bold opacity-20 uppercase tracking-[0.4em] italic">
               STUDIO_EFFICIENCY_v1.01
            </div>
         </aside>

         {/* Main Content */}
         <main className="flex-1 p-24 space-y-24">
            <header className="flex justify-between items-end border-b border-[#2d2d2d]/10 pb-12">
               <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">LOGISTICS_VAULT // STUDIO_SYNC_LIVE</p>
                  <h1 className="text-6xl font-light uppercase tracking-tight leading-none">THE_CRAFT_LOGS.</h1>
               </div>
               <button className="px-12 py-5 border-2 border-[#2d2d2d] text-[#2d2d2d] text-[10px] font-bold uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-white transition-all">GENERATE_MANIFEST</button>
            </header>

            <section className="space-y-12">
               <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-40 px-4">
                  <div className="space-x-12">
                     <button className="text-[#2d2d2d] border-b border-[#2d2d2d]">ALL_CRAFT_LOGS</button>
                     <button>IN_TRANSIT</button>
                     <button>ARCHIVE</button>
                  </div>
                  <div className="italic">SCANNING_STUDIO_TRAFFIC...</div>
               </div>

               <table className="w-full text-left border-collapse border border-[#2d2d2d]/10">
                  <thead>
                     <tr className="text-[10px] font-bold uppercase tracking-widest opacity-40 bg-[#fafafa] border-b border-[#2d2d2d]/10">
                        <th className="p-8">ACQUISITION_ID</th>
                        <th className="p-8">CLIENT_ENTITY</th>
                        <th className="p-8">UTILITY_VAL</th>
                        <th className="p-8">LOGISTICS_SYNC</th>
                        <th className="p-8 text-right">PROTOCOL</th>
                     </tr>
                  </thead>
                  <tbody className="text-xl font-light italic">
                     {orders.map((a) => (
                        <tr key={a.id} className="border-b border-[#2d2d2d]/10 hover:bg-[#fafafa] transition-colors">
                           <td className="p-8 uppercase">#{a.id}</td>
                           <td className="p-8 uppercase">{a.customer}</td>
                           <td className="p-8 uppercase">€{a.total}</td>
                           <td className="p-8 uppercase opacity-40 text-sm">{a.status}</td>
                           <td className="p-8 text-right">
                              <button
                                 onClick={() => handleUpdateStatus(a.id)}
                                 className="text-[10px] font-bold uppercase tracking-widest border border-[#2d2d2d] px-6 py-2 hover:bg-[#2d2d2d] hover:text-white transition-all"
                              >
                                 REFINE_LOG
                              </button>
                           </td>
                        </tr>
                     ))}
                     {orders.length === 0 && (
                        <tr>
                           <td colSpan={5} className="p-20 text-center opacity-20 font-bold uppercase tracking-widest">NO_LOG_DATA_DETECTED</td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </section>
         </main>
      </div>
   );
}
