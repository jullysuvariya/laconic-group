import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode | ReactNode[] }) {

    return (
        <div className='flex flex-col min-h-full relative'>
            <Header aboutUsURL={"/#about"} />
            <main>{children}</main>
            <Footer />
        </div>
    )
}