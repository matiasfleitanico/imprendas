import styles from '../../../styles/Home.module.scss'
import Subtitle from '../parts/subtitle'

export default function Form() {
    return (
    <section className={styles.formContainer}>
        <div> 
        <Subtitle text="Datos de contacto" />
            <p>Comunícate con nosotros</p>
        <h6> Telefono</h6>
            <p>11 5024-2877</p>
        <h6>Correo</h6>
            <p>info@solypiletas.com.ar</p>
        <h6>Ubicación</h6>
            <p>Buenos Aires, Argentina</p>
        </div>
        <div className={styles.form}>
        <form action="">
            <label for="nombre">
                <span className={styles.span}> NOMBRE Y APELLIDO </span>
                <input/>
            </label>
            <label for="none">
                <span className={styles.span}> NÙMERO DE CELULAR </span>
                <input/>
            </label>
            <label for="horario">
                <span> EMAIL </span>
                <input/>
            </label>
            <label for="horario">
                <span className={styles.span}> MENSAJE O CONSULTA </span>
                <input/>
            </label>
        </form>
        </div>
    </section>
    )
  }
  