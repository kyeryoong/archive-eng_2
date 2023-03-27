import Head from 'next/head'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import Header from './components/Header'



export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <title>archive-eng</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Component {...pageProps} />
        </div>
    )
}
