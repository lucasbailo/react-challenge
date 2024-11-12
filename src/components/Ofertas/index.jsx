import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Ofertas/PlantasList.module.css"
import cyperus from "../../assets/Cyperus.png"
import delairea from "../../assets/Delairea.png"
import datura from "../../assets/Datura.png"

export default function PlantasList() {
    
    const caminho = "src/assets/"
    const [plantas, setPlantas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsenc=p2ANqtz--mi6-y6c_T4egtItPSJSyi3gzWJmpZTkFW9Mpk5B4agNVs5LkvwvtNPXE1XMD0UHMDhBRudteBO_dCQtFjvpXk0ybWWw&_hsmi=231361624&utm_content=231361624&utm_source=hs_automation")
        .then(response => {
            setPlantas(response.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Carregando...</div>
    }

    return(
        <section className={styles.section__ofertas}>
            <h1 className={styles.text__conheca}>Conheça nossas ofertas</h1>
            <h1 className={styles.text__ofertas}>ofertas</h1>


            <div className={styles.container__cards}>
                {/* Início do map */}
                {plantas.map(planta =>(
                    <>
                        <div key={planta.ordem} className={styles.card__box}>
                                <div className={styles.image__box}>
                                    <img className={styles.image__size} src={caminho + planta.img + ".png"} alt="" />
                                </div>
                                <div className={styles.card__box__text_div}>
                                    <h2 className={styles.plant__name}>{planta.name}</h2>
                                    <span className={styles.plant__price}>R$ {planta.preco}</span>
                                    <a href="#" className={styles.plant__buy}>Comprar <strong>→</strong></a>
                                </div>
                        </div>
                    </>
                    ))}
                {/* Fim do map */}
                <div className={styles.card__box}>
                    <div className={styles.image__box}>
                        <img className={styles.image__size} src={cyperus} alt="" />
                    </div>
                    <div className={styles.card__box__text_div}>
                        <h2 className={styles.plant__name}>Cyperus rotundus</h2>
                        <span className={styles.plant__price}>R$ 20.00</span>
                        <a href="#" className={styles.plant__buy}>Comprar <strong>→</strong></a>
                    </div>
                </div>
                <div className={styles.card__box}>
                    <div className={styles.image__box}>
                        <img className={styles.image__size} src={delairea} alt="" />
                    </div>
                    <div className={styles.card__box__text_div}>
                        <h2 className={styles.plant__name}>Delairea odorata</h2>
                        <span className={styles.plant__price}>R$ 79.90</span>
                        <a href="#" className={styles.plant__buy}>Comprar <strong>→</strong></a>
                    </div>
                </div>
                <div className={styles.card__box}>
                    <div className={styles.image__box}>
                        <img className={styles.image__size} src={datura} alt="" />
                    </div>
                    <div className={styles.card__box__text_div}>
                        <h2 className={styles.plant__name}>Datura metel</h2>
                        <span className={styles.plant__price}>R$ 37.90</span>
                        <a href="#" className={styles.plant__buy}>Comprar <strong>→</strong></a>
                    </div>
                </div>
            </div>

        </section>
    )
}