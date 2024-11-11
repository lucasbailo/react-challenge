import { Formik } from 'formik';
import styles from '../Form/Form.module.css'


const Form = () => (
    <div>
    <Formik
      initialValues={{ email: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Campo obrigatório';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Email inválido';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: " + JSON.stringify(values.email, null, 2));
          setSubmitting(false);
          values.email = "" 
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={styles.form__box}>
          <input
            placeholder="Insira seu e-mail"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={styles.form__box_input}
          />
          <button type="submit" disabled={isSubmitting} className={styles.form__box_button}>
            Assinar Newsletter
          </button>
          <div className={styles.form__alert}>
            {errors.email && touched.email && errors.email}
          </div>
          <div className={styles.form__correct}>
            {!errors.email && values.email != "" ? "Tudo certo!" : ""}
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;