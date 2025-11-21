"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("isAuthenticated");
        if (!auth) {
            router.push("/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    if (!isAuthenticated) return null;

    return (
        <div className="min-h-screen bg-deep-black flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 glass-panel hidden md:flex flex-col">
                <div className="p-8">
                    <h2 className="font-bebas text-2xl text-white">
                        MM <span className="text-neon-purple">ADMIN</span>
                    </h2>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <Link href="/dashboard" className="block px-4 py-3 rounded-lg bg-neon-purple/10 text-neon-purple border border-neon-purple/20 font-medium">
                        Dashboard
                    </Link>
                    <Link href="/dashboard/projects" className="block px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        Meus Projetos
                    </Link>
                    <Link href="/dashboard/library" className="block px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        Biblioteca de Efeitos
                    </Link>
                    <Link href="/dashboard/settings" className="block px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        Configurações
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={() => {
                            localStorage.removeItem("isAuthenticated");
                            router.push("/login");
                        }}
                        className="w-full text-left px-4 py-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
                    >
                        Sair do Sistema
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="font-bebas text-4xl text-white">BEM-VINDO DE VOLTA</h1>
                        <p className="text-gray-400">Gerencie seus projetos e assets de iluminação.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center font-bold text-black">
                            MM
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="glass-panel p-6 rounded-xl border border-white/10">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Projetos Ativos</h3>
                        <p className="text-4xl font-bebas text-white">12</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl border border-white/10">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Downloads Totais</h3>
                        <p className="text-4xl font-bebas text-neon-blue">1,240</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl border border-white/10">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Armazenamento</h3>
                        <p className="text-4xl font-bebas text-neon-purple">45%</p>
                    </div>
                </div>

                {/* Recent Activity / Assets Preview */}
                <div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <h3 className="font-bold text-white">Biblioteca de Efeitos (FX Presets)</h3>
                        <Link href="/dashboard/library">
                            <button className="text-xs text-neon-blue hover:text-white transition-colors">VER TODOS</button>
                        </Link>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Mock Items based on the FX_Presets folder */}
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="group relative aspect-video bg-black rounded-lg border border-white/10 overflow-hidden cursor-pointer hover:border-neon-purple/50 transition-all">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-gray-600 font-bebas text-xl group-hover:text-neon-purple transition-colors">FX PRESET {item}</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent">
                                        <p className="text-xs text-white font-bold">Neon Strobe Pack</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
