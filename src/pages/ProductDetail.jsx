import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageCircle, Clock, Gauge, Zap, Calendar, Info, FileText, Send } from 'lucide-react';
import seminovosData from '../data/seminovos_data.json';
import lineupData from '../data/lineup_data.json';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        let found = null;
        
        // 1. Search in lineupData
        for (const cat in lineupData) {
            found = lineupData[cat].find(p => p.slug === slug);
            if (found) break;
        }

        // 2. Search in seminovosData
        if (!found) {
            const allSeminovos = [...seminovosData.seaDooProducts, ...seminovosData.canAmProducts];
            found = allSeminovos.find(p => p.slug === slug);
            
            if (found) {
                // Harmonize seminovos data to match lineup structure for specs
                found = {
                    ...found,
                    specs: [
                        { label: 'ANO', value: found.year },
                        { label: 'MOTORIZAÇÃO', value: found.motor },
                        { label: found.type === 'hours' ? 'HORAS' : 'KM', value: found.detail }
                    ]
                };
            }
        }

        if (found) {
            setProduct(found);
            window.scrollTo(0, 0);
        }
    }, [slug]);

    if (!product) {
        return (
            <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Produto não encontrado</h2>
                <Link to="/" className="btn-contact" style={{ display: 'inline-block' }}>
                    Voltar para Início
                </Link>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % product.gallery.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const isNew = product.year === '2026' || product.specs?.some(s => s.value === '2026');

    return (
        <div className="product-detail-unified" style={{ background: 'var(--background)', paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container" style={{ paddingBottom: '80px' }}>
                {/* Back Button */}
                <Link to={isNew ? '/jets' : '/seminovos'} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '30px', textDecoration: 'none' }}>
                    <ChevronLeft size={20} /> Voltar para Catálogo
                </Link>

                <div className="product-layout-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                    gap: '60px',
                    alignItems: 'start'
                }}>
                    
                    {/* LEFT COLUMN: CAROUSEL */}
                    <motion.div {...fadeInUp} className="carousel-column">
                        <div className="main-display" style={{ 
                            position: 'relative', 
                            borderRadius: '12px', 
                            overflow: 'hidden', 
                            background: '#1a1a1a', 
                            aspectRatio: '16/10',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img 
                                    key={currentImage}
                                    src={product.gallery[currentImage]} 
                                    alt={product.title}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </AnimatePresence>
                            
                            {product.gallery.length > 1 && (
                                <>
                                    <button onClick={prevImage} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', zIndex: 2 }}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button onClick={nextImage} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', zIndex: 2 }}>
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>
                        
                        {/* Thumbnails */}
                        <div className="thumbnail-list" style={{ 
                            display: 'flex', 
                            gap: '12px', 
                            marginTop: '20px', 
                            overflowX: 'auto', 
                            paddingBottom: '10px',
                            scrollbarWidth: 'none'
                        }}>
                            {product.gallery.map((img, idx) => (
                                <div 
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    style={{ 
                                        width: '120px', 
                                        height: '80px', 
                                        borderRadius: '6px', 
                                        overflow: 'hidden', 
                                        cursor: 'pointer',
                                        border: currentImage === idx ? '3px solid var(--primary)' : '3px solid transparent',
                                        flexShrink: 0,
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <img src={img} alt={`${product.title} ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>

                        {/* Description below carousel (Optional but clean) */}
                        <div className="product-description" style={{ marginTop: '40px' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', textTransform: 'uppercase', fontSize: '1.2rem', color: 'var(--primary)' }}>
                                <Info size={20} /> Descrição do Produto
                            </h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
                                {product.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: INFO & FORM */}
                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="info-column">
                        {product.brand_logo && (
                            <img src={product.brand_logo} alt="Brand" style={{ height: '35px', marginBottom: '15px' }} />
                        )}
                        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '10px' }}>{product.title}</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '35px' }}>
                            {isNew ? 'Novo Modelo 2026' : `Ano Modelo: ${product.year}`}
                        </p>

                        {/* Quote Form */}
                        <div className="quote-form-container" style={{ 
                            background: '#1a1a1a', 
                            borderRadius: '8px', 
                            border: '1px solid #333',
                            marginBottom: '40px',
                            overflow: 'hidden'
                        }}>
                            <h4 style={{ 
                                background: 'var(--primary)', 
                                color: 'black', 
                                padding: '12px', 
                                margin: 0, 
                                textAlign: 'center', 
                                textTransform: 'uppercase', 
                                fontWeight: 'bold' 
                            }}>Solicite Cotação</h4>
                            <div style={{ padding: '25px' }}>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <input type="text" placeholder="Seu Nome" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #333', background: '#0a0a0a', color: 'white' }} />
                                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px' }}>
                                        <input type="email" placeholder="E-mail" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #333', background: '#0a0a0a', color: 'white' }} />
                                        <input type="tel" placeholder="Telefone" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #333', background: '#0a0a0a', color: 'white' }} />
                                    </div>
                                    <textarea placeholder="Mensagem de interesse" rows="3" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #333', background: '#0a0a0a', color: 'white', resize: 'none' }}></textarea>
                                    <button type="submit" className="btn-contact" style={{ 
                                        width: '100%', 
                                        padding: '15px', 
                                        borderRadius: '4px',
                                        marginTop: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }}>
                                        <Send size={18} /> ENVIAR INTERESSE
                                    </button>
                                </form>
                                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                                    <span style={{ color: '#666', fontSize: '0.8rem' }}>Ou se preferir</span>
                                    <a 
                                        href={`https://wa.me/551129669554?text=Olá, tenho interesse no ${product.title}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#25D366', textDecoration: 'none', marginTop: '5px', fontWeight: 'bold' }}
                                    >
                                        <MessageCircle size={18} /> Conversar no WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Specs Grid */}
                        <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            {product.specs?.map((spec, i) => (
                                <div key={i} style={{ 
                                    background: '#1a1a1a', 
                                    padding: '20px', 
                                    borderRadius: '8px',
                                    border: '1px solid #222'
                                }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{spec.label}</span>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        {product.pdf_link && (
                            <a href={product.pdf_link} target="_blank" rel="noopener noreferrer" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px', 
                                textDecoration: 'none', 
                                color: 'white', 
                                background: '#1a1a1a', 
                                padding: '20px', 
                                borderRadius: '8px',
                                marginTop: '20px',
                                border: '1px solid #222'
                            }}>
                                <FileText size={32} color="var(--primary)" />
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>Ficha Técnica Completa</strong>
                                    <span style={{ color: '#666', fontSize: '0.9rem' }}>Download PDF Oficial</span>
                                </div>
                            </a>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
