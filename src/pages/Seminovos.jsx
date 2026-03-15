import React from 'react';
import { Camera, Zap, Clock, Gauge } from 'lucide-react';

const Seminovos = () => {
    const seaDooProducts = [
        { title: 'Sea-Doo GTX 170 - 2023', img: '/wp-content/uploads/2026/02/05-GTX-170-2023.jpg', year: '2023', detail: '103h', type: 'hours' },
        { title: 'Sea-Doo GTX 300 Limited - 2024', img: '/wp-content/uploads/2026/01/03-GTX-300-Limited.jpg', year: '2024', detail: '37h', type: 'hours' },
        { title: 'Sea-Doo GTX 325 Limited - 2025', img: '/wp-content/uploads/2026/01/03-GTX-325-Limited.jpg', year: '2025', detail: '5h', type: 'hours' },
        { title: 'Sea-Doo GTX 130 - 2024', img: '/wp-content/uploads/2025/12/02-GTX-130.jpg', year: '2024', detail: '17h', type: 'hours' },
        { title: 'Sea-Doo GTX 170 - 2024', img: '/wp-content/uploads/2025/11/05-GTX-170.jpg', year: '2024', detail: '39h', type: 'hours' },
        { title: 'Yamaha FX SVHO - 2024', img: '/wp-content/uploads/2025/10/02-Yamaha-FX-SVHO.jpg', year: '2024', detail: '27h', type: 'hours' }
    ];

    const canAmProducts = [
        { title: 'Can-Am Outlander 700 Max XT - 2024', img: '/wp-content/uploads/2026/03/02-Outlander-700-Max-XT.jpg', year: '2024', detail: '1.300km', type: 'km' },
        { title: 'Can-Am Outlander 500 Max DPS - 2024', img: '/wp-content/uploads/2026/03/02-Outlander-500-Max-DPS.jpg', year: '2024', detail: '230km', type: 'km' },
        { title: 'Can-Am Outlander 650 MAX XT - 2016', img: '/wp-content/uploads/2026/02/02-Outlander-650-MAX-XT.jpg', year: '2016', detail: '370h', type: 'hours' },
        { title: 'Can-Am Defender Max HD9 - 2025', img: '/wp-content/uploads/2026/02/04-Defender-HD9-MAX.jpg', year: '2025', detail: '205km', type: 'km' }
    ];

    return (
        <div className="seminovos-hub">
            <header className="page-header">
                <div className="container">
                    <h1 className="animate-up">Nossos Seminovos</h1>
                    <p className="animate-up" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        As melhores oportunidades em veículos premium revisados e com garantia de procedência.
                    </p>
                </div>
            </header>

            {/* Water Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-title animate-up" style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                        <h2 style={{ fontSize: '2rem' }}>Água (Jets)</h2>
                    </div>
                    <div className="products-grid animate-up">
                        {seaDooProducts.map((p, i) => (
                            <div key={i} className="product-card">
                                <div className="product-image">
                                    <img src={p.img} alt={p.title} />
                                </div>
                                <div className="product-info">
                                    <h4 className="product-title">{p.title}</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        <span>Ano: {p.year}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            {p.type === 'hours' ? <Clock size={14} /> : <Gauge size={14} />}
                                            {p.detail}
                                        </span>
                                    </div>
                                    <a href={`https://wa.me/551129669554?text=Olá, tenho interesse no seminovo ${p.title}`} target="_blank" rel="noopener noreferrer" className="btn-contact" style={{ marginTop: '20px', display: 'block', textAlign: 'center', padding: '10px' }}>
                                        Tenho Interesse
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rodas Section */}
            <section className="section-padding" style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <div className="section-title animate-up" style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--secondary)' }}></div>
                        <h2 style={{ fontSize: '2rem' }}>Rodas (Quadris & UTVs)</h2>
                    </div>
                    <div className="products-grid animate-up">
                        {canAmProducts.map((p, i) => (
                            <div key={i} className="product-card">
                                <div className="product-image">
                                    <img src={p.img} alt={p.title} />
                                </div>
                                <div className="product-info">
                                    <h4 className="product-title">{p.title}</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        <span>Ano: {p.year}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            {p.type === 'hours' ? <Clock size={14} /> : <Gauge size={14} />}
                                            {p.detail}
                                        </span>
                                    </div>
                                    <a href={`https://wa.me/551129669554?text=Olá, tenho interesse no seminovo ${p.title}`} target="_blank" rel="noopener noreferrer" className="btn-contact" style={{ marginTop: '20px', display: 'block', textAlign: 'center', padding: '10px' }}>
                                        Tenho Interesse
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Seminovos;
