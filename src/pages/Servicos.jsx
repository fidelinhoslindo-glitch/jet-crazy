import React from 'react';
import { Wrench, CheckCircle, Clock, Shield } from 'lucide-react';

const Servicos = () => {
    const images = [
        '/wp-content/uploads/2023/02/Servico-1.jpg',
        '/wp-content/uploads/2023/02/Servico-2.jpg',
        '/wp-content/uploads/2023/02/Servico-3.jpg',
        '/wp-content/uploads/2023/02/Servico-4.jpg'
    ];

    return (
        <div className="servicos-page">
            <header className="page-header" style={{ 
                backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), var(--background)), url("/wp-content/uploads/2023/02/img-destaque-servicos.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 className="animate-up" style={{ fontSize: '3.5rem' }}>Serviços Especializados</h1>
                    <p className="animate-up" style={{ opacity: 0.8, marginTop: '20px', maxWidth: '700px', margin: '15px auto 0' }}>
                        Manutenção de elite para sua máquina. Técnicos treinados pela fábrica e ferramentas originais.
                    </p>
                </div>
            </header>

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div className="animate-up">
                            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Excelência Técnica BRP</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                A Jet Crazy dispõe de técnicos altamente qualificados, treinados pela fábrica, para cuidar da manutenção de seu veículo. 
                                Aliada a um moderno parque técnico, com equipamentos e ferramentas originais, garantimos sempre o máximo em desempenho e economia de sua máquina.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <CheckCircle size={20} color="var(--secondary)" />
                                    <span>Peças Originais</span>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <Wrench size={20} color="var(--secondary)" />
                                    <span>Técnicos Certificados</span>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <Clock size={20} color="var(--secondary)" />
                                    <span>Agilidade</span>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <Shield size={20} color="var(--secondary)" />
                                    <span>Garantia de Fábrica</span>
                                </div>
                            </div>
                        </div>
                        <div className="animate-up" style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
                            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Agendar Revisão</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <input type="text" placeholder="Seu Nome" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '5px', color: 'white' }} />
                                <input type="email" placeholder="Seu Email" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '5px', color: 'white' }} />
                                <input type="tel" placeholder="Seu Telefone" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '5px', color: 'white' }} />
                                <textarea placeholder="Detalhes do Veículo" rows="4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '5px', color: 'white' }}></textarea>
                                <button type="submit" className="btn-contact" style={{ padding: '12px' }}>Solicitar Agendamento</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <h2 className="text-center animate-up" style={{ marginBottom: '3rem' }}>Nosso Centro Técnico</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                        {images.map((img, i) => (
                            <div key={i} className="animate-up" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '200px' }}>
                                <img src={img} alt={`Serviço ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicos;
