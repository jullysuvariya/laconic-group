import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { TextShimmerDemo } from '@/components/splashScreen';
import { ReactNode, useEffect, useState } from 'react'

export default function Layout({ children }: { children: ReactNode | ReactNode[] }) {

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

    return (
        <>
            <div id="globalLoader" className={`fixed z-50 bg-primary-500 w-full h-screen ${isAnimatingOut && 'animate-slideout'}`}>
                <div className="w-full h-full bg-primary flex items-center justify-center animate-slidein">
                    <TextShimmerDemo />
                </div>
            </div>
            <div className='flex flex-col min-h-full relative'>
                <Header aboutUsURL={"/#about"}/>
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}