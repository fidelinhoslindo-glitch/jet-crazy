import React, { useState, useEffect } from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            img: '/wp-content/uploads/2023/08/Banner-SeaDoo-MY26.jpg',
            title: 'Linha Sea-Doo 2026',
            subtitle: 'Conheça os novos modelos e tecnologias que vão revolucionar sua experiência na água.',
            btnText: 'Ver Modelos',
            btnLink: '/jets'
        },
        {
            img: '/wp-content/uploads/2023/08/banner-seminovos.jpg',
            title: 'Seminovos de Elite',
            subtitle: 'Veículos revisados com garantia e a procedência que só a Jet Crazy oferece.',
            btnText: 'Ver Estoque',
            btnLink: '/seminovos'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="home-page">
            {/* Hero Section with Slider */}
            <section className="hero-section" style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            zIndex: index === currentSlide ? 1 : 0
                        }}
                    >
                        <img 
                            src={slide.img} 
                            alt={slide.title} 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                filter: 'brightness(0.6)' 
                            }} 
                        />
                        <div className="container" style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            textAlign: 'center',
                            width: '100%',
                            zIndex: 2
                        }}>
                            <h1 className="animate-up" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{slide.title}</h1>
                            <p className="animate-up" style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>{slide.subtitle}</p>
                            <Link to={slide.btnLink} className="btn-contact animate-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                {slide.btnText} <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                ))}
            </section>

            {/* Banner Categories */}
            <section className="section-padding" style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h2 className="animate-up">Explore Nossas Linhas</h2>
                    </div>
                    <div className="category-grid animate-up">
                        <Link to="/jets" className="category-banner">
                            <img src="/wp-content/uploads/2025/10/Box-Agua-2026.jpg" alt="Jets" />
                            <div className="banner-overlay"><span>Jets</span></div>
                        </Link>
                        <a href="https://jetcrazy.mercadoshops.com.br/" className="category-banner" target="_blank" rel="noopener noreferrer">
                            <img src="/wp-content/uploads/2025/10/Box-Boutique-2026.jpg" alt="Boutique" />
                            <div className="banner-overlay"><span>Boutique</span></div>
                        </a>
                        <Link to="/utvs" className="category-banner">
                            <img src="/wp-content/uploads/2025/10/Box-Rodas-2026.jpg" alt="UTVs & Quadriciclos" />
                            <div className="banner-overlay"><span>UTVs & Quadris</span></div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Instagram Feed */}
            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="animate-up">Mundo Jet Crazy</h2>
                    <p className="animate-up" style={{ color: 'var(--text-muted)', marginTop: '10px', marginBottom: '3rem' }}>
                        Siga-nos e acompanhe nossas aventuras no Instagram
                    </p>
                    <div className="instagram-container animate-up" style={{ marginBottom: '3rem' }}>
                        <div className="elfsight-app-be4ebbf3-31ae-4f07-aa8c-6485921b2e34" data-elfsight-app-lazy></div>
                    </div>
                    <a href="https://www.instagram.com/jetcrazy/" className="btn-seguir-insta animate-up" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--gradient-primary)', padding: '12px 25px', borderRadius: '50px', fontWeight: 'bold' }}>
                        <Instagram size={20} />
                        @JETCRAZY
                    </a>
                </div>
            </section>

            {/* Map Section */}
            <section className="section-padding" style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h2 className="animate-up">Onde Estamos</h2>
                        <p className="animate-up" style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Visite nossa unidade em São Paulo</p>
                    </div>
                    <div className="map-section animate-up">
                        <div className="map-wrapper" style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.485122606544!2d-46.57762692466988!3d-23.551000678807183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e933458564b%3A0xe78190768407486e!2sAv.%20Ver.%20Abel%20Ferreira%2C%20700%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003340-000!5e0!3m2!1spt-BR!2sbr!4v1710486000000!5m2!1spt-BR!2sbr" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Tatuapé"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
