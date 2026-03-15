import React from 'react';
import { MapPin, Phone, Target, Eye, ShieldCheck } from 'lucide-react';

const Lojas = () => {
    const stores = [
        {
            name: 'Jet Crazy - Tatuapé - SP',
            image: '/wp-content/uploads/2024/06/Mapa-JetCrazy.jpg',
            address: 'Av. Ver. Abel Ferreira, 700 - Tatuapé, São Paulo - SP',
            phone: '(11) 2966-9554',
            mapLink: 'https://maps.app.goo.gl/icJtyM6J8835Fsdg9'
        },
        {
            name: 'Jet Crazy - Bragança Paulista - SP',
            image: '/wp-content/uploads/2023/08/Mapa-JetCrazy-Braganca.jpg',
            address: 'Av. Dom Pedro I, 1450 - Jardim Nova Bragança, Bragança Paulista - SP',
            phone: '(11) 99118-9585',
            mapLink: 'https://maps.app.goo.gl/o5D8uJPHMEE7Hjor7'
        }
    ];

    return (
        <div className="lojas-page">
            <header className="page-header">
                <div className="container text-center">
                    <h1 className="animate-up">Nossas Lojas</h1>
                    <p className="animate-up" style={{ color: '#A0A0A0', maxWidth: '800px', margin: '0 auto' }}>
                        Venha nos visitar em uma de nossas unidades e conheça o que há de mais moderno no mundo off-road e marítimo.
                    </p>
                </div>
            </header>

            <div className="container animate-up">
                <div className="store-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {stores.map((store, index) => (
                        <div key={index} className="store-card" style={{ background: 'var(--surface)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                            <div className="store-map-thumb" style={{ height: '200px', backgroundImage: `url(${store.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div className="store-content" style={{ padding: '2rem' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{store.name}</h3>
                                <div className="store-info-item" style={{ display: 'flex', gap: '10px', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <MapPin size={18} color="var(--primary)" />
                                    <p>{store.address}</p>
                                </div>
                                <div className="store-info-item" style={{ display: 'flex', gap: '10px', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <Phone size={18} color="var(--primary)" />
                                    <a href={`tel:${store.phone.replace(/\D/g, '')}`} style={{ color: 'inherit' }}>{store.phone}</a>
                                </div>
                                <a href={store.mapLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.8rem 1.5rem', background: 'var(--primary)', color: 'white', borderRadius: 'var(--radius-sm)', fontWeight: '600' }}>
                                    Ver no Mapa
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="history-section" style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '3rem', marginTop: '4rem', border: '1px solid var(--glass-border)' }}>
                    <div className="text-center" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--primary)' }}>Nossa História</h2>
                    </div>
                    <div style={{ color: '#A0A0A0', lineHeight: 1.8 }}>
                        <p>A Jet Crazy, loja especializada no comercio e serviços em Jet Skis, Quadriciclos, UTVs e Roadsters das linhas BRP Sea-Doo e Can-Am, é a mais antiga loja em seu mercado de atuação.</p>
                        <p>Fundada em 1995, a Jet Crazy surgiu como uma brincadeira. Durante uma corrida de jet ski entre amigos, um grupo de jovens decidiu abrir uma loja.</p>
                        <p>Hoje o foco da Jet Crazy é mais do que ser apenas um lugar onde as pessoas encontram uma boa manutenção de jet ski. A empresa é comprometida com a inovação.</p>
                    </div>

                    <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        <div className="mission-item" style={{ textAlign: 'center', padding: '2rem', background: 'var(--glass)', borderRadius: 'var(--radius-md)' }}>
                            <Target size={32} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                            <h4>MISSÃO</h4>
                            <p style={{ color: '#A0A0A0', fontSize: '0.9rem', marginTop: '1rem' }}>Oferecer um ótimo atendimento e mercadorias de qualidade.</p>
                        </div>
                        <div className="mission-item" style={{ textAlign: 'center', padding: '2rem', background: 'var(--glass)', borderRadius: 'var(--radius-md)' }}>
                            <Eye size={32} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                            <h4>VISÃO</h4>
                            <p style={{ color: '#A0A0A0', fontSize: '0.9rem', marginTop: '1rem' }}>Ser reconhecida como a melhor loja do segmento.</p>
                        </div>
                        <div className="mission-item" style={{ textAlign: 'center', padding: '2rem', background: 'var(--glass)', borderRadius: 'var(--radius-md)' }}>
                            <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                            <h4>VALORES</h4>
                            <p style={{ color: '#A0A0A0', fontSize: '0.9rem', marginTop: '1rem' }}>Inovação, Integridade, Respeito à Vida.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-padding"></section>
        </div>
    );
};

export default Lojas;
