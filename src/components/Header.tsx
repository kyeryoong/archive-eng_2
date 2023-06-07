import { useState, useRef } from "react";

import Link from "next/link"
import Image from "next/image";
import MusicPlayer from "./MusicPlayer";

import styles from "./Header.module.css";



export default function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [menuIndex, setMenuIndex] = useState<number>(-1);
    const menuRef = useRef<any>();


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

                <MusicPlayer />
            </div>
        </div>
    )
}