import styles from '../../../styles/Home.module.scss'

export default function Image1(props) {
    let myStyle = {
        backgroundImage: "url(../../img/"+ props.image + ")",
        backgroundSize: "cover",
        backgroundPosition: "center 10%",
        backgroundRepeat: "no-repeat",    
    };
    return (
    <section className={styles.image_1} style={myStyle}>
    </section>
    )
  }
  