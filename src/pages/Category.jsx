import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Category = ({ type: propsType }) => {
    // ... data ...
    const { type: paramType } = useParams();
    const type = propsType || paramType;
    // ... categoryData ...
    const categoryData = {
        jets: { 
            title: 'Jets Sea-Doo 2026', 
            bg: '/wp-content/uploads/2026/02/05-GTX-170-2023.jpg',
            logo: '/wp-content/uploads/2023/02/logo-sea-doo.png',
            products: [
                { name: 'Sea-Doo Spark Trixx 1Up', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-TRIXX-1-UP.jpg' },
                { name: 'Sea-Doo Spark Trixx 3Up', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-TRIXX-3-UP.jpg' },
                { name: 'Sea-Doo GTI 130', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-GTI-130.jpg' },
                { name: 'Sea-Doo GTI SE 130', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-GTI-SE-130.jpg' },
                { name: 'Sea-Doo GTI SE 170', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-GTI-SE-170.jpg' },
                { name: 'Sea-Doo GTX 170', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-GTX-170.jpg' },
                { name: 'Sea-Doo GTX 230', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-GTX-230.jpg' },
                { name: 'Sea-Doo GTX 325 Limited', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-GTX-LIMITED-325.jpg' },
                { name: 'Sea-Doo Wake 170', img: '/wp-content/uploads/2025/10/WAKE-170-Imagem-Destacada.jpg' },
                { name: 'Sea-Doo Wake Pro 230', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-WAKE-PRO-230.jpg' },
                { name: 'Sea-Doo RXP-X 325', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-RXPX-325.jpg' },
                { name: 'Sea-Doo RXT-X 325', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-RXTX-325.jpg' },
                { name: 'Sea-Doo FishPro Trophy 170', img: '/wp-content/uploads/2025/10/Imagem-Destacada-MY26-560x360-FISH-PRO-TROPHY.jpg' }
            ]
        },
        utvs: { 
            title: 'UTVs Can-Am 2026', 
            bg: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-RS.jpg',
            logo: '/wp-content/uploads/2023/02/logo-can-am.png',
            products: [
                { name: 'Can-Am Commander Max DPS 1000R', img: '/wp-content/uploads/2025/11/Destaque-Commander-Max-DPS.jpg' },
                { name: 'Can-Am Defender HD7', img: '/wp-content/uploads/2025/11/Defender-HD7.jpg' },
                { name: 'Can-Am Defender DPS HD7', img: '/wp-content/uploads/2025/11/Defender-DPS-HD7.jpg' },
                { name: 'Can-Am Defender Max DPS HD9', img: '/wp-content/uploads/2025/11/Defender-Max-DPS-HD9.jpg' },
                { name: 'Can-Am Defender Pro DPS HD10', img: '/wp-content/uploads/2025/11/Defender-Pro-DPS-HD10.jpg' },
                { name: 'Can-Am Defender Max XT HD11', img: '/wp-content/uploads/2025/11/Defender-Max-XT-HD11.jpg' },
                { name: 'Can-Am Defender Max Limited HD11', img: '/wp-content/uploads/2025/11/Defender-Max-Limited-HD11.jpg' },
                { name: 'Can-Am Maverick X3 DS Turbo', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-DS.jpg' },
                { name: 'Can-Am Maverick X3 RS Turbo', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-RS.jpg' },
                { name: 'Can-Am Maverick X3 RS Turbo RR', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-Rs-Turbo-RR.jpg' },
                { name: 'Can-Am Maverick X3 XrsTurbo RR Smart-Shox', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-Xrs.jpg' },
                { name: 'Can-Am Maverick X3 Xrc Turbo RR 72”', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-Xrc.jpg' },
                { name: 'Can-Am Maverick X3 MAX DS Turbo', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-Max-DS-1.jpg' },
                { name: 'Can-Am Maverick X3 MAX RS Turbo', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-Max-RS.jpg' },
                { name: 'Can-Am Maverick X3 Max Xrs Turbo RR Smart Shox', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-Max-Xrs.jpg' },
                { name: 'Can-Am Maverick X3 Max Xrc Turbo RR', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-Max-Xrc.jpg' },
                { name: 'Can-Am Maverick R X', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-R-X.jpg' },
                { name: 'Can-Am Maverick R Xrs Smart-Shox', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-R-Xrs.jpg' },
                { name: 'Can-Am Maverick R Xrc', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-R-Xrc.jpg' },
                { name: 'Can-Am Maverick R Max X', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-R-Max-X.jpg' },
                { name: 'Can-Am Maverick R Max Xrs com Smart-Shox', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-R-Max-Xrs.jpg' },
                { name: 'Can-Am Maverick R MAX Xrc', img: '/wp-content/uploads/2025/11/Can-Am-Maverick-R-Max-Xrc.jpg' }
            ]
        },
        quadriciclos: { 
            title: 'Quadris Can-Am 2026', 
            bg: '/wp-content/uploads/2025/11/Outlander-1000R.jpg',
            logo: '/wp-content/uploads/2023/02/logo-can-am.png',
            products: [
                { name: 'Can-Am Outlander 500 2WD', img: '/wp-content/uploads/2025/11/Destaque-Outlander-500-4x2-1.jpg' },
                { name: 'Can-Am Outlander 500', img: '/wp-content/uploads/2025/11/Outlander-500.jpg' },
                { name: 'Can-Am Outlander ProHD5', img: '/wp-content/uploads/2025/11/Outlander-Pro-HD5.jpg' },
                { name: 'Can-Am Outlander Max DPS 500', img: '/wp-content/uploads/2025/11/2026-can-am-max-dps-500.jpg' },
                { name: 'Can-Am Outlander Max DPS 700', img: '/wp-content/uploads/2025/11/Outlander-MaxDPS-700.jpg' },
                { name: 'Can-Am Outlander Max XT 700', img: '/wp-content/uploads/2025/11/Outlander-Max-Xt-700.jpg' },
                { name: 'Can-Am Outlander Max XT 850', img: '/wp-content/uploads/2025/11/Outlander-Max-Xt-850.jpg' },
                { name: 'Can-Am Outlander Xmr 700', img: '/wp-content/uploads/2025/11/Outlander-Xmr-700.jpg' },
                { name: 'Can-Am Outlander Xmr 1000R', img: '/wp-content/uploads/2025/11/Outlander-XMR-1000R.jpg' },
                { name: 'Can-Am Outlander Max XT-P 1000R', img: '/wp-content/uploads/2025/11/Outlander-Max-XTP-1000R.jpg' },
                { name: 'Can-Am Outlander Max Limited 1000R', img: '/wp-content/uploads/2025/11/Outlander-Max-Limited-1000R.jpg' },
                { name: 'Can-Am Renegade X MR 1000R', img: '/wp-content/uploads/2025/11/Renegade-Xmr-1000R.jpg' }
            ]
        },
        switch: { 
            title: 'Sea-Doo Switch 2026', 
            bg: '/wp-content/uploads/2023/08/Destaque-Switch-Cruise-560-x-360.jpg',
            logo: '/wp-content/uploads/2023/02/logo-sea-doo.png',
            products: [
                { name: 'Sea-Doo Switch Cruise', img: '/wp-content/uploads/2023/08/Destaque-Switch-Cruise-560-x-360.jpg' },
                { name: 'Sea-Doo Switch Sport', img: '/wp-content/uploads/2023/08/Destaque-Switch-Sport-560-x-360.jpg' }
            ]
        }
    };

    const current = categoryData[type] || categoryData.jets;

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="category-page">
            <motion.header 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="page-header" 
                style={{ 
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), var(--background)), url(${current.bg})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    height: '450px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="container"
                >
                    <img src={current.logo} alt="Brand" style={{ height: '40px', marginBottom: '20px' }} />
                    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>{current.title}</h1>
                    <p style={{ opacity: 0.8, marginTop: '10px', maxWidth: '600px', margin: '15px auto 0' }}>
                        Explore a melhor experiência com a tecnologia líder mundial.
                    </p>
                </motion.div>
            </motion.header>

            <section className="section-padding">
                <div className="container">
                    <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        className="products-grid"
                    >
                        {current.products.map((product, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="product-card"
                            >
                                <div className="product-image">
                                    <img src={product.img} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <h4 className="product-title">{product.name}</h4>
                                    <a href={`https://wa.me/551129669554?text=Olá, tenho interesse no ${product.name}`} target="_blank" rel="noopener noreferrer" className="btn-contact" style={{ marginTop: '15px', display: 'block', textAlign: 'center', padding: '10px' }}>
                                        Consultar Preço
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Category;
