import styles from '../../../styles/Home.module.scss'
import Link from 'next/link'
import React from 'react/cjs/react.production.min'


  class Button extends React.Component {
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
      return <section>         
      <Link href={"/"+this.props.link}>
          <button className={styles.button}>
              {this.props.text}
          </button>
      </Link>
      </section>  
    }
  }
  export  default Button
  