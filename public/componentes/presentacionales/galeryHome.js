import GaleryMini from './galeryMini';
import styles from '../../../styles/Home.module.scss'
import React, { Component } from 'react/cjs/react.production.min';
import Button from '../parts/button';
import Subtitle from '../parts/subtitle';
import GaleryImage from "../parts/galeryImage"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link'


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
                <GaleryMini  image1="gal_25.jpeg" image2="gal_66.jpeg" image3="gal_65.jpeg"/>
            </div>
            <div className="minBox"></div>
            <div className={this.state.visible?'no-active':'galeryHome'}>
                <GaleryMini  image1="gal_42.jpeg" image2="gal_67.jpeg" image3="gal_41.jpeg"/>
            </div>
            </div> 
            <div className={this.state.visible?'arrow-right':'arrow-right-off'}>
            <FaChevronRight onClick={this.handleClick}/>
            </div>  
            <div className={this.state.visible?'arrow-left-off':'arrow-left'}>
            <FaChevronLeft onClick={this.handleClick}/>
            </div> 
            <div className={styles.GaleryOff}>
                    <GaleryImage image='slider1'/>
            </div> 
            <div className={styles.boxCenter}>
            <Link href="/galeria">
                <Button link="galeria" text="Ver más"/>
            </Link>
            </div>   
            </section>;
    }
  }
  export  default GaleryHome

