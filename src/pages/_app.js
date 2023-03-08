import NextNProgress from 'nextjs-progressbar'
import Layout from '@/containers/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <NextNProgress color='#FE595E' height={4} />
            <Component {...pageProps} />
        </Layout>
    )
}
