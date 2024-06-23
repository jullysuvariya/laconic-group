import "./globals.css"
import 'keen-slider/keen-slider.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';
import LaconicBiowareLayout from "@/layout/LaconicBiowareLayout";
import LaconicCompanyLayout from "@/layout/LaconicCompanyLayout";
import { useEffect, useState } from "react";
import { TextShimmerDemo } from "@/components/splashScreen";

export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {

    const pathname = usePathname();

    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsAnimatingOut(true);
        }
    }, []);

    useEffect(() => {
        if (isAnimatingOut) {
            const loader = document.getElementById('globalLoader');
            if (loader) {
                loader.addEventListener('animationend', () => {
                    loader.remove();
                });
            }
        }
    }, [isAnimatingOut]);

    useEffect(() => {
        window.onload = function () {
            // Check if the URL contains a hash (e.g., #elementId)
            if (window.location.hash) {
                // Get the element specified in the URL hash
                var element = document.querySelector(window.location.hash);

                // Scroll to the element if it exists
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
    }, []);

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
        <>
            <div id="globalLoader" className={`fixed z-50 bg-primary-500 w-full h-screen ${isAnimatingOut && 'animate-slideout'}`}>
                <div className="w-full h-full bg-primary flex items-center justify-center animate-slidein">
                    <TextShimmerDemo />
                </div>
            </div>
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
        </>
    )
}