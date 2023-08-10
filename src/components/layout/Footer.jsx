
import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
    <footer className={styles.footer}>
        <ul className={styles.social_List}>
          <li className={styles.social_List}><FaFacebook/></li>
          <li className={styles.social_List}><FaInstagram/></li>
          <li className={styles.social_List}><FaLinkedin/></li>
        </ul>
        <p className={styles.copy_right}><span> Portfólio</span> &copy; 2023.</p>
    </footer>
    );
}

export default Footer;