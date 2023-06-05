import { useEffect } from "react";
import { useRouter } from "next/router";

import ChannelService from "./ChannelService";


export default function useChannelTalk() {
    const router = useRouter();

    useEffect(() => {
        ChannelService.boot({
            pluginKey: "555ba57e-3671-4dae-a8b7-f42293945797"
        });
    }, [router]);
}