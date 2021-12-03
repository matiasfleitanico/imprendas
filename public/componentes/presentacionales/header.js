import styles from '../../../styles/Home.module.scss'

export default function Header() {
    return (
    <nav className={styles.header}>
        <button class="home">HOME</button>
        <button class="us">QUIENES SOMOS</button>
        <button class="service">SERVICIOS</button>
        <button class="galery">GALERIA</button>
        <button class="contact">CONTACTO</button>
    </nav>
    )
  }
  