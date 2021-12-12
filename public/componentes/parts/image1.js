import styles from '../../../styles/Home.module.scss'

export default function Image1(props) {
    let myStyle = {
        backgroundImage: "url(../../img/"+ props.image + ".jpg)",
    };
    return (
    <section className={styles.image_1} style={myStyle}>
    </section>
    )
  }
  