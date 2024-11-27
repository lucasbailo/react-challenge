import logo from "../../assets/logo-full.svg"
import styles from "../Header/Header.module.css"

export function Header () {
    return(
        <header className={styles.header_box}>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className={styles.header__ul}>
                <li><a href="#" className={styles.header__link}>Como fazer</a></li>
                <li>/</li>
                <li><a href="#" className={styles.header__link}>Ofertas</a></li>
                <li>/</li>
                <li><a href="#" className={styles.header__link}>Depoimentos</a></li>
                <li>/</li>
                <li><a href="#" className={styles.header__link}>Vídeos</a></li>
                <li>/</li>
                <li><a href="#" className={styles.header__link}>Meu carrinho</a></li>
            </ul>        
        </header>        
    )
}