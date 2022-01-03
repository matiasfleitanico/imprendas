import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../public/componentes/presentacionales/header'



export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
    <title>Sol y Piletas | Quienes somos</title>
    <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
    <link rel="icon" type="image/ico" sizes="16x16" href="/favicon-32.ico" />
    </Head>
      <Header/> 
    <h1>ESTO ES QUIENES SOMOS</h1>
    <h1>ESTO ES QUIENES SOMOS</h1>
    <h1>ESTO ES QUIENES SOMOS</h1>
    <h1>ESTO ES QUIENES SOMOS</h1>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrolado por{' '}
          <span className={styles.loego}>
            <Image src="/logo" alt="Making Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}