"use client";

import { useInteractivity } from '../../../../hooks/use-interactivity';

export default function ApexOrderManagement() {
    const { orders, updateOrderStatus } = useInteractivity();

    const handleUpdateStatus = (id: string) => {
        const status = prompt("NEW_STATUS (pending, shipped, delivered, cancelled):") as any;
        if (status) updateOrderStatus(id, status);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#ff3e3e] font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black border-r-4 border-[#ff3e3e]/20 p-12 flex flex-col justify-between shadow-[0_0_50px_rgba(255,62,62,0.1)] relative z-20">
                <div className="space-y-12">
                    <div className="w-24 h-4 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] skew-x-[-12deg] shadow-[0_0_30px_#ff3e3e]"></div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">A_ADMIN.</h2>
                    <nav className="space-y-8 text-[12px] font-black uppercase tracking-widest">
                        <a href="/variances/apex/backoffice/dashboard" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">MISSION_SYNC</a>
                        <a href="/variances/apex/backoffice/products" className="block opacity-40 hover:text-white transition-all transform hover:skew-x-12">HARDWARE_VAULT</a>
                        <a href="#" className="block text-white border-b-4 border-[#ff3e3e] pb-2">DEPLOY_LOGS</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all transform hover:skew-x-12">SQUAD_NETWORK</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all transform hover:skew-x-12">SYNC_METRICS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.5em] italic text-center text-[#ff3e3e]">
                    NEURAL_ENGINE_v8.01.XP
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 h-screen overflow-y-auto relative bg-[#0a0a0f]">
                <header className="flex justify-between items-center border-4 border-[#ff3e3e]/20 p-16 shadow-[0_0_100px_rgba(255,62,62,0.1)] -skew-x-6 transform bg-black">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/60 italic">DEPLOY_OVERSIGHT // MISSION_FLOW_LIVE</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] italic text-white">THE_DEPLOY_LOGS.</h1>
                    </div>
                    <button className="px-16 py-8 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all transform hover:skew-x-12 shadow-[0_0_50px_rgba(255,62,62,0.4)]">MISSION_MANIFEST</button>
                </header>

                <section className="bg-black p-20 -skew-x-6 shadow-[0_0_150px_rgba(255,62,62,0.15)] space-y-24 border-4 border-[#ff3e3e]/10 relative overflow-hidden group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff3e3e]/40">
                        <div className="space-x-12">
                            <button className="text-white border-b-4 border-[#ff3e3e] pb-1">ALL_MISSIONS</button>
                            <button className="hover:text-white transition-all">IN_DEPLOYMENT</button>
                            <button className="hover:text-white transition-all">ARCHIVED</button>
                        </div>
                        <div className="animate-pulse">TRACKING_TACTICAL_TRANSIT...</div>
                    </div>

                    <table className="w-full text-left border-collapse border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff3e3e]">
                                <th className="px-8 pb-8">DEPLOY_ID</th>
                                <th className="px-8 pb-8">OPERATIVE_UNIT</th>
                                <th className="px-8 pb-8">MISSION_VAL</th>
                                <th className="px-8 pb-8">SYNC_STATUS</th>
                                <th className="px-8 pb-8 text-right">PROTOCOL</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase text-white/80">
                            {orders.map((m) => (
                                <tr key={m.id} className="bg-white/5 hover:bg-[#ff3e3e]/20 transition-all hover:scale-[1.02] group cursor-pointer">
                                    <td className="p-10 border-l-[12px] border-[#ff3e3e]">#{m.id}</td>
                                    <td className="p-10">{m.customer}</td>
                                    <td className="p-10">${m.total}</td>
                                    <td className="p-10 text-[#ff3e3e] uppercase">{m.status}</td>
                                    <td className="p-10 text-right">
                                        <button
                                            onClick={() => handleUpdateStatus(m.id)}
                                            className="text-xl bg-white text-black px-8 py-2 -skew-x-12 hover:bg-[#ff3e3e] hover:text-white transition-all"
                                        >
                                            SYNC_STATUS
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {orders.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="py-20 text-center opacity-20 font-black uppercase tracking-widest">MISSION_TRAFFIC_CLEARED</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
