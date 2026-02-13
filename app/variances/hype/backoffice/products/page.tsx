"use client";

import { useInteractivity, Product } from '../../../../hooks/use-interactivity';

export default function HypeProductManagement() {
    const { products, addProduct, updateProduct, deleteProduct } = useInteractivity();

    const handleAdd = () => {
        const name = prompt("DROP_DESIGNATION:");
        const price = Number(prompt("SATURATION_VAL:"));
        if (name && !isNaN(price)) {
            addProduct({
                name,
                price,
                category: "DROP",
                image: "https://images.unsplash.com/photo-1552066344-2464c1135c32",
                description: "New disruptive drop.",
                stock: 50
            });
        }
    };

    const handleEdit = (product: Product) => {
        const newName = prompt("RENAME_DROP:", product.name);
        const newPrice = Number(prompt("SATURATION_UPDATE:", product.price.toString()));
        if (newName && !isNaN(newPrice)) {
            updateProduct(product.id, { name: newName, price: newPrice });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-mono italic flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 bg-black border-r-8 border-white p-12 flex flex-col justify-between">
                <div className="space-y-12">
                    <div className="w-16 h-16 bg-white text-black font-black flex items-center justify-center text-4xl -skew-x-12">H_A</div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase -skew-x-12">GRID_CONTROL.</h2>
                    <nav className="space-y-8 text-xl font-black uppercase tracking-tighter">
                        <a href="/variances/hype/backoffice/dashboard" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">01_METRICS</a>
                        <a href="#" className="block bg-white text-black px-4 py-1 -skew-x-6">02_INVENTORY</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">03_DISPATCH</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">04_OPERATIVES</a>
                        <a href="#" className="block opacity-40 hover:opacity-100 hover:translate-x-2 transition-all">05_LOGS</a>
                    </nav>
                </div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.5em] -rotate-90 origin-left translate-y-24 translate-x-4">
                    DISRUPTIVE_ENGINE_v3.02
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-24 space-y-32 overflow-y-auto h-screen">
                <header className="flex justify-between items-start border-b-8 border-white pb-12">
                    <div className="space-y-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] opacity-40 italic">INVENTORY_GRID // DATA_LOCK_LIVE</p>
                        <h1 className="text-8xl font-black tracking-tighter uppercase leading-none -skew-x-12">THE_DROP_INVENTORY.</h1>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="px-16 py-6 bg-white text-black text-4xl font-black uppercase tracking-tighter -skew-x-12 hover:bg-[#ff0000] hover:text-white transition-all"
                    >
                        INITIATE_DROP
                    </button>
                </header>

                <section className="border-8 border-white p-16 space-y-16">
                    <div className="flex justify-between items-center text-2xl font-black uppercase tracking-tighter">
                        <div className="space-x-12">
                            <button className="bg-white text-black px-6 py-1 -skew-x-6">ALL_LOGS</button>
                            <button className="opacity-40 hover:opacity-100">LIVE_DROPS</button>
                            <button className="opacity-40 hover:opacity-100">VAULTED</button>
                        </div>
                        <div className="opacity-20 italic">SEARCH_GRID...</div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-2xl font-black uppercase tracking-tighter border-b-8 border-white">
                                <th className="pb-8">DROP_ID</th>
                                <th className="pb-8">ITEM_DESIGNATION</th>
                                <th className="pb-8">SATURATION</th>
                                <th className="pb-8">STOCK_LEVEL</th>
                                <th className="pb-8">STATUS</th>
                                <th className="pb-8 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-4xl font-black italic uppercase">
                            {products.map((item) => (
                                <tr key={item.id} className="border-b-4 border-white/10 group hover:bg-white hover:text-black transition-colors">
                                    <td className="py-12">#{item.id.slice(0, 4)}</td>
                                    <td className="py-12 underline decoration-8 decoration-white/20 group-hover:decoration-black/20">{item.name}</td>
                                    <td className="py-12">${item.price}</td>
                                    <td className="py-12">{item.stock}</td>
                                    <td className="py-12 text-sm">{item.category}</td>
                                    <td className="py-12 text-right space-x-12">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleEdit(item); }}
                                            className="text-xl underline"
                                        >
                                            EDIT
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteProduct(item.id); }}
                                            className="text-xl text-red-600 underline"
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
