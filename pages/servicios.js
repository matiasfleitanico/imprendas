import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../public/componentes/presentacionales/header'
import Footer from '../public/componentes/presentacionales/footer'
import Service from '../public/componentes/presentacionales/service'
import GaleryHome from '../public/componentes/presentacionales/galeryHome'



export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
    <title>Sol y Piletas | Servicios</title>
    <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
    <link rel="icon" type="image/ico" sizes="16x16" href="/favicon-32.ico" />
    </Head>
      <Header/> 
      <div className={styles.spaceHeader}/>
      <Service />
      <GaleryHome />
    <Footer />
    </div>
  )
}