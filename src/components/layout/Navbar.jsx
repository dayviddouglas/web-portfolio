
import Container from "./Container";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../img/costs_logo.png"

const Navbar = () =>{
return(
     
         <nav className={styles.navbar}>
            <Container>
                    <Link to="/"><img src={Logo} alt="Foto-NavBar"/> </Link>
                    <ul className={styles.list}>
                        <li className= {styles.item}><Link to="/"> Home </Link></li>
                        <li className= {styles.item}><Link to="/company"> Empresa </Link></li>
                        <li className= {styles.item}><Link to="/projects"> Meus Projetos </Link></li>
                        <li className= {styles.item}><Link to="/contato"> Contato </Link></li>
                        <li className= {styles.item}><Link to="/login"> Entrar </Link></li>
                        
                    </ul>         
            </Container>
        </nav> 
    

    );
}

export default Navbar;