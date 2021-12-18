import styles from '../../../styles/Home.module.scss'
import Subtitle from '../parts/subtitle'
import emailjs from 'emailjs-com'
import { useState } from "react";

const Result = () => {
    let myStyle = {
        backgroundColor: '#121212',
        width: '400px',
        height: '100px',
        position: 'fixed',
        top: '15%',
        left: '35%',
        rigth: '0',
        borderRadius: '10px',
        padding: '30px 15px 10px',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'belleza',
        justifyContent:'center'

    }
        return(
        <p style={myStyle}>Su mensaje fue enviado correctamente. <br />Te contactaremos en breve.</p>
        )
};



export default function Form() {
        const [result, showResult] = useState(false);
        const sendEmail = (e) => {
            e.preventDefault();
        emailjs.sendForm('service_sru4pyk', 'template_rg9mkk4', e.target, 'user_8PAQJxXhAcj0pP1OEzXE5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true)
        };

        let inputStyle = {
            border: '0'
        }
      return  (     
      <section className={styles.formContainer}>
      <div className={styles.datos}> 
        <section><Subtitle text="Datos de contacto" />
        <p className={styles.subtitleForm2}>Comunícate con nosotros</p>
        </section>
        <div className={styles.dat1}>
            <h6 className={styles.subtitleForm}> TEL</h6>
            <p className={styles.subtitleForm3}>11 5024-2877</p>
        </div>
        <div className={styles.dat2}>
            <h6 className={styles.subtitleForm}>CORREO</h6>
          <p className={styles.subtitleForm3}>info@solypiletas.com.ar</p>
        </div>
        <div className={styles.dat3}>
            <h6 className={styles.subtitleForm}>UBICACIÓN</h6>
          <p className={styles.subtitleForm3}>Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className={styles.form}>
      <form onSubmit={sendEmail}>
          <div className={styles.formPattern}>
            <div className={styles.primer}>
                <label>
                    <span className={styles.subtitleForm}> NOMBRE Y APELLIDO: </span>
                    <input className={styles.inputStyle} type="text" name="fullName" minlength="4" required/>
                </label>
            </div>
            <div className={styles.segundo}>
                <label>
                    <span className={styles.subtitleForm}> NÙMERO DE CELULAR: </span>
                    <input className={styles.inputStyle} minlength="6" maxlength="11" type="number" name="phone"  required/>
                </label>
            </div>  
            <div className={styles.tercer}>
                <label>
                    <span className={styles.subtitleForm}> EMAIL: </span>
                    <input className={styles.inputStyle} type="email" name="email"  required/>
                </label>
            </div>
            <div className={styles.cuarto}>
                <label>
                    <span className={styles.subtitleForm}> MENSAJE O CONSULTA:</span>
                    <textarea className={styles.inputStyleText} name="message" minlength="6" required/>
                </label>
            </div>
            <div className={styles.buttonFormBox}>
                <input  className={styles.buttonForm} type='submit' value="Enviar"/>
            </div>

          </div>
          <div>{result ? <Result /> : null}</div>
      </form>
      </div>
  </section>
    )
  }
