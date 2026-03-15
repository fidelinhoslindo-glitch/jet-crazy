import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-widget">
                        <img src="/LOGO-NOVA.png" alt="Jet Crazy Logo" style={{ height: '80px', marginBottom: '2rem' }} />
                        <p style={{ color: '#A0A0A0' }}>
                            Autorizada BRP com linha completa Sea-doo de Jets, Quadriciclos e UTVs Can-am. 
                            Tradição e confiança em cada aventura.
                        </p>
                    </div>
                    
                    <div className="footer-widget">
                        <h4>Unidade Bragança Paulista</h4>
                        <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>
                            <MapPin size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                            Av. Dom Pedro I, 1450 - Jardim Nova Braganca<br />
                            Bragança Paulista - SP
                        </p>
                        <a href="tel:11991189585" style={{ display: 'block', marginTop: '10px', fontWeight: 600, color: '#FFFFFF' }}>
                            (11) 99118-9585
                        </a>
                    </div>

                    <div className="footer-widget">
                        <h4>Unidade Tatuapé</h4>
                        <p style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>
                            <MapPin size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                            Av. Ver. Abel Ferreira, 700 - Tatuapé<br />
                            São Paulo - SP
                        </p>
                        <a href="tel:1129669554" style={{ display: 'block', marginTop: '10px', fontWeight: 600, color: '#FFFFFF' }}>
                            (11) 2966-9554
                        </a>
                    </div>
                    
                    <div className="footer-widget">
                        <h4>Siga-nos</h4>
                        <div className="social-links" style={{ display: 'flex', gap: '15px', marginTop: '1rem' }}>
                            <a href="https://www.instagram.com/jetcrazy/" style={{ color: '#FFFFFF' }}><Instagram /></a>
                            <a href="https://www.facebook.com/jetcrazy.brp" style={{ color: '#FFFFFF' }}><Facebook /></a>
                            <a href="https://www.youtube.com/channel/UCdkVaCK2LVs43M_CtHIRoSQ" style={{ color: '#FFFFFF' }}><Youtube /></a>
                        </div>
                    </div>
                </div>
                
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <p style={{ color: '#A0A0A0', fontSize: '0.8rem' }}>&copy; 2026 Jet Crazy. Todos os direitos reservados.</p>
                    <div className="footer-bottom-links" style={{ display: 'flex', gap: '20px', fontSize: '0.8rem' }}>
                        <Link to="/privacidade" style={{ color: '#A0A0A0' }}>Privacidade</Link>
                        <Link to="/servicos" style={{ color: '#A0A0A0' }}>Serviços</Link>
                        <Link to="/boutique" style={{ color: '#A0A0A0' }}>Boutique</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
