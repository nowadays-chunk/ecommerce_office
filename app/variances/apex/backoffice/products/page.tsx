"use client";

import { useInteractivity, Product } from '../../../../hooks/use-interactivity';

export default function ApexProductManagement() {
    const { products, addProduct, updateProduct, deleteProduct } = useInteractivity();

    const handleAdd = () => {
        const name = prompt("TECH_DESIGNATION:");
        const price = Number(prompt("AMPLITUDE_VAL:"));
        if (name && !isNaN(price)) {
            addProduct({
                name,
                price,
                category: "TECH",
                image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
                description: "New elite gear.",
                stock: 50
            });
        }
    };

    const handleEdit = (product: Product) => {
        const newName = prompt("UPGRADE_NAME:", product.name);
        const newPrice = Number(prompt("AMPLITUDE_VAL_UPDATE:", product.price.toString()));
        if (newName && !isNaN(newPrice)) {
            updateProduct(product.id, { name: newName, price: newPrice });
        }
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
                        <a href="#" className="block text-white border-b-4 border-[#ff3e3e] pb-2">HARDWARE_VAULT</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:text-white transition-all transform hover:skew-x-12">DEPLOY_LOGS</a>
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
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ff3e3e]/60 italic">HARDWARE_INVENTORY // ELITE_ACCESS_SYNCED</p>
                        <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] italic text-white">THE_HARDWARE_GRID.</h1>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="px-16 py-8 bg-gradient-to-r from-[#ff3e3e] to-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all transform hover:skew-x-12 shadow-[0_0_50px_rgba(255,62,62,0.4)]"
                    >
                        UPLOAD_NEW_TECH
                    </button>
                </header>

                <section className="bg-black p-20 -skew-x-6 shadow-[0_0_150px_rgba(255,62,62,0.15)] space-y-24 border-4 border-[#ff3e3e]/10 relative overflow-hidden group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-[#ff3e3e]/40">
                        <div className="space-x-12">
                            <button className="text-white border-b-4 border-[#ff3e3e] pb-1">ALL_TECH_LOGS</button>
                            <button className="hover:text-white transition-all">SQUAD_EQUIP</button>
                            <button className="hover:text-white transition-all">NEURAL_MODS</button>
                            <button className="hover:text-white transition-all">WEAPON_SPECS</button>
                        </div>
                        <div className="animate-pulse">DECRYPTING_HARDWARE_SEARCH...</div>
                    </div>

                    <table className="w-full text-left border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff3e3e]">
                                <th className="px-8 pb-8">SPEC_ID</th>
                                <th className="px-8 pb-8">TECH_DESIGNATION</th>
                                <th className="px-8 pb-8">AMPLITUDE_VAL</th>
                                <th className="px-8 pb-8">SYNC_STOCK</th>
                                <th className="px-8 pb-8">SPEC_TIER</th>
                                <th className="px-8 pb-8 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase text-white/80">
                            {products.map((item) => (
                                <tr key={item.id} className="bg-white/5 hover:bg-[#ff3e3e]/20 transition-all hover:scale-[1.02] group cursor-pointer">
                                    <td className="p-10 border-l-[12px] border-[#ff3e3e]">#{item.id.slice(0, 4)}</td>
                                    <td className="p-10 underline decoration-[#ff3e3e]/20 group-hover:decoration-white/20">{item.name}</td>
                                    <td className="p-10">${item.price}</td>
                                    <td className="p-10">{item.stock}</td>
                                    <td className="p-10 opacity-40 text-sm tracking-widest">{item.category}</td>
                                    <td className="p-10 text-right space-x-12">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleEdit(item); }}
                                            className="text-xl text-white group-hover:text-black underline"
                                        >
                                            UPGRADE
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteProduct(item.id); }}
                                            className="text-xl text-red-900 group-hover:text-red-500 underline"
                                        >
                                            TERMINATE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
