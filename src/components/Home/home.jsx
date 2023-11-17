/* eslint-disable react/no-unescaped-entities */
import styles from './home.module.css';
import cvPdf from '../../assets/MatiasSanchezCV.pdf';

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.introContent}>
        <span className={styles.hello}>Hola,</span>
        <span className={styles.introText}>
          Somos<span className={styles.introName}> Matias y Flavio </span>{' '}
          <br />
          Desarrolladores Web Full Stack{' '}
        </span>
        <p className={styles.introPara}>
          con experiencia en la creacion de sitios y aplicaciones web completas
          y <br /> el desarrollo y administración del backend pueden ayudar a
          desarrollar aplicaciones web y móviles <br />
          más rápidamente y Mejorar la calidad de las aplicaciones web y
          móviles.
        </p>
        <div className={styles.containerBtn}>
          <a
            href="mailto:matiasanchez999@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a href={cvPdf} className={styles.contactBtn} download>
            CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
