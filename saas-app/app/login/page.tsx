"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock authentication with provided credentials
        if (email === "mmlightdesigner@gmail.com" && password === "mmk2000981@@@@") {
            // Set a cookie or local storage to simulate session
            localStorage.setItem("isAuthenticated", "true");
            router.push("/dashboard");
        } else {
            setError("Credenciais inválidas. Tente novamente.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-deep-black">
            {/* Background FX */}
            <div className="absolute inset-0 bg-hero-glow animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 w-full max-w-md px-4">
                <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="font-bebas text-4xl text-white mb-2">
                            ÁREA DO <span className="text-neon-purple">CLIENTE</span>
                        </h1>
                        <p className="text-gray-400 text-sm">Acesse seus projetos e downloads exclusivos.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-600"
                                placeholder="seu@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Senha</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-600"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded border border-red-500/20">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-black font-bold py-4 rounded-lg hover:opacity-90 transition-opacity tracking-widest uppercase shadow-[0_0_20px_rgba(176,38,255,0.3)]"
                        >
                            Entrar no Sistema
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="/" className="text-gray-500 hover:text-white text-sm transition-colors">
                            ← Voltar para o site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
