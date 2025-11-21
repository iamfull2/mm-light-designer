"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LibraryPage() {
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
                    <Link href="/dashboard">
                        <h2 className="font-bebas text-2xl text-white cursor-pointer hover:text-neon-blue transition-colors">
                            MM <span className="text-neon-purple">ADMIN</span>
                        </h2>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <Link href="/dashboard" className="block px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        Dashboard
                    </Link>
                    <Link href="/dashboard/projects" className="block px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        Meus Projetos
                    </Link>
                    <Link href="/dashboard/library" className="block px-4 py-3 rounded-lg bg-neon-purple/10 text-neon-purple border border-neon-purple/20 font-medium">
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
                <header className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="font-bebas text-4xl text-white mb-2">BIBLIOTECA DE EFEITOS</h1>
                        <p className="text-gray-400">Acesse sua coleção completa de FX Presets e materiais.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm border border-white/10 rounded hover:border-neon-blue hover:text-neon-blue transition-colors">
                            Filtrar
                        </button>
                        <button className="px-4 py-2 text-sm border border-white/10 rounded hover:border-neon-purple hover:text-neon-purple transition-colors">
                            Ordenar
                        </button>
                    </div>
                </header>

                {/* Categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {["Todos", "Strobes", "Lasers", "Motion Graphics"].map((cat, i) => (
                        <button
                            key={cat}
                            className={`py-3 px-4 rounded-lg font-bold text-sm transition-all ${i === 0
                                    ? "bg-gradient-to-r from-neon-purple to-neon-blue text-black"
                                    : "border border-white/10 text-gray-400 hover:border-neon-purple hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* FX Presets Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="group relative aspect-video bg-black rounded-xl border border-white/10 overflow-hidden cursor-pointer hover:border-neon-purple/50 transition-all hover:scale-105">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neon-purple/20 to-neon-blue/20">
                                <span className="text-gray-600 font-bebas text-3xl group-hover:text-neon-purple transition-colors">FX {index + 1}</span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-0 left-0 w-full p-4">
                                    <p className="text-xs text-white font-bold mb-1">Neon Strobe Pack</p>
                                    <p className="text-xs text-gray-400">120 MB • 45 Presets</p>
                                    <button className="mt-2 w-full py-2 bg-gradient-to-r from-neon-purple to-neon-blue text-black text-xs font-bold rounded hover:opacity-90 transition-opacity">
                                        BAIXAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 border border-white/10 text-gray-400 rounded-lg hover:border-neon-blue hover:text-neon-blue transition-colors">
                        Carregar Mais
                    </button>
                </div>
            </main>
        </div>
    );
}
