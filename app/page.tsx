export default function Home() {
  const ctaUrl = "https://intranet.sisuvp.com/libero/chat";
  const logoUrl = "https://fengbrasil.com.br/assets/images/logo_feng_.png";

  return (
    <main className="min-h-screen font-sans bg-white text-[#1a1a1a]">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <img src={logoUrl} alt="Logo Feng" className="h-10 w-auto" />
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0055ff] hover:bg-[#0044cc] text-white px-6 py-2 rounded-full font-semibold transition-all"
          >
            Comece agora
          </a>
        </div>
      </header>

      {/* 1º SCROLL: HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center bg-gradient-to-br from-[#f8faff] via-white to-[#f0f4ff]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0f172a] mb-6">
            Crie agora sua nova landing page usando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ff] to-[#8b5cf6]">Feng IA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            É fácil e fica pronto em instantes
          </p>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0055ff] text-white text-lg md:text-xl px-12 py-5 rounded-xl font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-transform active:scale-95"
          >
            Comece agora
          </a>
        </div>
      </section>

      {/* 2º SCROLL: BENEFÍCIOS */}
      <section className="min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-[#0f172a] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Como criar sua landing page por chat</h2>
          
          <div className="space-y-8 mb-16">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl">💬</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Converse com a nossa IA</h3>
                <p className="text-gray-400">Basta descrever o seu objetivo e as informações principais através de uma conversa simples e intuitiva.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Geração Instantânea</h3>
                <p className="text-gray-400">A Feng IA processa seus dados e estrutura o design, os textos e os links em questão de segundos.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Pronto para Publicar</h3>
                <p className="text-gray-400">Sua landing page é gerada com as melhores práticas de conversão, pronta para receber seus clientes.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#0055ff] to-[#8b5cf6] text-white text-lg px-12 py-5 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Comece agora
            </a>
          </div>
        </div>
      </section>

      {/* 3º SCROLL: EXEMPLOS */}
      <section className="min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#0f172a]">Landing pages criadas</h2>
          <p className="text-gray-600 text-center mb-12">Confira alguns projetos de sucesso desenvolvidos com a nossa tecnologia:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Link 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-4">Seja sócio do Barcelona para ir à Noche Amarilla</h3>
              <a 
                href="https://nocheamarilla.sociosbsc.com.ec/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0055ff] font-medium flex items-center gap-2 hover:underline"
              >
                Ver projeto <span>→</span>
              </a>
            </div>

            {/* Link 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-4">Inclua convidados no Sócio Futebol do Fluminense</h3>
              <a 
                href="https://divulga-o-feng-ia-cria-o-de-landing.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0055ff] font-medium flex items-center gap-2 hover:underline"
              >
                Ver projeto <span>→</span>
              </a>
            </div>

            {/* Link 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-4">Participe da pesquisa da Universidad de Chile</h3>
              <a 
                href="https://encuesta-oficial-universidad-de-chi.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0055ff] font-medium flex items-center gap-2 hover:underline"
              >
                Ver projeto <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <img src={logoUrl} alt="Logo Feng" className="h-12 w-auto" />
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Feng IA - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}