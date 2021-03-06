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
                <GaleryMini  image1="25.jpeg" image2="67.jpeg" image3="42.jpeg"/>
            </div>
            <div className="minBox"></div>
            <div className={this.state.visible?'no-active':'galeryHome'}>
                <GaleryMini  image1="21.jpeg" image2="68.jpeg" image3="41.jpeg"/>   
            </div>
            </div> 
            <div className={styles.off800}>
            <div className={this.state.visible?'arrow-right':'arrow-right-off'}>
            <FaChevronRight size={38} onClick={this.handleClick}/>
            </div>  
            <div className={this.state.visible?'arrow-left-off':'arrow-left'}>
            <FaChevronLeft size={38} onClick={this.handleClick}/>
            </div> 
            </div>
            <div className={styles.GaleryOff}>
                    <GaleryImage image="25.jpeg"/>
                    <GaleryImage image="67.jpeg"/>
                    <GaleryImage image="42.jpeg"/>
                    <GaleryImage image="21.jpeg"/>
            </div> 
            <div className={styles.boxCenter}>
                <section>
            <Link href="/galeria">
                <Button link="galeria" text="Ver m??s"/>
            </Link>
            </section>
            </div>   
            </section>;
    }
  }
  export  default GaleryHome

