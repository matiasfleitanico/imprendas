import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../public/componentes/presentacionales/header'
import Slider from '../public/componentes/presentacionales/slider'
import Description from '../public/componentes/presentacionales/description'
import Separator from '../public/componentes/parts/separator'
import Service from '../public/componentes/presentacionales/service'
import Form from '../public/componentes/presentacionales/form'


export default function Home() {
  return (
  <div className={styles.container}>
      <Head>
        <title>Sol y Piletas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/> 
      <Slider />
      <Separator />
      <Description />
      <Separator />
      <Service />
      <Form />

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
// mongodb+srv://making:<password>@first.7ydvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityb