import styles from '../../../styles/Home.module.scss'
import Subtitle from '../parts/subtitle'
import Button from '../parts/button'
import Image1 from '../parts/image1'

export default function Service() {
    return (
        <section className={styles.service}>
            <div className={styles.containerService1}>    
            <Subtitle text="¿Qué hacemos?"/>
                <p>
                1. Construcción: Realizamos la pileta de tus sueños, teniendo cada detalle que el cliente desee para un buen final de obra.
                <br/>
                2. Revestimiento: Ofrecemos una alta variedad de diseños para un revestimiento en venecitas de la mejor calidad.
                <br/>
                3. Refacción: Brindamos servicios de refacción, ofreciendo soluciones de piletas ya construidas con detalles a arreglar.
                </p>
            <Button text="Conoce más"/>
            </div>
        <div className={styles.containerService2}> 
        <Image1 image="slider1" />
        </div>
    </section>
    )
  }
  