import { useState } from "react";

import Image from "next/image";

import styles from "../styles/Achievements.module.css";



export default function Achievements() {
    const [hover, setHover] = useState<number>(0);


    return (
        <div className={styles.container}>
            <div
                className={hover === 0 ? styles.achievementNormal : (hover === 1 ? styles.achievementSelected : styles.achievementNotSelected)}
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(0)}
            >
                <Image
                    src="/achievements/image/hice.jpg" alt=""
                    width={3000} height={3000}
                    className={hover === 1 ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                />

                <div className={styles.achievementName}>
                    <div className={styles.achievementNameTop}>
                        홍익대학교 컴퓨터공학과 졸업전시회
                    </div>

                    <div className={styles.achievementNameCenter}>
                        Hongik University Computer Engineering Graduation Exhibition
                    </div>

                    <div className={styles.achievementNameBottom}>
                        최우수상
                    </div>
                </div>

                <div className={hover === 1 ? styles.moreButtonShow : styles.moreButtonHide}>
                    더보기
                </div>
            </div>

            <div
                className={hover === 0 ? styles.achievementNormal : (hover === 2 ? styles.achievementSelected : styles.achievementNotSelected)}
                onMouseEnter={() => setHover(2)}
                onMouseLeave={() => setHover(0)}
            >
                <Image
                    src="/achievements/image/hackerton.jpg" alt=""
                    width={3000} height={3000}
                    className={hover === 2 ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                />

                <div className={styles.achievementName}>
                    <div className={styles.achievementNameTop}>
                        마이 핀테크 서비스 해커톤
                    </div>

                    <div className={styles.achievementNameCenter}>
                        My Fintech Service Hackerton
                    </div>

                    <div className={styles.achievementNameBottom}>
                        우수상 <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>(학생부)</span>
                    </div>
                </div>

                <div className={hover === 2 ? styles.moreButtonShow : styles.moreButtonHide}>
                    더보기
                </div>
            </div>

            <div
                className={hover === 0 ? styles.achievementNormal : (hover === 3 ? styles.achievementSelected : styles.achievementNotSelected)}
                onMouseEnter={() => setHover(3)}
                onMouseLeave={() => setHover(0)}
            >
                <Image
                    src="/achievements/image/fina.jpg" alt=""
                    width={3000} height={3000}
                    className={hover === 3 ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                />

                <div className={styles.achievementName}>
                    <div className={styles.achievementNameTop}>
                        2019 광주 FINA 세계수영선수권대회
                    </div>

                    <div className={styles.achievementNameCenter}>
                        2019 Gwangju FINA World Championships
                    </div>

                    <div className={styles.achievementNameBottom}>
                        자원봉사
                    </div>
                </div>

                <div className={hover === 3 ? styles.moreButtonShow : styles.moreButtonHide}>
                    더보기
                </div>
            </div>

            <div
                className={hover === 0 ? styles.achievementNormal : (hover === 4 ? styles.achievementSelected : styles.achievementNotSelected)}
                onMouseEnter={() => setHover(4)}
                onMouseLeave={() => setHover(0)}
            >
                <Image
                    src="/achievements/image/tidings.jpg" alt=""
                    width={3000} height={3000}
                    className={hover === 4 ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                />

                <div className={styles.achievementName}>
                    <div className={styles.achievementNameTop}>
                        홍익대학교 영자신문사
                    </div>

                    <div className={styles.achievementNameCenter}>
                        Hongik Tidings
                    </div>

                    <div className={styles.achievementNameBottom}>
                        정기자
                    </div>
                </div>

                <div className={hover === 4 ? styles.moreButtonShow : styles.moreButtonHide}>
                    더보기
                </div>
            </div>
        </div>
    )
}