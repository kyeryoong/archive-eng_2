import Image from "next/image";

import styles from "../styles/Achievements.module.css";



export default function Achievements() {
    return (
        <div className={styles.container}>
            <div className={styles.achievementsContainer}>
                <div className={styles.achievement}>
                    <Image 
                        src="/achievements/image/hice.jpg" alt="" 
                        width={3000} height={3000} 
                        className={styles.achievementImage}
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
                </div>

                <div className={styles.achievement}>
                    <Image 
                        src="/achievements/image/hackerton.jpg" alt="" 
                        width={3000} height={3000} 
                        className={styles.achievementImage}
                    />
                    
                    <div className={styles.achievementName}>
                        <div className={styles.achievementNameTop}>
                            마이 핀테크 서비스 해커톤
                        </div>

                        <div className={styles.achievementNameCenter}>
                            My Fintech Service Hackerton
                        </div>

                        <div className={styles.achievementNameBottom}>
                            우수상 <span style={{fontSize: "1.5rem", fontWeight: "700"}}>(학생부)</span>
                        </div>
                    </div>
                </div>

                <div className={styles.achievement}>
                    <Image 
                        src="/achievements/image/fina.jpg" alt="" 
                        width={3000} height={3000} 
                        className={styles.achievementImage}
                    />
                    
                    <div className={styles.achievementName}>
                        <div className={styles.achievementNameTop}>
                            2019 광주세계수영선수권대회
                        </div>

                        <div className={styles.achievementNameCenter}>
                            2019 Gwangju FINA World Championships
                        </div>

                        <div className={styles.achievementNameBottom}>
                            자원봉사
                        </div>
                    </div>
                </div>

                <div className={styles.achievement}>
                    <Image 
                        src="/achievements/image/tidings.jpg" alt="" 
                        width={3000} height={3000} 
                        className={styles.achievementImage}
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
                </div>
            </div>
        </div>
    )
}