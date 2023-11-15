/* eslint-disable react/no-unescaped-entities */
import styles from './home.module.css';
import cvPdf from '../../assets/MatiasSanchezCV.pdf'; 

const Home = () => {
    return (
        <section className={styles.home} id='home'>
            <div className={styles.introContent}>
                <span className={styles.hello}>Hola,</span>
                <span className={styles.introText}>Soy<span className={styles.introName}> Matias </span> <br />Desarrollador Web Full Stack </span>
                <p className={styles.introPara}>Soy un desarrollador Full Stack con experiencia en la creacion de sitios y aplicaciones web completas <br /> el desarrollo y administración del backend</p>
                <div className={styles.containerBtn}>
                <a href="mailto:matiasanchez999@gmail.com" className={styles.contactBtn}>
                Contact Me
                </a>
                <a href={cvPdf} className={styles.contactBtn} download>
                CV
                </a>
                </div>
            </div>
        </section>
    )
}

export default Home