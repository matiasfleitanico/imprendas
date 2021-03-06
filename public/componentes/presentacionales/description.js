import styles from '../../../styles/Home.module.scss'
import Subtitle from '../parts/subtitle'
import Button from '../parts/button'
import Image1 from '../parts/image1'
import React, { Component } from 'react/cjs/react.production.min'
import Link from 'next/link'

  class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                visible:true
        }
    }

    handleClick= () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
      let myStyle = {
        display: "block",
        alignItems: "center",
        justifyItems: "center"
      }
      return       <section className={styles.Description}>
                 <Link  href="/galeria">
        <div className={styles.ContainerDescription1}> 
            <Image1 image="20.jpeg" />
        </div>
        </Link>
      <div className={styles.containerDescription2}>    
          <Subtitle text="Piletas de hormigón"/>
          <p>
          En estos 17 años de experiencia hemos podido realizar trabajos tanto para 
          particulares como para empresas, 
          con resultados óptimos, diseñados tal como lo desee nuestro cliente.
          <br/>
          <br />
          Brindamos compromiso y dedicación en cada trabajo, 
          escuchando las necesidades de cada cliente para poder lograr que realice una inversión de placer, 
          que durará para toda la vida.</p>
          <div className={styles.boxCenter}>        
            <Button link="galeria" text="Conoce más"/>
          </div>
      </div>
  </section>
    }
  }
  export  default Description
  