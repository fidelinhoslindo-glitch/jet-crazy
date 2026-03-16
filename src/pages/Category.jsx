import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lineupData from '../data/lineup_data.json';

const Category = ({ type: propsType }) => {
    const { type: paramType } = useParams();
    const categoryKey = propsType || paramType;

    const categoryMeta = {
        jets: { 
            title: 'Jets Sea-Doo 2026', 
            bg: '/wp-content/uploads/2026/02/05-GTX-170-2023.jpg',
            logo: '/wp-content/uploads/2023/02/logo-sea-doo.png',
        },
        utvs: { 
            title: 'UTVs Can-Am 2026', 
            bg: '/wp-content/uploads/2025/11/Can-Am-Maverick-X3-RS.jpg',
            logo: '/wp-content/uploads/2023/02/logo-can-am.png',
        },
        quadriciclos: { 
            title: 'Quadris Can-Am 2026', 
            bg: '/wp-content/uploads/2025/11/Outlander-1000R.jpg',
            logo: '/wp-content/uploads/2023/02/logo-can-am.png',
        },
        switch: { 
            title: 'Sea-Doo Switch 2026', 
            bg: '/wp-content/uploads/2023/08/Destaque-Switch-Cruise-560-x-360.jpg',
            logo: '/wp-content/uploads/2023/02/logo-sea-doo.png',
        }
    };

    const meta = categoryMeta[categoryKey] || categoryMeta.jets;
    // Pontoons is categorized as 'switch' in the UI
    const products = [...(lineupData[categoryKey] || []), ...(categoryKey === 'switch' ? lineupData.pontoons : [])];

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
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), var(--background)), url(${meta.bg})`, 
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
                    <img src={meta.logo} alt="Brand" style={{ height: '40px', marginBottom: '20px' }} />
                    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>{meta.title}</h1>
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
                        {products.map((product, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="product-card"
                            >
                                <Link to={`/${categoryKey}/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="product-image">
                                        <img src={product.hero_img} alt={product.title} />
                                    </div>
                                    <div className="product-info">
                                        <h4 className="product-title">{product.title}</h4>
                                        <span className="btn-contact" style={{ marginTop: '15px', display: 'block', textAlign: 'center', padding: '10px' }}>
                                            Ver Detalhes
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Category;
