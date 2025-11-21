"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SettingsPage() {
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
                    <Link href="/dashboard/library" className="block px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        Biblioteca de Efeitos
                    </Link>
                    <Link href="/dashboard/settings" className="block px-4 py-3 rounded-lg bg-neon-purple/10 text-neon-purple border border-neon-purple/20 font-medium">
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
                    <h1 className="font-bebas text-4xl text-white mb-2">CONFIGURAÇÕES</h1>
                    <p className="text-gray-400">Personalize sua conta e preferências do sistema.</p>
                </header>

                <div className="max-w-3xl space-y-8">
                    {/* Profile Section */}
                    <div className="glass-panel p-8 rounded-xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">Perfil do Usuário</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nome Completo</label>
                                <input
                                    type="text"
                                    defaultValue="MM Light Designer"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    defaultValue="mmlightdesigner@gmail.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Telefone</label>
                                <input
                                    type="tel"
                                    placeholder="+55 (11) 99999-9999"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Security Section */}
                    <div className="glass-panel p-8 rounded-xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">Segurança</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Senha Atual</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nova Senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Confirmar Nova Senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="glass-panel p-8 rounded-xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">Notificações</h2>
                        <div className="space-y-4">
                            {[
                                { label: "Email de novos projetos", enabled: true },
                                { label: "Atualizações de presets", enabled: true },
                                { label: "Newsletter mensal", enabled: false },
                                { label: "Promoções e ofertas", enabled: false },
                            ].map((notif, index) => (
                                <div key={index} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                                    <span className="text-gray-300">{notif.label}</span>
                                    <button className={`relative w-12 h-6 rounded-full transition-colors ${notif.enabled ? "bg-neon-purple" : "bg-white/10"}`}>
                                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${notif.enabled ? "right-1" : "left-1"}`}></div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex gap-4">
                        <button className="flex-1 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-black font-bold rounded-lg hover:opacity-90 transition-opacity">
                            SALVAR ALTERAÇÕES
                        </button>
                        <button className="px-8 py-4 border border-white/10 text-gray-400 rounded-lg hover:border-red-500 hover:text-red-400 transition-colors">
                            Cancelar
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
