import styles from './footer.module.css';
import { getImageUrl } from '../../utils';

const Footer = () => {
  return (
    <section className={styles.footerContainer} id="contact">
      <div className={styles.footerContent}>
        <div className={styles.footerLogoRow}>
          <div className={styles.footerLogo}>
            <img
              src={getImageUrl('contact/iconofooter1.png')}
              alt="icono"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <ul className={styles.lista}>
            <li>Política de Privacidad</li>
            <li>Soporte</li>
            <li>Términos y Condiciones</li>
            <li>Trabaja con Nosotros</li>
          </ul>
        </div>
        <div className={styles.footerSocialMedia}>
          <ul className={styles.socialMediaContainer}>
            <li>
              <img src={getImageUrl('contact/emailIcon.png')} alt="email" />
              <a href="mailto:matiasanchez999@gmail.com">Email</a>
            </li>
            <li>
              <img src={getImageUrl('contact/githubIcon.png')} alt="github" />
              <a href="https://github.com/matsan201">GitHub</a>
            </li>
            <li>
              <img
                src={getImageUrl('contact/linkedinIcon.png')}
                alt="linkedin"
              />
              <a href="https://www.linkedin.com/in/matias-ignacio-sanchez-b1289226a">
                Linkedin
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <p className={styles.footerCopyright}>
        &copy; 2023 Matias Sanchez. Todos los derechos reservados.
      </p>
    </section>
  );
};

export default Footer;
