import styles from '../../../styles/Home.module.scss'

export default function Slider() {

    return (
    <section>
        <div className={styles.slider}></div>
        <img src="../../img/logo.png" className={styles.imgSlider}/>
    </section>
    )
  }