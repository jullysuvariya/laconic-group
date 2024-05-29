import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode | ReactNode[] }) {
    return (
        <div className='flex flex-col min-h-full relative'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}