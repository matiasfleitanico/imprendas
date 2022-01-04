import styles from '../../../styles/Home.module.scss'
import React from 'react/cjs/react.production.min';
import { FaTimes } from 'react-icons/fa';


  class GaleryImge extends React.Component {
    constructor(props) {
        super(props)
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
        let myImage = this.props.image;
        let myStyle1 ={
            display: "none",
            }
        let myStyle2 ={
            backgroundImage: "url(../../img/"+ myImage +")",
            width: '56%',
            height: '68%',
            backgroundSize: "cover",
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            position: "fixed",
            top: '20%',
            rigth: '0px',
            left: '20%',
            zIndex:'30'
            }
        let myStyle = {
            backgroundImage: "url(../../img/"+ myImage +")",
            width: '250px',
            height: '250px',
            backgroundSize: "cover",
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            transition: "all 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            display: "flex",
            flexWrap: "nowrap",
            overflow: "hidden",
            cursor: "pointer"
            };
        let myBack = {
            backgroundColor: 'black',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            rigth: '0px',
            opacity: '0.8',
            position: 'fixed',
            zIndex: '20',
        };
        let icon = {
            color: 'grey',
            width: '20px',
            marginLeft: '110%',
            marginTop: '-10%',
            cursor: 'pointer'
        }
      return <div>
        <section  onClick={this.handleClick}  className={styles.galeryImage}>
            <div style={myStyle}>
            </div>
        </section>
        <section>
            <div   onClick={this.handleClick} style={this.state.visible ? myStyle1 : myBack}></div>
                <div  style={this.state.visible ? myStyle1 : myStyle2} className={styles.imageBigMobile}>
                <FaTimes size={60} style={icon} onClick={this.handleClick}/>
                </div> 
        </section>
            </div>
    }
  }

  export  default GaleryImge

