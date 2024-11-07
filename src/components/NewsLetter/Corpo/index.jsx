import styles from "../Corpo/Corpo.module.css"
import ficus from "../../../assets/ficus-lyrata.png"
import mancha from "../../../assets/mancha-amarela.svg"
import costela from "../../../assets/costela-adao.png"
import elipse from "../../../assets/elipse.svg"

export default function Corpo () {
    return(
    <main>
        <section className={styles.section_one__box}>
            <section className={styles.section__box}>
                <h6 className={styles.text__suaCasa}>Sua casa com as </h6>
                <h1 className={styles.text__melhore}>melhores <br/>plantas</h1>
                <p className={styles.text__descricao}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <form className={styles.form__box}>
                    <input className={styles.form__box_input} placeholder="Insira seu e-mail" type="text" />
                    <button className={styles.form__box_button}>Assinar Newsletter</button>
                </form>
                <img className={styles.mancha__amarela} src={mancha} alt="" />
            </section>
            <section>
                <img className={styles.ficus__size} src={ficus} alt="" />
            </section>
        </section>
        <section className={styles.section_two__box}>
            <img className={styles.costela__size} src={costela} alt="" />
            <div className={styles.section_two__div_one}>
                <h6 className={styles.text__comoConseguir}>Como conseguir </h6>
                <h1 className={styles.text__minhaPlanta}>minha planta</h1>
                <div className={styles.box__div__lista}>
                    <div className={styles.div__lista}>
                        <img src={elipse} alt="" />
                        <p className={styles.descricao__lista}>Escolha suas plantas</p>
                    </div>
                    <div className={styles.div__lista}>
                        <img src={elipse} alt="" />
                        <p className={styles.descricao__lista}>Faça seu pedido</p>
                    </div>
                    <div className={styles.div__lista}>
                        <img src={elipse} alt="" />
                        <p className={styles.descricao__lista}>Aguarde na sua casa</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}