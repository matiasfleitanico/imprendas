import styles from '../../../styles/Home.module.scss'

export default function Subtitle(props) {
    return (
    <section className={styles.subtitle}>
        <h3>{props.text}</h3>
    </section>
    )
  }
  