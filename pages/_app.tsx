import Layout from '../components/layout'
import "./globals.css"
import 'keen-slider/keen-slider.min.css'

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}