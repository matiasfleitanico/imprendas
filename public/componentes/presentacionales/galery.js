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
            <GaleryImge image="1.jpeg"/>
            <GaleryImge image="2.jpeg"/>
            <GaleryImge image="3.jpeg"/>
            <GaleryImge image="4.jpeg"/>
            <GaleryImge image="5.jpeg"/>
            <GaleryImge image="6.jpeg"/>
            <GaleryImge image="7.jpeg"/>
            <GaleryImge image="8.jpeg"/>
            <GaleryImge image="9.jpeg"/>
            <GaleryImge image="10.jpeg"/>
            <GaleryImge image="11.jpeg"/>
            <GaleryImge image="12.jpeg"/>
            <GaleryImge image="13.jpeg"/>
            <GaleryImge image="14.jpeg"/>
            <GaleryImge image="15.jpeg"/>
            <GaleryImge image="16.jpeg"/>
            <GaleryImge image="17.jpeg"/>
            <GaleryImge image="18.jpeg"/>
            <GaleryImge image="19.jpeg"/>
            <GaleryImge image="20.jpeg"/>
            <GaleryImge image="21.jpeg"/>
            <GaleryImge image="22.jpeg"/>
            <GaleryImge image="23.jpeg"/>
            <GaleryImge image="24.jpeg"/>
            <GaleryImge image="25.jpeg"/>
            <GaleryImge image="26.jpeg"/>
            <GaleryImge image="27.jpeg"/>
            <GaleryImge image="28.jpeg"/>
            <GaleryImge image="29.jpeg"/>
            <GaleryImge image="30.jpeg"/>
            <GaleryImge image="31.jpeg"/>
            <GaleryImge image="32.jpeg"/>
            <GaleryImge image="33.jpeg"/>
            <GaleryImge image="34.jpeg"/>
            <GaleryImge image="35.jpeg"/>
            <GaleryImge image="36.jpeg"/>
            <GaleryImge image="37.jpeg"/>
            <GaleryImge image="38.jpeg"/>
            <GaleryImge image="39.jpeg"/>
            <GaleryImge image="40.jpeg"/>
            <GaleryImge image="41.jpeg"/>
            <GaleryImge image="42.jpeg"/>
            <GaleryImge image="43.jpeg"/>
            <GaleryImge image="44.jpeg"/>
            <GaleryImge image="45.jpeg"/>
            <GaleryImge image="46.jpeg"/>
            <GaleryImge image="47.jpeg"/>
            <GaleryImge image="48.jpeg"/>
            <GaleryImge image="49.jpeg"/>
            <GaleryImge image="50.jpeg"/>
            <GaleryImge image="51.jpeg"/>
            <GaleryImge image="52.jpeg"/>
            <GaleryImge image="53.jpeg"/>
            <GaleryImge image="54.jpeg"/>
            <GaleryImge image="55.jpeg"/>
            <GaleryImge image="56.jpeg"/>
            <GaleryImge image="57.jpeg"/>
            <GaleryImge image="58.jpeg"/>
            <GaleryImge image="59.jpeg"/>
            <GaleryImge image="60.jpeg"/>
            <GaleryImge image="61.jpeg"/>
            <GaleryImge image="62.jpeg"/>
            <GaleryImge image="63.jpeg"/>

            </section>;
    }
  }
  export  default Galery

