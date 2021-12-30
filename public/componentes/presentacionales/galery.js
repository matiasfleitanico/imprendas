import GaleryImge from '../parts/galeryImage';
import styles from '../../../styles/Home.module.scss'
import React, { Component } from 'react/cjs/react.production.min';



class Galery extends React.Component {
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
      return   <section className={styles.galerys}>
            <GaleryImge image="gal_01.jpeg"/>
            <GaleryImge image="gal_02.jpeg"/>
            <GaleryImge image="gal_03.jpeg"/>
            <GaleryImge image="gal_04.jpeg"/>
            <GaleryImge image="gal_05.jpeg"/>
            <GaleryImge image="gal_06.jpeg"/>
            <GaleryImge image="gal_07.jpeg"/>
            <GaleryImge image="gal_08.jpeg"/>
            <GaleryImge image="gal_09.jpeg"/>
            <GaleryImge image="gal_10.jpeg"/>
            <GaleryImge image="gal_11.jpeg"/>
            <GaleryImge image="gal_12.jpeg"/>
            <GaleryImge image="gal_13.jpeg"/>
            <GaleryImge image="gal_14.jpeg"/>
            <GaleryImge image="gal_15.jpeg"/>
            <GaleryImge image="gal_16.jpeg"/>
            <GaleryImge image="gal_17.jpeg"/>
            <GaleryImge image="gal_18.jpeg"/>
            <GaleryImge image="gal_19.jpeg"/>
            <GaleryImge image="gal_20.jpeg"/>
            <GaleryImge image="gal_21.jpeg"/>
            <GaleryImge image="gal_22.jpeg"/>
            <GaleryImge image="gal_23.jpeg"/>
            <GaleryImge image="gal_24.jpeg"/>
            <GaleryImge image="gal_25.jpeg"/>
            <GaleryImge image="gal_26.jpeg"/>
            <GaleryImge image="gal_27.jpeg"/>
            <GaleryImge image="gal_28.jpeg"/>
            <GaleryImge image="gal_29.jpeg"/>
            <GaleryImge image="gal_30.jpeg"/>
            <GaleryImge image="gal_31.jpeg"/>
            <GaleryImge image="gal_32.jpeg"/>
            <GaleryImge image="gal_33.jpeg"/>
            <GaleryImge image="gal_34.jpeg"/>
            <GaleryImge image="gal_35.jpeg"/>
            <GaleryImge image="gal_36.jpeg"/>
            <GaleryImge image="gal_37.jpeg"/>
            <GaleryImge image="gal_38.jpeg"/>
            <GaleryImge image="gal_39.jpeg"/>
            <GaleryImge image="gal_40.jpeg"/>
            <GaleryImge image="gal_41.jpeg"/>
            <GaleryImge image="gal_42.jpeg"/>
            <GaleryImge image="gal_43.jpeg"/>
            <GaleryImge image="gal_44.jpeg"/>
            <GaleryImge image="gal_45.jpeg"/>
            <GaleryImge image="gal_46.jpeg"/>
            <GaleryImge image="gal_47.jpeg"/>
            <GaleryImge image="gal_48.jpeg"/>
            <GaleryImge image="gal_49.jpeg"/>
            <GaleryImge image="gal_50.jpeg"/>
            <GaleryImge image="gal_51.jpeg"/>
            <GaleryImge image="gal_52.jpeg"/>
            <GaleryImge image="gal_53.jpeg"/>
            <GaleryImge image="gal_54.jpeg"/>
            <GaleryImge image="gal_55.jpeg"/>
            <GaleryImge image="gal_56.jpeg"/>
            <GaleryImge image="gal_57.jpeg"/>
            <GaleryImge image="gal_58.jpeg"/>
            <GaleryImge image="gal_59.jpeg"/>
            <GaleryImge image="gal_60.jpeg"/>
            <GaleryImge image="gal_61.jpeg"/>
            <GaleryImge image="gal_62.jpeg"/>
            <GaleryImge image="gal_63.jpeg"/>

            </section>;
    }
  }
  export  default Galery

