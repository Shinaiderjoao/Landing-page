import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, FileText, ExternalLink, Code, Briefcase, User, Folder, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {/* Header/Hero Section */}
      <header className="relative h-[70vh] bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="mb-6 inline-block rounded-full p-1 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse-slow">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQGcYLozLswnxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715000193435?e=1746662400&v=beta&t=aOVxYfrEmyUE9q_rggysYA-SuXoSypPobU841tdsF7s" 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover border-4 border-slate-900"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">João Victor Damasceno Schinaider</h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras e experiências de usuário excepcionais
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in animate-delay-400">
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Entre em Contato
            </a>
            <a href="#portfolio" className="px-6 py-3 bg-transparent border border-purple-400 text-purple-200 font-medium rounded-lg hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-105">
              Ver Portfólio
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-white">João Victor Damasceno Schinaider</a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-slate-300 hover:text-purple-400 transition-colors flex items-center">
                <User size={16} className="mr-1" /> Sobre
              </a>
              <a href="#portfolio" className="text-slate-300 hover:text-purple-400 transition-colors flex items-center">
                <Folder size={16} className="mr-1" /> Portfólio
              </a>
              <a href="#experience" className="text-slate-300 hover:text-purple-400 transition-colors flex items-center">
                <Briefcase size={16} className="mr-1" /> Experiência
              </a>
              <a href="#contact" className="text-slate-300 hover:text-purple-400 transition-colors flex items-center">
                <Mail size={16} className="mr-1" /> Contato
              </a>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-slate-800 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-slate-300 hover:text-purple-400 transition-colors flex items-center" onClick={closeMobileMenu}>
                  <User size={16} className="mr-2" /> Sobre
                </a>
                <a href="#portfolio" className="text-slate-300 hover:text-purple-400 transition-colors flex items-center" onClick={closeMobileMenu}>
                  <Folder size={16} className="mr-2" /> Portfólio
                </a>
                <a href="#experience" className="text-slate-300 hover:text-purple-400 transition-colors flex items-center" onClick={closeMobileMenu}>
                  <Briefcase size={16} className="mr-2" /> Experiência
                </a>
                <a href="#contact" className="text-slate-300 hover:text-purple-400 transition-colors flex items-center" onClick={closeMobileMenu}>
                  <Mail size={16} className="mr-2" /> Contato
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* About Section - Redesigned */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Sobre Mim</span>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2"></div>
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Profile Image & Info */}
            <div className="lg:w-1/3 animate-on-scroll">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl blur-lg opacity-30 animate-pulse-slow"></div>
                <div className="relative bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse-slow absolute inset-0 blur-md"></div>
                      <img 
                        src="https://media.licdn.com/dms/image/v2/D4D03AQGcYLozLswnxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715000193435?e=1746662400&v=beta&t=aOVxYfrEmyUE9q_rggysYA-SuXoSypPobU841tdsF7s" 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-slate-800 relative z-10"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white text-center mb-4">João Victor Damasceno Schinaider</h3>
                  <p className="text-purple-300 text-center mb-6">Desenvolvedor Full Stack</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                      <MapPin size={18} className="mr-3 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300">Minas Gerais, Brasil</span>
                    </div>
                    <div className="flex items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                      <Mail size={18} className="mr-3 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300 break-all">shinaidervictor15@gmail.com</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-purple-900 transition-colors border border-slate-600 hover:border-purple-500 transform hover:scale-110 transition-all duration-300">
                      <Github className="w-5 h-5 text-slate-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/joao-schinaider/" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-purple-900 transition-colors border border-slate-600 hover:border-purple-500 transform hover:scale-110 transition-all duration-300">
                      <Linkedin className="w-5 h-5 text-slate-300" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-purple-900 transition-colors border border-slate-600 hover:border-purple-500 transform hover:scale-110 transition-all duration-300">
                      <FileText className="w-5 h-5 text-slate-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Bio & Skills */}
            <div className="lg:w-2/3 animate-on-scroll">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 shadow-lg hover:shadow-purple-500/10 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <User className="mr-3 text-purple-400" size={24} />
                  Minha História
                </h3>
                
                <div className="space-y-4 text-slate-300 mb-8">
                  <p className="leading-relaxed">
                    Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web full stack, 
                    tenho trabalhado em diversos projetos que combinam funcionalidade e design atraente.
                  </p>
                  <p className="leading-relaxed">
                    Minha jornada na programação começou há alguns anos e desde então venho aprimorando minhas habilidades 
                    em React, TypeScript, Node.js e outras tecnologias modernas.
                  </p>
                  <p className="leading-relaxed">
                    Quando não estou codificando, gosto de explorar novas tecnologias, contribuir para projetos open source 
                    e compartilhar conhecimento com a comunidade de desenvolvedores.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Code className="mr-3 text-purple-400" size={24} />
                  Habilidades
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 transform hover:scale-102 hover:bg-slate-700 group">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3 group-hover:bg-purple-900 transition-colors">
                        <Code className="text-purple-400" size={20} />
                      </div>
                      <h4 className="font-bold text-lg text-white">Front-end</h4>
                    </div>
                    <p className="text-slate-400">React, TypeScript, Tailwind CSS, Next.js</p>
                  </div>
                  
                  <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 transform hover:scale-102 hover:bg-slate-700 group">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3 group-hover:bg-purple-900 transition-colors">
                        <Code className="text-purple-400" size={20} />
                      </div>
                      <h4 className="font-bold text-lg text-white">Back-end</h4>
                    </div>
                    <p className="text-slate-400">Node.js, Express, MongoDB, PostgreSQL</p>
                  </div>
                  
                  <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 transform hover:scale-102 hover:bg-slate-700 group">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3 group-hover:bg-purple-900 transition-colors">
                        <Code className="text-purple-400" size={20} />
                      </div>
                      <h4 className="font-bold text-lg text-white">Ferramentas</h4>
                    </div>
                    <p className="text-slate-400">Git, Docker, AWS, Figma</p>
                  </div>
                  
                  <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 transform hover:scale-102 hover:bg-slate-700 group">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3 group-hover:bg-purple-900 transition-colors">
                        <Code className="text-purple-400" size={20} />
                      </div>
                      <h4 className="font-bold text-lg text-white">Soft Skills</h4>
                    </div>
                    <p className="text-slate-400">Comunicação, Trabalho em equipe, Resolução de problemas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-1 bg-purple-500 mr-4"></div>
            <h2 className="text-3xl font-bold text-center text-white">Meus Projetos</h2>
            <div className="w-12 h-1 bg-purple-500 ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 animate-on-scroll">
              <div className="relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="E-commerce Project" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t border-slate-700">
                <h3 className="font-bold text-xl mb-2 text-white">E-commerce Platform</h3>
                <p className="text-slate-400 mb-4">Uma plataforma de e-commerce completa com sistema de pagamentos, carrinho e painel administrativo.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">React</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">Node.js</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">MongoDB</span>
                </div>
                <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Ver projeto <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 animate-on-scroll">
              <div className="relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Task Management App" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t border-slate-700">
                <h3 className="font-bold text-xl mb-2 text-white">Task Management App</h3>
                <p className="text-slate-400 mb-4">Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">TypeScript</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">Next.js</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">Firebase</span>
                </div>
                <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Ver projeto <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 animate-on-scroll">
              <div className="relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80" 
                  alt="Analytics Dashboard" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t border-slate-700">
                <h3 className="font-bold text-xl mb-2 text-white">Analytics Dashboard</h3>
                <p className="text-slate-400 mb-4">Dashboard de análise de dados com visualizações interativas e relatórios personalizados.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">React</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">D3.js</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700">Express</span>
                </div>
                <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Ver projeto <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-1 bg-purple-500 mr-4"></div>
            <h2 className="text-3xl font-bold text-center text-white">Experiência Profissional</h2>
            <div className="w-12 h-1 bg-purple-500 ml-4"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            {/* Experience Item 1 */}
            <div className="mb-12 relative pl-8 border-l-2 border-purple-500 animate-on-scroll">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 animate-pulse-slow"></div>
              <div className="mb-2">
                <h3 className="text-xl font-bold text-white">Desenvolvedor Full Stack Senior</h3>
                <p className="text-purple-400">Empresa Tecnologia Ltda</p>
                <p className="text-slate-400 text-sm">Jan 2022 - Presente</p>
              </div>
              <p className="text-slate-300">
                Desenvolvimento de aplicações web escaláveis utilizando React, Node.js e AWS. 
                Liderança técnica de equipe com 5 desenvolvedores e implementação de metodologias ágeis.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="mb-12 relative pl-8 border-l-2 border-purple-500 animate-on-scroll">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 animate-pulse-slow"></div>
              <div className="mb-2">
                <h3 className="text-xl font-bold text-white">Desenvolvedor Front-end</h3>
                <p className="text-purple-400">Agência Digital S.A.</p>
                <p className="text-slate-400 text-sm">Mar 2019 - Dez 2021</p>
              </div>
              <p className="text-slate-300">
                Desenvolvimento de interfaces responsivas e acessíveis para diversos clientes.
                Implementação de design systems e otimização de performance em aplicações React.
              </p>
            </div>

            {/* Experience Item 3 */}
            <div className="relative pl-8 border-l-2 border-purple-500 animate-on-scroll">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 animate-pulse-slow"></div>
              <div className="mb-2">
                <h3 className="text-xl font-bold text-white">Desenvolvedor Web Júnior</h3>
                <p className="text-purple-400">Startup Inovadora</p>
                <p className="text-slate-400 text-sm">Jun 2017 - Fev 2019</p>
              </div>
              <p className="text-slate-300">
                Desenvolvimento de landing pages e aplicações web utilizando HTML, CSS e JavaScript.
                Participação em projetos de e-commerce e sistemas de gestão interna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-1 bg-purple-500 mr-4"></div>
            <h2 className="text-3xl font-bold text-center text-white">Entre em Contato</h2>
            <div className="w-12 h-1 bg-purple-500 ml-4"></div>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 animate-on-scroll">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors text-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors text-white"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <div className="bg-slate-900 p-8 rounded-lg shadow-lg border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-slate-400">seuemail@exemplo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-white">Localização</p>
                      <p className="text-slate-400">São Paulo, Brasil</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-900 transition-colors border border-slate-700 hover:border-purple-500 transform hover:scale-110 transition-all duration-300">
                      <Github className="w-5 h-5 text-slate-300" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-900 transition-colors border border-slate-700 hover:border-purple-500 transform hover:scale-110 transition-all duration-300">
                      <Linkedin className="w-5 h-5 text-slate-300" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-900 transition-colors border border-slate-700 hover:border-purple-500 transform hover:scale-110 transition-all duration-300">
                      <FileText className="w-5 h-5 text-slate-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">João Victor Damasceno Schinaider</h2>
              <p className="text-slate-400">Desenvolvedor Full Stack</p>
            </div>
            <div>
              <p className="text-slate-400">&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;