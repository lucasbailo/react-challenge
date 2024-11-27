import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Ofertas/PlantasList.module.css"

export default function PlantasList() {
    

    const [plantas, setPlantas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/lucasbailo/b1a28ea8b61c889da4e367458cd46fed/raw/bbd9d29901bda0770ae7486f1252cf2e94811370/gistfile1.txt")
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
            <div className={styles.text__title_box}>
                <h1 className={styles.text__conheca}>Conheça nossas ofertas</h1>
                <h1 className={styles.text__ofertas}>ofertas</h1>
            </div>


            <div className={styles.container__cards}>
                {/* Início do map */}
                {plantas.map(planta =>(
                    <>
                        <div key={planta.ordem} className={styles.card__box}>
                                <div className={styles.image__box}>
                                    <img className={styles.image__size} src={planta.img} alt="" />
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
            </div>

        </section>
    )
}