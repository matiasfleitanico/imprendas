import styles from '../../../styles/Home.module.scss'

export default function Slider() {
    let myStyle = {
        position:"absolute",
        top: "35%",
        width: "380px",
        left: "37%"
    }
    
    return (
    <section>
        <div className={styles.slider}></div>
        <img src="../../img/logo.png" style={myStyle}/>
    </section>
    )
  }