"use client";

import { useInteractivity, Product } from '../../../../hooks/use-interactivity';

export default function FitProductManagement() {
    const { products, addProduct, updateProduct, deleteProduct } = useInteractivity();

    const handleAdd = () => {
        const name = prompt("SPEC_NAME:");
        const price = Number(prompt("PRICE (VAL):"));
        if (name && !isNaN(price)) {
            addProduct({
                name,
                price,
                category: "HARDWARE",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
                description: "New hardware specification.",
                stock: 100
            });
        }
    };

    const handleEdit = (product: Product) => {
        const newName = prompt("RENAME_SPEC:", product.name);
        const newPrice = Number(prompt("VAL_UPDATE:", product.price.toString()));
        if (newName && !isNaN(newPrice)) {
            updateProduct(product.id, { name: newName, price: newPrice });
        }
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
                        <a href="#" className="block bg-[#ff0000] text-white px-8 py-4 shadow-[10px_10px_0px_#fff]">HARDWARE_DATA</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-4 transition-all border-l-8 border-transparent hover:border-[#ff0000] pl-4">VELOCITY_LOGS</a>
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
                <header className="flex justify-between items-center border-[12px] border-black p-16 shadow-[40px_40px_0px_rgba(0,0,0,0.1)] -skew-x-6 transform bg-white">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">HARDWARE_VAULT // ELITE_ACCESS_SYNCED</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">ENGINE_SPEC_LOGS.</h1>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="px-16 py-8 bg-black text-white text-[16px] font-black uppercase tracking-widest hover:scale-110 transition-all transform hover:skew-x-12 shadow-2xl"
                    >
                        ADD_HARDWARE_SPEC
                    </button>
                </header>

                <section className="bg-white border-[12px] border-black p-16 shadow-[40px_40px_0px_rgba(0,0,0,0.05)] space-y-16 -skew-x-1 relative overflow-hidden group">
                    <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest opacity-40">
                        <div className="space-x-12">
                            <button className="bg-black text-white px-8 py-2 -skew-x-12">ALL_HARDWARE</button>
                            <button className="hover:text-black transition-colors">SERIES-X</button>
                            <button className="hover:text-black transition-colors">CORE-SYNC</button>
                            <button className="hover:text-black transition-colors">LEGACY</button>
                        </div>
                        <div className="animate-pulse">OPTIMIZING_SEARCH_OUTPUT...</div>
                    </div>

                    <table className="w-full text-left border-collapse border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-[14px] font-black uppercase tracking-widest text-[#ff0000] border-b-[12px] border-black pb-8">
                                <th className="px-8 pb-8">SPEC_ID</th>
                                <th className="px-8 pb-8">ITEM_DESIGNATION</th>
                                <th className="px-8 pb-8">VELOCITY_VAL</th>
                                <th className="px-8 pb-8">ENGINE_STOCK</th>
                                <th className="px-8 pb-8">SPEC_TIER</th>
                                <th className="px-8 pb-8 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase italic text-black">
                            {products.map((item) => (
                                <tr key={item.id} className="bg-black/5 hover:bg-black hover:text-white transition-all transform hover:scale-[1.01] group cursor-pointer">
                                    <td className="p-10 border-l-[12px] border-[#ff0000]">#{item.id.slice(0, 4)}</td>
                                    <td className="p-10 underline decoration-black/10 group-hover:decoration-white/20">{item.name}</td>
                                    <td className="p-10">${item.price}</td>
                                    <td className="p-10">{item.stock}</td>
                                    <td className="p-10 opacity-40 text-sm tracking-widest">{item.category}</td>
                                    <td className="p-10 text-right space-x-12">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleEdit(item); }}
                                            className="text-xl text-[#000] group-hover:text-white underline"
                                        >
                                            EDIT
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteProduct(item.id); }}
                                            className="text-xl text-red-800/40 group-hover:text-red-500 underline"
                                        >
                                            VOID
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
