import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../public/componentes/presentacionales/header'
import Footer from '../public/componentes/presentacionales/footer'
import Description from '../public/componentes/presentacionales/description'
import Count from '../public/componentes/presentacionales/count'



export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
    <title>Sol y Piletas | Quienes somos</title>
    <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
    <link rel="icon" type="image/ico" sizes="16x16" href="/favicon-32.ico" />
    </Head>
      <Header/> 
      <div className={styles.spaceHeader} />
      <Description />
      <Count />
    <Footer />
    </div>
  )
}