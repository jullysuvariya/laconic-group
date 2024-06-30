import { ReactNode, useEffect, useState } from 'react'
// import { TextShimmerDemo } from './splashScreen';
import BiowareHeader from '@/components/BiowareHeader';
import BiowareFooter from '@/components/BiowareFooter';

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
            console.log("window loaded");
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
        // <>
        //     <div id="globalLoader" className={`fixed z-50 bg-primary-500 w-screen h-screen ${isAnimatingOut && 'animate-slideout'}`}>
        //         <div className="w-full h-full bg-primary flex items-center justify-center animate-slidein">
        //             <TextShimmerDemo />
        //         </div>
        //     </div>
            <div className='flex flex-col min-h-full relative'>
                <BiowareHeader/>
                <main>{children}</main>
                <BiowareFooter />
            </div>
        // </>
    )
}