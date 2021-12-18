import styles from '../../../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faCog, faPen } from '@fortawesome/free-solid-svg-icons'

export default function Service() {
    return (
        <section className={styles.service}>
            <h1 className={styles.subtitle2}>¿QUÉ HACEMOS?</h1>
            <div className={styles.containerService}>
                <div className={styles.circle}>
                    <div className={styles.markFont}>
                        <FontAwesomeIcon icon={faHammer} />
                        <div className={styles.containerSub}>
                            <h5>CONSTRUCCIÓN</h5>
                        </div>
                        <div className={styles.containerSub}>
                            <p>Realizamos la pileta de tus sueños, 
                            teniendo cada detalle que el cliente desee para un buen final de obra.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerService}>
                <div className={styles.circle}>
                    <div className={styles.markFont}>
                        <FontAwesomeIcon icon={faPen} />
                        <div className={styles.containerSub}>
                            <h5>REVESTIMIENTO</h5>
                        </div>
                        <div className={styles.containerSub}>
                            <p>Ofrecemos una alta variedad de diseños para un 
                            revestimiento en venecitas de la mejor calidad.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerService}>
                <div className={styles.circle}>
                    <div className={styles.markFont}>
                        <FontAwesomeIcon icon={faCog} />
                        <div className={styles.containerSub}>
                            <h5>REFACCIÓN</h5>
                        </div>
                        <div className={styles.containerSub}>
                            <p>Brindamos servicios de refacción, 
                            ofreciendo soluciones de piletas ya 
                            construidas con detalles a arreglar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  