import { useState } from "react";

import Link from "next/link"
import Image from "next/image";

import styles from "../../styles/Header.module.css";



export default function Header() {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    console.log(isClicked)

    return (
        <div>
            <div className={styles.container}>
                <Link href="/" onClick={() => setIsClicked(false)}>
                    <Image className={styles.titleIcon} src="/logo_white.png" alt="" width={40} height={40} />
                </Link>

                <Link href="/" onClick={() => setIsClicked(false)}>
                    <div className={styles.titleText}>
                        archive-eng
                    </div>
                </Link>

                <div className={styles.button} onClick={() => setIsClicked((prev: boolean) => !prev)}>
                    <div className={isClicked ? styles.buttonClicked : styles.buttonNotClicked} />
                    <span />
                    <span />
                    <span />
                </div>
            </div>


            <div className={isClicked ? styles.menuContainerClicked : styles.menuContainerNotClicked}>
                <Link href="/profile">
                    <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                        <div className={styles.menuElementsTop}>
                            [ ? ]
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Profile
                        </div>

                        <div className={styles.menuElementsBottom}>
                            학력 및 경력
                        </div>
                    </div>
                </Link>

                <Link href="/achievements">
                    <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                        <div className={styles.menuElementsTop}>
                            ( ! )
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Achievements
                        </div>

                        <div className={styles.menuElementsBottom}>
                            수상 및 활동
                        </div>
                    </div>
                </Link>

                <Link href="/skills">
                    <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                        <div className={styles.menuElementsTop}>
                            +×
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Skills
                        </div>

                        <div className={styles.menuElementsBottom}>
                            기술 스택
                        </div>
                    </div>
                </Link>

                <Link href="/projects">
                    <div className={styles.menuElements} onClick={() => setIsClicked(false)}>
                        <div className={styles.menuElementsTop}>
                            &lt;/&gt;
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Projects
                        </div>

                        <div className={styles.menuElementsBottom}>
                            프로젝트
                        </div>
                    </div>
                </Link>

                <Link href="/articles">
                    <div className={styles.menuElements} onClick={() => setIsClicked(false)}>

                        <div className={styles.menuElementsTop}>
                            &#47;**&#47;
                        </div>

                        <div className={styles.menuElementsCenter}>
                            Articles
                        </div>

                        <div className={styles.menuElementsBottom}>
                            영자신문사 기사
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}