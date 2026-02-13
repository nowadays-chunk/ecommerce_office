"use client";

import { useInteractivity } from '../../../../hooks/use-interactivity';

export default function FitOrderManagement() {
    const { orders, updateOrderStatus } = useInteractivity();

    const handleUpdateStatus = (id: string) => {
        const status = prompt("NEW_STATUS (pending, shipped, delivered, cancelled):") as any;
        if (status) updateOrderStatus(id, status);
    };

    return (
        <div className="min-h-screen bg-white text-black font-sans italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black text-white border-r-[12px] border-black p-12 flex flex-col justify-between -skew-x-2 transform origin-top h-full">
                <div className="space-y-24">
                    <div className="w-24 h-4 bg-[#ff0000] skew-x-[-12deg] shadow-[0_0_30px_#ff0000]"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">F_ADMIN.</h2>
                    <nav className="space-y-12 text-[14px] font-black uppercase tracking-widest -skew-x-12">
                        <a href="/variances/fit/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">ENGINE_SYNC</a>
                        <a href="/variances/fit/backoffice/products" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">HARDWARE_DATA</a>
                        <a href="#" className="block bg-[#ff0000] text-white px-8 py-4 shadow-[10px_10px_0px_#fff]">VELOCITY_LOGS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">ELITE_SYNDICATE</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">SPEC_ARCHIVE</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.8em] italic border-t-8 border-white/10 pt-8">
                    ELITE_ENGINE_v8.01.XP
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto bg-white">
                <header className="flex justify-between items-center border-[12px] border-black p-16 shadow-[20px_20px_0px_rgba(255,0,0,0.1)] -skew-x-6 transform bg-white">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">DISPATCH_VAULT // ELITE_ACCESS_SYNCED</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">THE_VELOCITY_LOGS.</h1>
                    </div>
                    <button className="px-16 py-8 bg-black text-white text-[16px] font-black uppercase tracking-widest hover:scale-110 transition-all transform hover:skew-x-12 shadow-2xl">INITIATE_DEPLOYMENT</button>
                </header>

                <section className="bg-white border-[12px] border-black p-16 shadow-[20px_20px_0px_rgba(0,0,0,0.05)] space-y-16 -skew-x-1 relative overflow-hidden group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest opacity-40">
                        <div className="space-x-12">
                            <button className="bg-black text-white px-8 py-2 -skew-x-12">ALL_DISPATCH_FEED</button>
                            <button className="hover:text-black transition-colors">ACTIVE_SYNC</button>
                            <button className="hover:text-black transition-colors">LEGACY</button>
                        </div>
                        <div className="animate-pulse">OPTIMIZING_GRID_OUTPUT...</div>
                    </div>

                    <table className="w-full text-left border-collapse border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff0000]">
                                <th className="px-8 pb-8">SYNC_ID</th>
                                <th className="px-8 pb-8">SYNDICATE_ENTITY</th>
                                <th className="px-8 pb-8">VELOCITY_TOTAL</th>
                                <th className="px-8 pb-8">SYNC_STATUS</th>
                                <th className="px-8 pb-8 text-right">MANIFEST</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase italic text-black">
                            {orders.map((d) => (
                                <tr key={d.id} className="bg-black/5 hover:bg-black hover:text-white transition-all transform hover:scale-[1.01] group cursor-pointer">
                                    <td className="p-10 border-l-[12px] border-[#ff0000]">#{d.id}</td>
                                    <td className="p-10 underline decoration-black/10 group-hover:decoration-white/20">{d.customer}</td>
                                    <td className="p-10">${d.total}</td>
                                    <td className="p-10 text-sm tracking-widest text-[#ff0000] group-hover:text-white uppercase">{d.status}</td>
                                    <td className="p-10 text-right">
                                        <button
                                            onClick={() => handleUpdateStatus(d.id)}
                                            className="text-xl bg-black text-white group-hover:bg-white group-hover:text-black px-8 py-2 -skew-x-12"
                                        >
                                            UPDATE_SYNC
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {orders.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-20 text-center opacity-20">NO_DEPLOYMENT_DATA_DETECTED</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
