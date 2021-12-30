import React from 'react/cjs/react.production.min'
import styles from '../../../styles/Home.module.scss'
import { FaWrench, FaPencilAlt, FaCog } from 'react-icons/fa';


  class Service extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible:true
        }
    }

    render() {
        let myStyle ={
            alignSelf:"center",
            justifySelf:"center",
            color: "#121212"
            }
 
        return <div className={styles.Services}>
    <h1 className={styles.Title}>¿QUÉ HACEMOS?</h1>
    <div className={styles.Border}/>
    <div className={styles.Cont1}>
    <div className={styles.ContainerService}>
          <div className={styles.Circle}>
            <FaWrench style={myStyle} size={60}/>
          </div>
          <div className={styles.Div}>
          <div className={styles.ContainerSub}>
                <h3 className={styles.SubtitleService}>CONSTRUCCIÓN</h3>
          </div>
          <div className={styles.ContainerSub}>
              <p className={styles.ParrafoService}> Realizamos la pileta de tus sueños, 
              teniendo cada detalle que el cliente desee para un buen final de obra.</p>
          </div>
          </div>

    </div>
    </div>
    <div className={styles.Cont2}>
    <div className={styles.ContainerService}>
    <div className={styles.Circle}>
            <FaPencilAlt style={myStyle} size={60}/>
          </div>
          <div className={styles.Div}>
              <div className={styles.ContainerSub}>
                <h3 className={styles.SubtitleService}>REVESTIMIENTO</h3>
                </div>
                <div className={styles.ContainerSub}>
                  <p className={styles.ParrafoService}> Ofrecemos una alta variedad de diseños para un 
                    revestimiento en venecitas de la mejor calidad.</p>
                </div>
          </div>
    </div>
    </div>
    <div className={styles.Cont3}>
    <div className={styles.ContainerService}>
          <div className={styles.Circle}>
            <FaCog style={myStyle} size={60}/>
          </div>
          <div className={styles.Div}>
          <div className={styles.ContainerSub}>
                <h3 className={styles.SubtitleService}>REFACCIÓN</h3>
          </div>
          <div className={styles.ContainerSub}>
              <p className={styles.ParrafoService}> Brindamos servicios de refacción, 
                  ofreciendo soluciones de piletas ya 
                  construidas con detalles a arreglar.</p>
          </div>
          </div>

    </div>
    </div>
    <div className={styles.Border1} />
</div>
    }
}
export  default Service