import styles from '../../../styles/Home.module.scss'
import React, { Component } from 'react/cjs/react.production.min';
import Link from 'next/dist/client/link';

class WhatsApp extends React.Component{
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
      return  <a href="https://api.whatsapp.com/send?phone=5491152610862&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20una%20piscina."  target="_blank" rel="noopener noreferrer"><div onMouseOver={this.handleClick} onMouseOut={this.handleClick} className={styles.whatsapp}>
        <img src="../../img/wpp.png" width="80" height="80"/>
        <h3 className={this.state.visible?'myStyleOff':'myStyleOn'}>¿Podemos ayudarlo?</h3>
        </div> 
        </a>;
    }
  }
  export  default WhatsApp
