import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Início', path: '/' },
        { name: 'Jets', path: '/jets' },
        { name: 'Switch', path: '/switch' },
        { name: 'Quadriciclos', path: '/quadriciclos' },
        { name: 'UTVs', path: '/utvs' },
        { name: 'Seminovos', path: '/seminovos' },
        { name: 'Boutique', path: '/boutique' },
        { name: 'Nossas Lojas', path: '/lojas' },
        { name: 'Serviços', path: '/servicos' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="site-header">
            <div className="container header-inner">
                <div className="logo">
                    <Link to="/">
                        <img src="/LOGO-NOVA.png" alt="Jet Crazy Logo" />
                    </Link>
                </div>
                
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        item.external ? (
                            <a 
                                key={item.path}
                                href={item.path} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-item"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link 
                                key={item.path}
                                to={item.path} 
                                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </nav>

                <div className="header-actions">
                    <button 
                        className="menu-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <a href="tel:1129669554" className="btn-contact desktop-only">
                        <Phone size={18} />
                        <span>(11) 2966-9554</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
