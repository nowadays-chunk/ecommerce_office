"use client";

import { useInteractivity, Product } from '../../../../hooks/use-interactivity';

export default function NordicProductManagement() {
    const { products, addProduct, updateProduct, deleteProduct } = useInteractivity();

    const handleAdd = () => {
        const name = prompt("PIECE_DESIGNATION:");
        const price = Number(prompt("UTILITY_VAL:"));
        if (name && !isNaN(price)) {
            addProduct({
                name,
                price,
                category: "STUDIO_PIECE",
                image: "https://images.unsplash.com/photo-1567538096630-e0c55bd63b48",
                description: "New studio-crafted piece.",
                stock: 20
            });
        }
    };

    const handleEdit = (product: Product) => {
        const newName = prompt("REFINE_NAME:", product.name);
        const newPrice = Number(prompt("UTILITY_VAL_UPDATE:", product.price.toString()));
        if (newName && !isNaN(newPrice)) {
            updateProduct(product.id, { name: newName, price: newPrice });
        }
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
                        <a href="#" className="block text-[#2d2d2d]">MATERIAL_STOCK</a>
                        <a href="#" className="block hover:text-[#2d2d2d] transition-colors">CRAFT_LOGS</a>
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
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">MATERIAL_VAULT // STUDIO_SYNC</p>
                        <h1 className="text-6xl font-light uppercase tracking-tight leading-none">THE_STUDIO_INVENTORY.</h1>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="px-12 py-5 border-2 border-[#2d2d2d] text-[#2d2d2d] text-[10px] font-bold uppercase tracking-widest hover:bg-[#2d2d2d] hover:text-white transition-all"
                    >
                        ADD_STUDIO_PIECE
                    </button>
                </header>

                <section className="space-y-12">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-40 px-4">
                        <div className="space-x-12">
                            <button className="text-[#2d2d2d] border-b border-[#2d2d2d]">ALL_INVENTORY</button>
                            <button>FURNITURE</button>
                            <button>STUDIO_GOODS</button>
                            <button>MATERIALS</button>
                        </div>
                        <div className="italic">FILTERING_BY_UTILITY...</div>
                    </div>

                    <table className="w-full text-left border-collapse border border-[#2d2d2d]/10">
                        <thead>
                            <tr className="text-[10px] font-bold uppercase tracking-widest opacity-40 bg-[#fafafa] border-b border-[#2d2d2d]/10">
                                <th className="p-8">STUDIO_ID</th>
                                <th className="p-8">CURATION_NAME</th>
                                <th className="p-8">UTILITY_VALUE</th>
                                <th className="p-8">STOCK_SYNC</th>
                                <th className="p-8">MATERIAL_ORIGIN</th>
                                <th className="p-8 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl font-light italic">
                            {products.map((piece) => (
                                <tr key={piece.id} className="border-b border-[#2d2d2d]/10 hover:bg-[#fafafa] transition-colors">
                                    <td className="p-8 uppercase">#{piece.id.slice(0, 4)}</td>
                                    <td className="p-8 uppercase">{piece.name}</td>
                                    <td className="p-8 uppercase">€{piece.price}</td>
                                    <td className="p-8 uppercase">{piece.stock}</td>
                                    <td className="p-8 uppercase opacity-40">{piece.category}</td>
                                    <td className="p-8 text-right space-x-8">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleEdit(piece); }}
                                            className="text-[10px] font-bold uppercase tracking-widest hover:underline"
                                        >
                                            REFINE
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteProduct(piece.id); }}
                                            className="text-[10px] font-bold uppercase tracking-widest text-red-800/40 hover:text-red-800 transition-colors"
                                        >
                                            ARCHIVE
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
