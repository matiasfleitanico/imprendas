import styles from '../../../styles/Home.module.scss'

export default function Button(props) {
    return (
    <button className={styles.button}>
        {props.text}
    </button>
    )
  }
  