import Head from "next/head";
import type { AppProps } from "next/app";

import "./globals.css";

import { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ChannelService from "@/hooks/ChannelService";



export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        let darkLight: string | null = localStorage.getItem("darkLight");

        if (darkLight === null) {
            localStorage.setItem("darkLight", "dark");
        }
    }, [])


    useEffect(() => {
        const channelTalk = new ChannelService();

        channelTalk.boot({
            pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_ID
        });

        return () => {
            channelTalk.shutdown();
        };
    }, []);
   

    useEffect(() => {
        if (typeof window !== "undefined") {
            let myiFrame = document.getElementById("ch-plugin-script-iframe");
            console.log(myiFrame)
        }
    }, [])


    return (
        <div className="container">
            <Head>
                <title>archive-eng</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Component {...pageProps} />

            <Footer />
        </div>
    )
}
