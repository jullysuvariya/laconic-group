import "./globals.css"
import 'keen-slider/keen-slider.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';
import LaconicBiowareLayout from "@/layout/LaconicBiowareLayout";
import LaconicCompanyLayout from "@/layout/LaconicCompanyLayout";

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {

    const pathname = usePathname();
    if (pathname?.startsWith('/bioware/')) {
        return (
            <LaconicBiowareLayout>
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
            </LaconicBiowareLayout>
        )
    }
    return (
        <LaconicCompanyLayout>
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
        </LaconicCompanyLayout>
    )
}