import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../public/componentes/presentacionales/header'
import Slider from '../public/componentes/presentacionales/slider'
import Description from '../public/componentes/presentacionales/description'

export default function Home() {
  return (
  <div className={styles.container}>
      <Head>
        <title>Sol y Piletas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/> 
      <Slider />
      <h1>
        Bienvenidos a Sol y Piletas
      </h1>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
