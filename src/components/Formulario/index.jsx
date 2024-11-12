import { useState } from 'react';
import styles from './Formulario.module.css'
import emailjs from '@emailjs/browser'

function Formulario() {

  const sendEmail = (e) => {
    e.preventDefault()

    if(invalidEmail !== "" || emptyEmail !== "" ) {
      return;
    } else {
      setAllRight("Email de contato enviado!")
    }
    alert("Email enviado com sucesso!")
    
    emailjs.sendForm('service_51daxha', 'template_sj3h7fa', e.target, '4hkQhH0k30wN6iwnz')
    .then((response) => {
      console.log('Email enviado', response.status, response.text)
      setEmail('')
      setInvalidEmail('')
      setAllRight('')
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, (err) => {
      console.log("ERRO: ", err)
    })

  }
  
  const [email, setEmail] = useState('')
  const [invalidEmail, setInvalidEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState("")
  const [allRight, setAllRight] = useState("")

    
  function checkEmail() {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email === '') {
        setEmptyEmail("O campo Email não pode estar vazio");
    } else if (!regEx.test(email) && email !== "") {
        setEmptyEmail("");
        return setInvalidEmail("Email inválido");
    } else if (regEx.test(email)) {
        setInvalidEmail("");
    } else {
      setInvalidEmail("");
      setEmptyEmail("");
    }
  }


  return (
    <form className={styles.form__box} onSubmit={sendEmail}>
          <input
            placeholder="Insira seu e-mail"
            type="email"
            name="email"
            onChange={(e) => {setEmail(e.target.value)}}
            onBlur={checkEmail}            
            value={email}
            className={styles.form__box_input}
          />
          <button type="submit" className={styles.form__box_button}>
            Assinar Newsletter
          </button>
          <div className={styles.form__alert}>
            <div>
              {invalidEmail}
            </div>
            <div>
            {emptyEmail}
            </div>
          </div>
          <div className={styles.form__correct}>
            {allRight}
          </div>
        </form>
      )}

export default Formulario;