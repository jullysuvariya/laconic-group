import Layout from '../components/layout'
import "./globals.css"
import 'keen-slider/keen-slider.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <Layout>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Component {...pageProps} />
        </Layout>
    )
}