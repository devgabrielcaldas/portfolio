"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = (localStorage.getItem('lang') === 'en') ? 'en' : 'pt';
    console.log("Portfólio carregado com sucesso! Idioma:", savedLang);
    changeLanguage(savedLang);
});
const translations = {
    pt: {
        sobreSeparador: "Sobre Mim",
        habilidadesSeparador: "Habilidades",
        freelasSeparador: "Freelancers",
        projetosSeparador: "Projetos Pessoais",
        contatoSeparador: "Contato",
        tituloPrincipal: "Olá, eu sou o Gabriel Caldas",
        subtitulo: "Desenvolvedor Full Stack apaixonado por tecnologia.",
        contatoTexto: "Entre em contato comigo pelo WhatsApp clicando abaixo:",
        sobreTexto: `Olá! Meu nome é Gabriel Caldas, tenho 28 anos, sou formado em Ciência da Computação e construí minha trajetória unindo análise de dados e desenvolvimento de software.<br><br>Trabalhei por 2 anos no Congresso Nacional e no Senado Federal como Analista de Dados Orçamentários, atuando diretamente com Excel avançado, programação VBA e análise de informações estratégicas.<br><br>Em seguida, consolidei minha carreira no setor financeiro, desenvolvendo soluções como Full Stack Developer no Sicoob por quase 3 anos, utilizando tecnologias como Java EJB, TypeScript, HTML, CSS e Angular.<br><br>Hoje, busco transformar ideias em soluções digitais eficientes e inovadoras, combinando visão analítica, tecnologia e paixão por resultados. Vamos conversar?`,
        projeto1desc: "Criação web do site para delivery da doceria Luma Couto.",
        projeto2desc: "Plataforma de ensino de português com módulos interativos.",
        projeto3desc: "Site de encomendas de doces com login e chat automático.",
        projeto4desc: "Aplicativo de controle financeiro pessoal com gráficos.",
        projeto5desc: "Jogo da memória feito em TypeScript puro com animações.",
        projeto6desc: "Site para saber onde vai passar o jogo de futebol do seu time.",
        projeto7desc: "Jogo da cobrinha feito em TypeScript puro com animações.",
        btnVerProjeto: "🔗 Ver projeto",
        btnVerGitHub: "🔗 Ver no GitHub",
        btnWhatsapp: "💬 Fale comigo no WhatsApp",
        menuSobre: "Sobre Mim",
        menuFreelas: "Freelancers",
        menuProjetos: "Projetos Pessoais",
        menuContato: "Contato",
        whatsappMsg: "Olá Gabriel, vi seu portfólio e gostaria de conversar com você!"
    },
    en: {
        sobreSeparador: "About Me",
        habilidadesSeparador: "Skills",
        freelasSeparador: "Freelancers",
        projetosSeparador: "Personal Projects",
        contatoSeparador: "Contact",
        tituloPrincipal: "Hello, I'm Gabriel Caldas",
        subtitulo: "Full Stack Developer passionate about technology.",
        contatoTexto: "Get in touch with me via WhatsApp by clicking below:",
        sobreTexto: `Hi! My name is Gabriel Caldas, I am 28 years old and have a degree in Computer Science.<br><br>I built my career by combining data analysis and software development, working for 2 years at the National Congress and the Federal Senate as a Budget Data Analyst.<br><br>I then consolidated my career in the financial sector, developing solutions as a Full Stack Developer at Sicoob for almost 3 years, using technologies like Java EJB, TypeScript, HTML, CSS, and Angular.<br><br>Today, I aim to transform ideas into efficient and innovative digital solutions, combining analytical vision, technology, and passion for results. Let's talk?`,
        projeto1desc: "Website for Luma Couto's bakery delivery service.",
        projeto2desc: "Online Portuguese course platform with interactive modules.",
        projeto3desc: "Candy ordering website with login and automatic chat.",
        projeto4desc: "Financial control application with charts.",
        projeto5desc: "Memory game built with pure TypeScript and animations.",
        projeto6desc: "Website showing where your soccer team match will be broadcast.",
        projeto7desc: "Snake game built with pure TypeScript and animations.",
        btnVerProjeto: "🔗 View project",
        btnVerGitHub: "🔗 View on GitHub",
        btnWhatsapp: "💬 Talk to me on WhatsApp",
        menuSobre: "About me",
        menuFreelas: "Freelancers",
        menuProjetos: "Personal Projects",
        menuContato: "Contact",
        whatsappMsg: "Hi Gabriel, I saw your portfolio and would like to talk to you!"
    }
};
function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.getElementById('sobre-separador').textContent = translations[lang].sobreSeparador;
    document.getElementById('habilidades-separador').textContent = translations[lang].habilidadesSeparador;
    document.getElementById('freelas-separador').textContent = translations[lang].freelasSeparador;
    document.getElementById('projetos-separador').textContent = translations[lang].projetosSeparador;
    document.getElementById('contato-separador').textContent = translations[lang].contatoSeparador;
    document.getElementById('titulo-principal').textContent = translations[lang].tituloPrincipal;
    document.getElementById('subtitulo').textContent = translations[lang].subtitulo;
    document.getElementById('texto-contato').textContent = translations[lang].contatoTexto;
    document.getElementById('texto-sobre').innerHTML = `<p>${translations[lang].sobreTexto}</p>`;
    document.getElementById('sobre-link').textContent = translations[lang].menuSobre;
    document.getElementById('freelas-link').textContent = translations[lang].menuFreelas;
    document.getElementById('projetos-link').textContent = translations[lang].menuProjetos;
    document.getElementById('contato-link').textContent = translations[lang].menuContato;
    document.getElementById('desc-projeto1').textContent = translations[lang].projeto1desc;
    document.getElementById('desc-projeto2').textContent = translations[lang].projeto2desc;
    document.getElementById('desc-projeto3').textContent = translations[lang].projeto3desc;
    document.getElementById('desc-projeto4').textContent = translations[lang].projeto4desc;
    document.getElementById('desc-projeto5').textContent = translations[lang].projeto5desc;
    document.getElementById('desc-projeto6').textContent = translations[lang].projeto6desc;
    document.getElementById('desc-projeto7').textContent = translations[lang].projeto7desc;
    document.querySelectorAll('.btn-ver-projeto').forEach(btn => {
        btn.innerHTML = translations[lang].btnVerProjeto;
    });
    document.querySelectorAll('.btn-ver-github').forEach(btn => {
        btn.innerHTML = translations[lang].btnVerGitHub;
    });
    const whatsappBtn = document.querySelector('.whatsapp-button');
    if (whatsappBtn) {
        whatsappBtn.innerHTML = translations[lang].btnWhatsapp;
        whatsappBtn.href = `https://wa.me/5561985357155?text=${encodeURIComponent(translations[lang].whatsappMsg)}`;
    }
}
document.getElementById('btn-pt').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('lang', 'pt');
    location.reload();
});
document.getElementById('btn-en').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('lang', 'en');
    location.reload();
});
function setupCarousel(carouselId, prevBtnId, nextBtnId, cardsPerView = 2) {
    const carousel = document.getElementById(carouselId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const cards = carousel.querySelectorAll('.card');
    let currentIndex = 0;
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 16;
        const offset = -currentIndex * cardWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= cardsPerView;
            updateCarousel();
        }
    });
    nextBtn.addEventListener('click', () => {
        if (currentIndex + cardsPerView < cards.length) {
            currentIndex += cardsPerView;
            updateCarousel();
        }
    });
    updateCarousel();
}
const cardsPerView = window.innerWidth <= 768 ? 1 : 2;
setupCarousel("freelas-carousel", "freelas-prev", "freelas-next", cardsPerView);
setupCarousel("projetos-carousel", "projetos-prev", "projetos-next", cardsPerView);
//# sourceMappingURL=main.js.map