import { useState, useEffect, useRef } from "react";

import Link from "next/link"
import Image from "next/image";

import { Audio } from "react-loader-spinner";

import styles from "./Header.module.css";



export default function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [menuIndex, setMenuIndex] = useState<number>(-1);
    const menuRef = useRef<any>();


    const TOTAL_MUSICS: number = 3;
    const [musicIndex, setMusicIndex] = useState<number>(0);
    const [musicIsPlaying, setMusicIsPlaying] = useState<boolean>(false);
    const [musicVolume, setMusicVolume] = useState<number>(1);

    let musicRef = useRef<any>();

    useEffect(() => {
        musicRef.current.volume = 0.05;
        musicRef.current.play()
    }, [])

    const musicList: string[] = [
        "PeriTune - Piano Melancholy3",
        "WHAT Pictures - Sideways Samba",
        "PeriTune - PianoRefreshing"
    ]



    return (
        <div>
            <div className={styles.container}>
                <Link href="/" onClick={() => setShowMenu(false)}>
                    <Image className={styles.titleIcon} src="/logo_white.png" alt="" width={40} height={40} />
                </Link>

                <Link href="/" onClick={() => setShowMenu(false)}>
                    <div className={styles.titleText}>
                        archive-eng
                    </div>
                </Link>
            </div>

            <div
                className={styles.menuButton}
                style={showMenu ? { right: "min(40px, 5vw)" } : {}}
                onClick={() => {
                    setShowMenu((prev: boolean) => !prev);
                }}
            >
                <div className={showMenu ? styles.menuButtonClicked : styles.menuButtonNotClicked} />
                <span />
                <span />
                <span />
            </div>

            <div
                className={showMenu ? styles.backgroundShow : styles.backgroundHide}
                onClick={(event: any) => {
                    if (event.target !== menuRef.current) {
                        setShowMenu(false);

                    }
                }}
            />

            <div className={showMenu ? styles.menuShow : styles.menuHide} ref={menuRef}>
                <Link
                    href="/"
                    className={styles.menuElements}
                    onClick={() => setShowMenu(false)}
                    onMouseEnter={() => setMenuIndex(0)}
                    onMouseLeave={() => setMenuIndex(-1)}
                >
                    <div className={menuIndex === 0 ? styles.arrowShow : styles.arrowHide}>{menuIndex === 0 ? ">" : ""}</div>
                    Home
                </Link>

                <Link
                    href="/profile"
                    className={styles.menuElements}
                    onClick={() => setShowMenu(false)}
                    onMouseEnter={() => setMenuIndex(1)}
                    onMouseLeave={() => setMenuIndex(-1)}
                >
                    <div className={menuIndex === 1 ? styles.arrowShow : styles.arrowHide}>{menuIndex === 1 ? ">" : ""}</div>
                    Profile
                </Link>

                <Link
                    href="/achievements"
                    className={styles.menuElements}
                    onClick={() => setShowMenu(false)}
                    onMouseEnter={() => setMenuIndex(2)}
                    onMouseLeave={() => setMenuIndex(-1)}
                >
                    <div className={menuIndex === 2 ? styles.arrowShow : styles.arrowHide}>{menuIndex === 2 ? ">" : ""}</div>
                    Achievements
                </Link>

                <Link
                    href="/skills"
                    className={styles.menuElements}
                    onClick={() => setShowMenu(false)}
                    onMouseEnter={() => setMenuIndex(3)}
                    onMouseLeave={() => setMenuIndex(-1)}
                >
                    <div className={menuIndex === 3 ? styles.arrowShow : styles.arrowHide}>{menuIndex === 3 ? ">" : ""}</div>
                    Skills
                </Link>

                <Link
                    href="/projects"
                    className={styles.menuElements}
                    onClick={() => setShowMenu(false)}
                    onMouseEnter={() => setMenuIndex(4)}
                    onMouseLeave={() => setMenuIndex(-1)}
                >
                    <div className={menuIndex === 4 ? styles.arrowShow : styles.arrowHide}>{menuIndex === 4 ? ">" : ""}</div>
                    Projects
                </Link>

                <Link
                    href="/articles"
                    className={styles.menuElements}
                    onClick={() => setShowMenu(false)}
                    onMouseEnter={() => setMenuIndex(5)}
                    onMouseLeave={() => setMenuIndex(-1)}
                >
                    <div className={menuIndex === 5 ? styles.arrowShow : styles.arrowHide}>{menuIndex === 5 ? ">" : ""}</div>
                    Articles
                </Link>



                <div className={styles.musicWrapper}>
                    <audio
                        autoPlay
                        src={`/music/${musicIndex}.mp3`}
                        ref={musicRef}
                        onEnded={() => setMusicIndex((prev: number) => (prev + 1) % TOTAL_MUSICS)}
                    />

                    <Image
                        src={`/music/${musicIndex}.jpg`} alt=""
                        width={85} height={85}
                        className={musicIsPlaying ? styles.albumArtPlay : styles.albumArtPause}
                    />

                    <div className={styles.musicPlayer}>
                        <div className={styles.musicIndex}>
                            {musicList[musicIndex]}
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
                                    if (musicIndex === 0) { setMusicIndex(TOTAL_MUSICS - 1); }
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
                                    if (musicIndex === TOTAL_MUSICS - 1) { setMusicIndex(0); }
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
            </div>
        </div>
    )
}