import styles from '../../../styles/Home.module.scss'
import React from 'react/cjs/react.production.min'
import { FaBars, FaTimes } from 'react-icons/fa';
import {slider} from './slider'
import Link from 'next/link'

  class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:true
        }
    };

    handleClick= () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        let myStyle = {
            backgroundColor: "#121212",
            color:"#e4e4e4",
            marginLeft:"10px", 
            marginTop:"13px",
        }
      return   <section>
      <div  className={styles.headerMobile}>
      {this.state.visible && (<FaBars size={23} style={myStyle} onClick={this.handleClick}/>)}
      {!this.state.visible && (<FaTimes size={23} style={myStyle} onClick={this.handleClick}/>)}
      </div>
    <nav className={styles.header}>
          <div className={styles.DivHeader}>          
          <Link href="/">
          <img className={styles.imageHeader} src="../../logo.png"></img>
          </Link></div>
          <Link href="/">
          <button className={styles.buttonHeader}>HOME</button>
          </Link>
          <Link href="/quienes">
          <button className={styles.buttonHeader}>QUIENES SOMOS</button>
          </Link>
          <Link href="/servicios">
          <button className={styles.buttonHeader}>SERVICIOS</button>
          </Link>
          <Link href="/galeria">
          <button className={styles.buttonHeader}>GALERIA</button>
          </Link>
          <Link href="/contacto">
          <button className={styles.buttonHeader}>CONTACTO</button>
          </Link>
          <div></div>
      </nav>
      <nav className={this.state.visible?'headerMobileOff':'headerMobileOn'}>
          <div></div>
          <Link href="/">
          <button className={styles.buttonHeader}>HOME</button>
          </Link>
          <Link href="/quienes">
          <button className={styles.buttonHeader}>QUIENES SOMOS</button>
          </Link>
          <Link href="/servicios">
          <button className={styles.buttonHeader}>SERVICIOS</button>
          </Link>
          <Link href="/galeria">
          <button className={styles.buttonHeader}>GALERIA</button>
          </Link>
          <Link href="/contacto">
          <button className={styles.buttonHeader}>CONTACTO</button>
          </Link>
          <div></div>
      </nav>
      </section>;
    }
  }
  export  default Header

