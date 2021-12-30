import GaleryImage from "../parts/galeryImage"
import styles from '../../../styles/Home.module.scss'
import { Component } from 'react/cjs/react.production.min';

  class GaleryMini extends Component {

    render() {
      return   <div>
          <div className={styles.Galeria}>
            <section id="galeria" className={styles.galeryMini}>
                <div className={styles.Border}/>
                    <GaleryImage image={this.props.image1}/>
                    <GaleryImage image={this.props.image2}/>
                    <GaleryImage image={this.props.image3}/>
                    <div className={styles.Border}/>
            </section>
          </div>
          </div>;
    }
  }
  export  default GaleryMini

