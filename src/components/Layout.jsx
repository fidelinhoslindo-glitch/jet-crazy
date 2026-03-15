import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="dark-mode">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
