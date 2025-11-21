"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjectsPage() {
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
                    <Link href="/dashboard/projects" className="block px-4 py-3 rounded-lg bg-neon-purple/10 text-neon-purple border border-neon-purple/20 font-medium">
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
                <header className="mb-12">
                    <h1 className="font-bebas text-4xl text-white mb-2">MEUS PROJETOS</h1>
                    <p className="text-gray-400">Gerencie todos os seus projetos de iluminação.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project Cards */}
                    {[
                        { name: "Neon Nights 2024", category: "Show / Festival", status: "Em Andamento", progress: 75 },
                        { name: "Tech Summit Launch", category: "Corporativo", status: "Concluído", progress: 100 },
                        { name: "Luzes da Cidade", category: "Teatro", status: "Em Planejamento", progress: 30 },
                        { name: "Fashion Week SP", category: "Moda", status: "Em Andamento", progress: 60 },
                        { name: "Festival de Verão", category: "Show / Festival", status: "Aguardando Aprovação", progress: 50 },
                        { name: "Casamento Premium", category: "Evento Social", status: "Em Andamento", progress: 85 },
                    ].map((project, index) => (
                        <div key={index} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-neon-purple/50 transition-all cursor-pointer group">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors">{project.name}</h3>
                                    <p className="text-xs text-neon-blue uppercase tracking-wider mt-1">{project.category}</p>
                                </div>
                                <span className={`text-xs px-3 py-1 rounded-full ${project.status === "Concluído" ? "bg-green-500/10 text-green-400 border border-green-400/20" :
                                        project.status === "Em Andamento" ? "bg-neon-blue/10 text-neon-blue border border-neon-blue/20" :
                                            "bg-yellow-500/10 text-yellow-400 border border-yellow-400/20"
                                    }`}>
                                    {project.status}
                                </span>
                            </div>

                            <div className="mb-2">
                                <div className="flex justify-between text-xs text-gray-400 mb-2">
                                    <span>Progresso</span>
                                    <span>{project.progress}%</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-neon-purple to-neon-blue transition-all duration-300"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="mt-4 flex gap-2">
                                <button className="flex-1 text-xs py-2 px-3 border border-white/10 rounded hover:border-neon-blue hover:text-neon-blue transition-colors">
                                    Abrir
                                </button>
                                <button className="flex-1 text-xs py-2 px-3 border border-white/10 rounded hover:border-neon-purple hover:text-neon-purple transition-colors">
                                    Editar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-black font-bold rounded-lg hover:opacity-90 transition-opacity">
                        + NOVO PROJETO
                    </button>
                </div>
            </main>
        </div>
    );
}
