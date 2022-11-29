import type { NextPage } from 'next'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo.svg" as="image" />
            </Head>
            <Navbar />
            <main className="flex flex-col max-w-3xl container mx-auto px-2 py-6 h-full w-full">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout