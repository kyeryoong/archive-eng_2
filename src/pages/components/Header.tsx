import { useState } from "react";

import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router"

import styles from "../../styles/Header.module.css";



export default function Header() {
    const router = useRouter();

    const [isClicked, setIsClicked] = useState<boolean>(false);

    return (
        <div>
            <div className={styles.headerContainer}>
                <Link href="/" onClick={() => setIsClicked(false)}>
                    <Image className={styles.titleIcon} src="/logo.png" alt="" width={40} height={40} />
                </Link>

                <Link href="/" onClick={() => setIsClicked(false)}>
                    <div className={styles.titleText}>
                        archive-eng
                    </div>
                </Link>

                <div />

                <Image className={styles.button} src="/arrow.png" alt="" width={40} height={40} onClick={() => setIsClicked((prev) => !prev)} style={isClicked ? { transform: "rotate(180deg)" } : {}} />
            </div>

            <div className={styles.background} style={isClicked ? { backgroundColor: "rgba(50, 50, 50, 0.9)", zIndex: 2 } : { backgroundColor: "rgba(0, 0, 0, 0)", zIndex: -1 }} />

            <div className={styles.menuContainer} style={isClicked ? { top: "0px" } : { top: "-100vh" }}>
                <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                    <Link href="/aboutme">
                        <div className={styles.menuElementsTop}>
                            [ ? ]
                        </div>

                        <div className={styles.menuElementsCenter}>
                            About Me
                        </div>

                        <div className={styles.menuElementsBottom}>
                            학력 및 경력
                        </div>
                    </Link>
                </div>

                <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                    <Link href="/achievements">
                        <div className={styles.menuElementsTop}>
                            ( ! )
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Achievements
                        </div>

                        <div className={styles.menuElementsBottom}>
                            수상 경력 및 자격증
                        </div>
                    </Link>
                </div>

                <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                    <Link href="/abilities">
                        <div className={styles.menuElementsTop}>
                            +×
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Abilities
                        </div>

                        <div className={styles.menuElementsBottom}>
                            기술 스택
                        </div>
                    </Link>
                </div>

                <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                    <Link href="/appsprojects">
                        <div className={styles.menuElementsTop}>
                            &lt;/&gt;
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Apps & Projects
                        </div>

                        <div className={styles.menuElementsBottom}>
                            프로젝트
                        </div>
                    </Link>
                </div>

                <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                    <Link href="/articles">
                        <div className={styles.menuElementsTop}>
                            &#47;**&#47;
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Articles
                        </div>

                        <div className={styles.menuElementsBottom}>
                            영자신문사 기사
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}