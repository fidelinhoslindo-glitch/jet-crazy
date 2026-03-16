import { motion } from 'framer-motion';
import { Camera, Zap, Clock, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const Seminovos = () => {
    const seaDooProducts = [
        { title: "Sea-Doo GTI 130 SE 2023", img: "/wp-content/uploads/2025/09/03-GTI-130-SE.jpg", year: "2023", detail: "119h", type: "hours", motor: "Rotax 1.630 ACE", slug: "sea-doo-gti-130-se-2022" },
        { title: "Sea-Doo GTI 130 STD 2023", img: "/wp-content/uploads/2025/10/02-GTI-130.jpg", year: "2023", detail: "28h", type: "hours", motor: "Rotax 1.630 ACE", slug: "sea-doo-gti-130-std-2023" },
        { title: "Sea-Doo GTI 130 SE 2024", img: "/wp-content/uploads/2025/07/03-GTI-170-SE-2024.jpg", year: "2024", detail: "47h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-gti-170-se-2024-3" },
        { title: "Sea-Doo GTI 170 SE 2024", img: "/wp-content/uploads/2025/10/05-GTI-170-SE-2024.jpg", year: "2024", detail: "45h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-gti-170-se-2024-4" },
        { title: "Sea-Doo GTX 130 2024", img: "/wp-content/uploads/2025/12/02-GTX-130.jpg", year: "2024", detail: "17h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-gtx-130-2024" },
        { title: "Sea-Doo GTX 170 2023", img: "/wp-content/uploads/2026/02/05-GTX-170-2023.jpg", year: "2023", detail: "103h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-gtx-170-2023" },
        { title: "Sea-Doo GTX 170 2024", img: "/wp-content/uploads/2025/11/05-GTX-170.jpg", year: "2024", detail: "39h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-gtx-170-2024" },
        { title: "Sea-Doo GTX 230 2023", img: "/wp-content/uploads/2025/03/03-GTX-230-2023.jpg", year: "2023", detail: "132.9h", type: "hours", motor: "Rotax 1.630 ACE", slug: "sea-doo-gtx-230-2023" },
        { title: "Sea-Doo GTX 230 2024", img: "/wp-content/uploads/2025/07/06-GTX-230.jpg", year: "2024", detail: "55h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-gtx-230-2024" },
        { title: "Sea-Doo GTX 300 Limited 2023", img: "/wp-content/uploads/2025/09/04-GTX-300-Limited.jpg", year: "2023", detail: "n/dh", type: "hours", motor: "Rotax 1.630 ACE", slug: "sea-doo-gtx-300-limited-2023-2" },
        { title: "Sea-Doo GTX 300 Limited 2024", img: "/wp-content/uploads/2026/01/03-GTX-300-Limited.jpg", year: "2024", detail: "37h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-gtx-300-limited-2024" },
        { title: "Sea-Doo GTX 325 Limited 2025", img: "/wp-content/uploads/2026/01/03-GTX-325-Limited.jpg", year: "2025", detail: "5h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-gtx-325-limited-2025" },
        { title: "Sea-Doo RXT-X 325 2025", img: "/wp-content/uploads/2025/09/03-RXT-X-325.jpg", year: "2025", detail: "23h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-rxt-x-325-2025" },
        { title: "Sea-Doo Spark 3Up 2023", img: "/wp-content/uploads/2025/07/04-Spark-3Up.jpg", year: "2023", detail: "13h", type: "hours", motor: "Rotax 90 HP", slug: "sea-doo-spark-3up-2023" },
        { title: "Sea-Doo Wake Pro 170 2024", img: "/wp-content/uploads/2025/03/02-Wake-170.jpg", year: "2024", detail: "22h", type: "hours", motor: "1.630 ACE", slug: "sea-doo-wake-pro-170-2024" },
        { title: "Yamaha FX SVHO 2024", img: "/wp-content/uploads/2025/10/02-Yamaha-FX-SVHO.jpg", year: "2024", detail: "27h", type: "hours", motor: "Yamaha SVHO 1.8", slug: "yamaha-fx-svho-2024" }
    ];

    const canAmProducts = [
        { title: "Can-Am Commander 700 Max 2024", img: "/wp-content/uploads/2025/10/04-Commander-700-Max.jpg", year: "2024", detail: "398km", type: "km", motor: "ACE 650", slug: "can-am-commander-700-max-2024" },
        { title: "Can-Am Defender HD7 2023", img: "/wp-content/uploads/2025/12/05-Defender-HD7.jpg", year: "2023", detail: "3.860km", type: "km", motor: "Rotax ACE 650", slug: "can-am-defender-hd7-2023" },
        { title: "Can-Am Defender Max HD9 2025", img: "/wp-content/uploads/2026/02/04-Defender-HD9-MAX.jpg", year: "2025", detail: "205km", type: "km", motor: "ACE 976 cc", slug: "can-am-defender-max-hd9-2025" },
        { title: "Can-Am Maverick X3 Max Xrs Turbo RR 2024", img: "/wp-content/uploads/2025/10/03-Maverick-X3-Xrs-Turbo-RR.jpg", year: "2024", detail: "290km", type: "km", motor: "ACE Turbo", slug: "can-am-maverick-x3-max-xrs-turbo-rr-2024" },
        { title: "Can-Am Outlander 1.000 Max XT-P 2019", img: "/wp-content/uploads/2025/04/05-Outlander-1000-Max-2.jpg", year: "2019", detail: "2.800km", type: "km", motor: "Rotax V-Twin", slug: "can-am-outlander-1-000-max-xt-p-2019" },
        { title: "Can-Am Outlander 500 Max DPS 2024", img: "/wp-content/uploads/2026/03/02-Outlander-500-Max-DPS.jpg", year: "2024", detail: "230km", type: "km", motor: "650 ACE", slug: "can-am-outlander-500-max-dps-2024" },
        { title: "Can-Am Outlander 650 MAX XT 2016", img: "/wp-content/uploads/2026/02/02-Outlander-650-MAX-XT.jpg", year: "2016", detail: "370h", type: "hours", motor: "Rotax V-Twin 650 cc", slug: "can-am-outlander-650-max-xt-2016" },
        { title: "CAN-AM OUTLANDER 650 MAX XT 2019", img: "/wp-content/uploads/2024/06/650Max-CAPA.jpg", year: "2019", detail: "950km", type: "km", motor: "Rotax V-Twin 650 cc", slug: "can-am-outlander-650-max-xt-2019" },
        { title: "Can-Am Outlander 700 Max XT 2023", img: "/wp-content/uploads/2024/09/Out700-Max-CAPA.jpg", year: "2023", detail: "216km", type: "km", motor: "Rotax 700", slug: "can-am-outlander-700-max-xt-2024" },
        { title: "Can-Am Outlander 700 Max XT 2024", img: "/wp-content/uploads/2026/03/02-Outlander-700-Max-XT.jpg", year: "2024", detail: "1.300km", type: "km", motor: "650 ACE", slug: "can-am-outlander-700-max-xt-2024-2" },
        { title: "Can-Am Outlander 850 Max XT 2023", img: "/wp-content/uploads/2025/05/02-Outlander-850-Max.jpg", year: "2023", detail: "1.880km", type: "km", motor: "Rotax 850 cc", slug: "can-am-outlander-850-max-xt-2023" },
        { title: "Can-Am Outlander Max LTD 1.000R 2024", img: "/wp-content/uploads/2026/01/02-Outlander-1000-LTD.jpg", year: "2024", detail: "502km", type: "km", motor: "ACE 976 cc V-Twin", slug: "can-am-outlander-max-ltd-1-000r-2024" }
    ];

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
        <div className="seminovos-hub">
            <motion.header 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="page-header"
            >
                <div className="container">
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Nossos Seminovos
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}
                    >
                        As melhores oportunidades em veículos premium revisados e com garantia de procedência.
                    </motion.p>
                </div>
            </motion.header>

            {/* Water Section */}
            <section className="section-padding">
                <div className="container">
                    <motion.div 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="section-title" 
                        style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}
                    >
                        <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                        <h2 style={{ fontSize: '2rem' }}>Água (Jets)</h2>
                    </motion.div>
                    <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-50px" }}
                        className="products-grid"
                    >
                        {seaDooProducts.map((p, i) => (
                            <motion.div 
                                key={i} 
                                variants={fadeInUp} 
                                whileHover={{ y: -10 }}
                                className="product-card"
                            >
                                <Link to={`/seminovos/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="product-image">
                                        <img src={p.img} alt={p.title} />
                                    </div>
                                    <div className="product-info">
                                        <h4 className="product-title">{p.title}</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span>Ano: {p.year}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                    {p.type === 'hours' ? <Clock size={14} /> : <Gauge size={14} />}
                                                    {p.detail}
                                                </span>
                                            </div>
                                            {p.motor && (
                                                <div style={{ fontSize: '0.8rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                    <Zap size={12} /> {p.motor}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                                <div style={{ padding: '0 20px 20px' }}>
                                    <a href={`https://wa.me/551129669554?text=Olá, tenho interesse no seminovo ${p.title}`} target="_blank" rel="noopener noreferrer" className="btn-contact" style={{ display: 'block', textAlign: 'center', padding: '10px' }}>
                                        Tenho Interesse
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Rodas Section */}
            <section className="section-padding" style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <motion.div 
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="section-title" 
                        style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}
                    >
                        <div style={{ width: '40px', height: '2px', background: 'var(--secondary)' }}></div>
                        <h2 style={{ fontSize: '2rem' }}>Rodas (Quadris & UTVs)</h2>
                    </motion.div>
                    <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-50px" }}
                        className="products-grid"
                    >
                        {canAmProducts.map((p, i) => (
                            <motion.div 
                                key={i} 
                                variants={fadeInUp} 
                                whileHover={{ y: -10 }}
                                className="product-card"
                            >
                                <Link to={`/seminovos/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="product-image">
                                        <img src={p.img} alt={p.title} />
                                    </div>
                                    <div className="product-info">
                                        <h4 className="product-title">{p.title}</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span>Ano: {p.year}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                    {p.type === 'hours' ? <Clock size={14} /> : <Gauge size={14} />}
                                                    {p.detail}
                                                </span>
                                            </div>
                                            {p.motor && (
                                                <div style={{ fontSize: '0.8rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                    <Zap size={12} /> {p.motor}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                                <div style={{ padding: '0 20px 20px' }}>
                                    <a href={`https://wa.me/551129669554?text=Olá, tenho interesse no seminovo ${p.title}`} target="_blank" rel="noopener noreferrer" className="btn-contact" style={{ display: 'block', textAlign: 'center', padding: '10px' }}>
                                        Tenho Interesse
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

export default Seminovos;
