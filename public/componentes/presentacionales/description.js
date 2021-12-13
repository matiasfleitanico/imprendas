import styles from '../../../styles/Home.module.scss'
import Subtitle from '../parts/subtitle'
import Button from '../parts/button'
import { text } from '../parts/subtitle'
import Image1 from '../parts/image1'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'

export default function Description() {
    return (
    <section className={styles.description}>
        <div className={styles.containerDescription1}> 
        <Image1 image="slider2" />
        </div>
        <div className={styles.containerDescription2}>    
            <Subtitle text="Piletas de hormigón"/>
            <p>Somos una empresa familiar que trabaja desde el 2005 en la construcción, 
            refacción y remodelación de piletas de hormigón.<br/>
            En estos 16 años de experiencia hemos podido realizar trabajos tanto para 
            particulares como para empresas, 
            con resultados óptimos, diseñados tal como lo desee nuestro cliente.
            <br/>
            <br />
            Brindamos compromiso y dedicación en cada trabajo, 
            escuchando las necesidades de cada cliente para poder lograr que realice una inversión de placer, 
            que durará para toda la vida.</p>
            <Button text="Conoce más"/>
        </div>
    </section>
    )
  }
  