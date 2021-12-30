import styles from '../../../styles/Home.module.scss'
import React from 'react/cjs/react.production.min'

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
      return   <section>
      <div  className={styles.headerMobile}>
      {this.state.visible && (<button className={styles.buttonMenu} onClick={this.handleClick}>E</button>)}
      {!this.state.visible && (<button className={styles.buttonMenu} onClick={this.handleClick}>X</button>)}
      </div>
    <nav className={styles.header}>
          <div></div>
          <button className={styles.buttonHeader}>HOME</button>
          <button className={styles.buttonHeader}>QUIENES SOMOS</button>
          <button className={styles.buttonHeader}>SERVICIOS</button>
          <button className={styles.buttonHeader}>GALERIA</button>
          <button className={styles.buttonHeader}>CONTACTO</button>
          <div></div>
      </nav>
      <nav className={this.state.visible?'headerMobileOff':'headerMobileOn'}>
          <div></div>
          <button className={styles.buttonHeader}>HOME</button>
          <button className={styles.buttonHeader}>QUIENES SOMOS</button>
          <button className={styles.buttonHeader}>SERVICIOS</button>
          <button className={styles.buttonHeader}>GALERIA</button>
          <button className={styles.buttonHeader}>CONTACTO</button>
          <div></div>
      </nav>
      </section>;
    }
  }
  export  default Header

