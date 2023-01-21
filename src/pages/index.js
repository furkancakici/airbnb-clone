import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb Clone - Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <main className={inter.className}>
        <h2 className="text-3xl">Furkan Çakıcı</h2>
      </main>
    </>
  )
}
