import GaleryMini from './galeryMini';
import styles from '../../../styles/Home.module.scss'
import React, { Component } from 'react/cjs/react.production.min';
import { faChevronLeft, faChevronRight, faHammer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../parts/button';
import Subtitle from '../parts/subtitle';


class GaleryHome extends React.Component {
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
      return   <section className={styles.galeryHome}>
            <div className={styles.boxCenter}>
                <Subtitle text="Algunos de nuestros trabajos" />
            </div >  
            <div className="container">
            <div className={this.state.visible?'galeryHome':'active'}>
                <GaleryMini  image1="slider1" image2="slider2" image3="slider1"/>
            </div>
            <div className="minBox"></div>
            <div className={this.state.visible?'no-active':'galeryHome'}>
                <GaleryMini  image1="slider1" image2="slider2" image3="slider1"/>
            </div>
            </div>  
            <div className={this.state.visible?'arrow-right':'arrow-right-off'}>
            <FontAwesomeIcon onClick={this.handleClick} icon={faChevronRight} />
            </div>  
            <div className={this.state.visible?'arrow-left-off':'arrow-left'}>
            <FontAwesomeIcon onClick={this.handleClick} icon={faChevronLeft} />
            </div> 
            <div className={styles.boxCenter}>
                <Button text="Ver más"/>
            </div>    
            </section>;
    }
  }
  export  default GaleryHome

