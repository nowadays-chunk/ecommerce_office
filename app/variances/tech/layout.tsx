import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Core Tech - Next-Gen Hardware & Components",
    description: "Architecting the future of human-machine interaction. Shop the latest hardware, components, and tech modules.",
    keywords: ["technology", "hardware", "components", "tech store", "future tech"],
};

export default function TechLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#080b10] text-[#a0aec0] font-mono selection:bg-[#00f2ff] selection:text-black">
            {/* HUD Navigation */}
            <nav className="border-b border-[#00f2ff]/20 bg-[#080b10]/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded-sm border-2 border-[#00f2ff] flex items-center justify-center group-hover:bg-[#00f2ff]/10 transition-colors">
                            <div className="w-4 h-1 bg-[#00f2ff] animate-pulse"></div>
                        </div>
                        <span className="text-xl font-bold text-white tracking-widest uppercase">CORE_TECH</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-12 text-[10px] uppercase tracking-[0.2em] font-bold">
                        {/* Store Dropdown */}
                        <div className="relative group py-8 h-16 flex items-center">
                            <button className="text-[#00f2ff] hover:text-white transition-colors flex items-center">
                                <span className="mr-2">01//</span> TERMINAL
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="ml-2 group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[64px] left-0 w-64 bg-[#080b10] border border-[#00f2ff]/30 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-xl shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                                <ul className="space-y-3 font-mono">
                                    <li><a href="/variances/tech/frontoffice" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">SYSTEM_ROOT</a></li>
                                    <li><a href="/variances/tech/frontoffice/shop" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">DATA_VAULT</a></li>
                                    <li><a href="/variances/tech/frontoffice/product" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">MOD_INTEL</a></li>
                                    <li><a href="/variances/tech/frontoffice/blog" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">CORE_DUMP</a></li>
                                    <li><a href="/variances/tech/frontoffice/about" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">ARCHITECT_LOG</a></li>
                                    <li><a href="/variances/tech/frontoffice/contact" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">COMMS_LINK</a></li>
                                    <li><a href="/variances/tech/frontoffice/account" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">USER_AUTH</a></li>
                                    <li><a href="/variances/tech/frontoffice/search" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">SCAN_DRIVE</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Admin Dropdown */}
                        <div className="relative group py-8 h-16 flex items-center">
                            <button className="text-white/40 hover:text-[#00f2ff] transition-colors flex items-center">
                                <span className="mr-2">02//</span> NEXUS_ADMIN
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="ml-2 group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute top-[64px] left-0 w-64 bg-[#080b10] border border-[#00f2ff]/30 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-xl shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                                <ul className="space-y-3 font-mono">
                                    <li><a href="/variances/tech/backoffice/dashboard" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">HUD_DASH</a></li>
                                    <li><a href="/variances/tech/backoffice/analytics" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">METRIC_STREAM</a></li>
                                    <li><a href="/variances/tech/backoffice/products" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">INVENTORY_NODE</a></li>
                                    <li><a href="/variances/tech/backoffice/orders" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">LOG_HISTORY</a></li>
                                    <li><a href="/variances/tech/backoffice/marketing" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">SIGNAL_GEAR</a></li>
                                    <li><a href="/variances/tech/backoffice/settings" className="block text-[#00f2ff]/60 hover:text-[#00f2ff] border-l border-transparent hover:border-[#00f2ff] pl-3">KERNEL_CFG</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#" className="hover:text-[#00f2ff] transition-colors flex items-center">
                            <span className="mr-2 text-white/20">03//</span> PROTOCOLS
                        </a>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="hidden md:flex flex-col text-[8px] text-right font-bold tracking-tighter opacity-40">
                            <span>LATENCY: 12ms</span>
                            <span>BUFFER: OPTIMAL</span>
                        </div>
                        <button className="p-2 border border-[#00f2ff]/30 text-[#00f2ff] hover:bg-[#00f2ff]/10 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Grid Pattern Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#00f2ff_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <main className="relative z-10">{children}</main>

            <footer className="border-t border-[#00f2ff]/10 bg-[#05080c] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-[10px] uppercase font-bold tracking-widest relative z-10">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="text-white text-lg">SYSTEM.LOG_INIT</div>
                        <p className="text-[#a0aec0]/40 leading-relaxed font-normal normal-case">Architecting the future of human-machine interaction. All systems operational. Build v2.4.9-Stable.</p>
                    </div>
                    <div>
                        <h4 className="text-[#00f2ff] mb-6">INTERFACE_NODE</h4>
                        <ul className="space-y-2">
                            <li><a href="/variances/tech/frontoffice" className="hover:text-white transition-colors">OS_ROOT</a></li>
                            <li><a href="/variances/tech/frontoffice/shop" className="hover:text-white transition-colors">DATA_STORE</a></li>
                            <li><a href="/variances/tech/frontoffice/product" className="hover:text-white transition-colors">COMPONENT_INTEL</a></li>
                            <li><a href="/variances/tech/frontoffice/blog" className="hover:text-white transition-colors">CORE_DUMP</a></li>
                            <li><a href="/variances/tech/frontoffice/about" className="hover:text-white transition-colors">ARCHITECT_FILE</a></li>
                            <li><a href="/variances/tech/frontoffice/contact" className="hover:text-white transition-colors">COMMS_LINK</a></li>
                            <li><a href="/variances/tech/frontoffice/account" className="hover:text-white transition-colors">USER_AUTH</a></li>
                            <li><a href="/variances/tech/frontoffice/checkout" className="hover:text-white transition-colors">TRANSACTION_END</a></li>
                            <li><a href="/variances/tech/frontoffice/policy" className="hover:text-white transition-colors">PROTCOL_LAWS</a></li>
                            <li><a href="/variances/tech/frontoffice/search" className="hover:text-white transition-colors">SCAN_DRIVE</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#00f2ff] mb-6">NEXUS_CORE</h4>
                        <ul className="space-y-2">
                            <li><a href="/variances/tech/backoffice/dashboard" className="hover:text-white transition-colors">DASHBOARD</a></li>
                            <li><a href="/variances/tech/backoffice/analytics" className="hover:text-white transition-colors">DATA_STREAM</a></li>
                            <li><a href="/variances/tech/backoffice/products" className="hover:text-white transition-colors">INVENTORY_NODE</a></li>
                            <li><a href="/variances/tech/backoffice/orders" className="hover:text-white transition-colors">LOG_HISTORY</a></li>
                            <li><a href="/variances/tech/backoffice/marketing" className="hover:text-white transition-colors">SIGNAL_GEAR</a></li>
                            <li><a href="/variances/tech/backoffice/localization" className="hover:text-white transition-colors">REGION_SYNC</a></li>
                            <li><a href="/variances/tech/backoffice/settings" className="hover:text-white transition-colors">KERNEL_CONFIG</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
