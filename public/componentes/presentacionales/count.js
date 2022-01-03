import styles from '../../../styles/Home.module.scss'
import React, { Component } from 'react/cjs/react.production.min';

class Count extends React.Component{
    state = { counter: 0 } 

    startCounter = () => {
      console.log('clicked')
      this.counterId = setInterval(() => {
        this.setState(({counter}) => ({counter: counter + 1 }))
      }, 100)
    }

    stopCounter = () => {
            clearInterval(this.counterId)
    }
    componentDidMount() {
      this.counterId = setInterval(() => {
        this.setState(({counter}) => ({counter: counter + 1 }))
      }, 100)
    }
    componentWillUnmount() {
      clearInterval(this.counterId)
    }

    render() {
        if(this.state.counter === 17 ){
            this.stopCounter()
        }
       let myTimeout = setTimeout(this.startCounter, 1000);
        clearTimeout(myTimeout);
      return   <section className={styles.Count}>
          <h1>{this.state.counter}</h1> 
          <h2>AÑOS DE EXPERIENCIA</h2>
          <h4>Somos una empresa que trabaja desde 2005 en la construcción, <br/>refacción y remodelación de piletas de hormigón.</h4>
        </section>;
    }
  }
  export  default Count
