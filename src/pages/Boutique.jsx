import React from 'react';
import { Hammer } from 'lucide-react';

const Boutique = () => {
    return (
        <div className="boutique-construction-page" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#0a0a0a',
            color: '#fff',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <div className="icon-wrapper" style={{ marginBottom: '2rem', color: '#ffcc00' }}>
                <Hammer size={80} />
            </div>
            
            <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '800', 
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>
                Em Construção
            </h1>
            
            <p style={{ 
                fontSize: '1.2rem', 
                color: '#A0A0A0', 
                maxWidth: '600px',
                marginBottom: '3rem'
            }}>
                Estamos preparando uma experiência exclusiva para você. 
                Em breve, nossa boutique completa com acessórios e vestuário original Sea-Doo e Can-Am.
            </p>

            <div className="logo-construction" style={{ marginTop: '2rem' }}>
                <img 
                    src="/LOGO-NOVA.png" 
                    alt="Jet Crazy Logo" 
                    style={{ maxHeight: '80px', opacity: '0.8' }} 
                />
            </div>
        </div>
    );
};

export default Boutique;
