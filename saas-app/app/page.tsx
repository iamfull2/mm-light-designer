import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="font-bebas text-3xl tracking-wider text-white hover:text-neon-blue transition-colors">
                MM <span className="text-neon-purple">LIGHT</span> DESIGNER
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">HOME</a>
                <a href="#services" className="hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">SERVIÇOS</a>
                <a href="#portfolio" className="hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">PORTFÓLIO</a>
                <a href="#contact" className="bg-neon-purple/20 border border-neon-purple/50 hover:bg-neon-purple/40 px-4 py-2 rounded-full text-sm font-medium transition-all">CONTATO</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background FX */}
        <div className="absolute inset-0 bg-hero-glow animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h2 className="text-neon-blue tracking-[0.5em] text-sm mb-4 font-bold uppercase">Design de Iluminação Profissional</h2>
          <h1 className="font-bebas text-7xl md:text-9xl mb-6 leading-none">
            TRANSFORME <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue neon-text">SUA VISÃO</span> <br />
            EM LUZ
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light">
            Experiências visuais imersivas para eventos, shows e arquitetura.
            Onde a tecnologia encontra a arte.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <a href="#portfolio" className="group relative px-8 py-4 bg-white text-black font-bold tracking-wider overflow-hidden rounded-none hover:bg-neon-blue transition-all duration-300">
              <span className="relative z-10">VER PROJETOS</span>
              <div className="absolute inset-0 bg-neon-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/30 hover:border-neon-purple hover:text-neon-purple transition-all duration-300 tracking-wider">
              ORÇAMENTO
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-deep-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl mb-4">NOSSOS <span className="text-neon-purple">SERVIÇOS</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="glass-panel p-8 rounded-2xl hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Light Design</h3>
              <p className="text-gray-400">Criação de projetos de iluminação personalizados para transformar ambientes e palcos.</p>
            </div>

            {/* Service 2 */}
            <div className="glass-panel p-8 rounded-2xl hover:border-neon-purple/50 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-neon-purple/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Timecode & FX</h3>
              <p className="text-gray-400">Sincronização perfeita de luz e música. Efeitos visuais de alto impacto para shows.</p>
            </div>

            {/* Service 3 */}
            <div className="glass-panel p-8 rounded-2xl hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visualização 3D</h3>
              <p className="text-gray-400">Pré-visualização realista do seu projeto antes da montagem. Economia e precisão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-deep-black via-black to-deep-black opacity-90 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-bebas text-5xl mb-2">PORTFÓLIO <span className="text-neon-blue">RECENTE</span></h2>
              <p className="text-gray-400">Alguns dos nossos melhores trabalhos.</p>
            </div>
            <a href="#" className="hidden md:block text-neon-purple hover:text-white transition-colors">Ver tudo -&gt;</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative h-80 rounded-xl overflow-hidden cursor-pointer border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
              {/* Placeholder for Image */}
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600">
                <span className="font-bebas text-2xl">IMG PROJETO 01</span>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-neon-blue text-xs font-bold tracking-wider uppercase mb-2 block">Show / Festival</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">Neon Nights 2024</h3>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative h-80 rounded-xl overflow-hidden cursor-pointer border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600">
                <span className="font-bebas text-2xl">IMG PROJETO 02</span>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-neon-purple text-xs font-bold tracking-wider uppercase mb-2 block">Corporativo</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">Tech Summit Launch</h3>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative h-80 rounded-xl overflow-hidden cursor-pointer border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600">
                <span className="font-bebas text-2xl">IMG PROJETO 03</span>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-neon-blue text-xs font-bold tracking-wider uppercase mb-2 block">Teatro</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">Luzes da Cidade</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-5xl mb-8">VAMOS CRIAR ALGO <span className="text-neon-purple">INCRÍVEL?</span></h2>
          <p className="text-xl text-gray-400 mb-12">Entre em contato para discutir seu próximo projeto de iluminação.</p>

          <form className="max-w-lg mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nome" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors" />
            </div>
            <input type="text" placeholder="Assunto" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors" />
            <textarea rows={4} placeholder="Mensagem" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"></textarea>

            <button type="submit" className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-black font-bold py-4 rounded-lg hover:opacity-90 transition-opacity tracking-widest uppercase">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bebas text-2xl text-white">MM <span className="text-neon-purple">LIGHT</span> DESIGNER</span>
            <p className="text-gray-500 text-sm mt-2">© 2025 Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/mmlight_designer/" target="_blank" className="text-gray-400 hover:text-neon-purple transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-3.77 1.795c-.95.043-1.46.25-1.813.388-.466.18-.8.395-1.15.745-.35.35-.566.683-.746 1.15-.137.351-.344.862-.387 1.814-.043.95-.05 1.236-.05 3.735v.63c0 2.499.007 2.785.05 3.735.043.951.25 1.462.387 1.814.18.466.395.8.746 1.15.35.35.683.566 1.15.746.351.137.862.344 1.814.387.95.043 1.236.05 3.735.05h.63c2.499 0 2.785-.007 3.735-.05.951-.043 1.462-.25 1.814-.387.18-.466.395-.8.746-1.15.35-.35.566-.683.746-1.15.137-.351.344-.862.387-1.814.043-.95.05-1.236.05-3.735v-.63c0-2.499-.007-2.785-.05-3.735-.043-.951-.25-1.462-.387-1.814-.18-.466-.395-.8-.746-1.15-.35-.35-.683-.566-1.15-.746-.137-.351-.862-.344-1.814-.387-.95-.043-1.236-.05-3.735-.05h-.63c-2.499 0-2.785.007-3.735.05z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
