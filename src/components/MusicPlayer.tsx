import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import styles from "./MusicPlayer.module.css";



export default function MusicPlayer() {
    const [musicIndex, setMusicIndex] = useState<number>(0);
    const [musicIsPlaying, setMusicIsPlaying] = useState<boolean>(false);

    let musicRef = useRef<any>();

    useEffect(() => {
        musicRef.current.volume = 0.05;
        musicRef.current.play()
    }, [])

    interface MusicListProps {
        artist: string,
        title: string
    }

    const musicList: MusicListProps[] = [
        {
            artist: "prima",
            title: "autumn leaves"
        },
        {
            artist: "nawhij",
            title: "iwantmoretimewithyou"
        },
        {
            artist: "nawhij",
            title: "mood"
        }
    ]



    return (
        <div className={styles.musicWrapper}>
            <audio
                autoPlay
                src={`/music/${musicIndex}.mp3`}
                ref={musicRef}
                onEnded={() => setMusicIndex((prev: number) => (prev + 1) % musicList.length)}
            />

            <div className={styles.albumArt}>
                <Image
                    src={`/music/${musicIndex}.jpg`} alt=""
                    width={90} height={90}
                    className={musicIsPlaying ? styles.albumArtPlay : styles.albumArtPause}
                />

                <div className={styles.albumArtCenter} />
            </div>

            <div className={styles.musicPlayer}>
                <div className={styles.musicTitle}>
                    {musicList[musicIndex].title}
                </div>

                <div className={styles.musicArtist}>
                    {musicList[musicIndex].artist}
                </div>

                <div className={styles.musicController}>
                    <Image
                        src="/music/minus.png" alt=""
                        width={12} height={12}
                        className={styles.musicIcon}
                        onClick={() => {
                            if (musicRef.current.volume >= 0.05) {
                                musicRef.current.volume -= 0.05;
                            }
                        }}
                    />

                    <Image
                        src="/music/previous.png" alt=""
                        width={12} height={12}
                        className={styles.musicIcon}
                        onClick={() => {
                            if (musicIndex === 0) { setMusicIndex(musicList.length - 1); }
                            else { setMusicIndex((prev: number) => prev - 1); }
                            setMusicIsPlaying(true);
                        }}
                    />

                    <Image
                        src={musicIsPlaying ? "/music/pause.png" : "/music/play.png"} alt=""
                        width={16} height={16}
                        className={styles.musicIcon}
                        onClick={() => {
                            if (musicIsPlaying) {
                                musicRef.current.pause();
                                setMusicIsPlaying(false);
                            }
                            else {
                                musicRef.current.play();
                                setMusicIsPlaying(true);
                            }
                        }}
                    />

                    <Image
                        src="/music/next.png" alt=""
                        width={12} height={12}
                        className={styles.musicIcon}
                        onClick={() => {
                            if (musicIndex === musicList.length - 1) { setMusicIndex(0); }
                            else { setMusicIndex((prev: number) => prev + 1); }
                            setMusicIsPlaying(true);
                        }}
                    />

                    <Image
                        src="/music/plus.png" alt=""
                        width={12} height={12}
                        className={styles.musicIcon}
                        onClick={() => {
                            if (musicRef.current.volume <= 0.95) { musicRef.current.volume += 0.05; }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}