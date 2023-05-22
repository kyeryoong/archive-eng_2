import Link from "next/link"
import Image from "next/image";

import styles from "./index.module.css";



export default function Project() {
    return (
        <div className={styles.container}>
            <div className={styles.projectContainer}>
                <Link href="/projects/cardvisor">
                    <div
                        className={styles.projectElement}
                        style={{ backgroundColor: "rgb(0, 220, 220)" }}
                    >
                        <div className={styles.projectTitle1}>
                            사용자 소비 패턴 기반 카드 추천 서비스
                        </div>

                        <div className={styles.projectTitle2}>
                            카드바이저
                        </div>

                        <Image
                            src="/projects/cardvisor/icon.png" alt=""
                            width={600} height={600}
                            className={styles.projectIcon}
                            style={{ filter: "brightness(0) invert(1)"}}
                        />
                    </div>
                </Link>

                <Link href="/projects/testcon">
                    <div
                        className={styles.projectElement}
                        style={{ background: "linear-gradient(135deg, rgb(0, 200, 200) 20%, rgb(0, 100, 200) 80%)" }}
                    >
                        <div className={styles.projectTitle1}>
                            온라인 시험 플랫폼
                        </div>

                        <div className={styles.projectTitle2}>
                            테스트콘
                        </div>

                        <Image
                            src="/projects/testcon/icon.png" alt=""
                            width={600} height={600}
                            className={styles.projectIcon}
                        />
                    </div>
                </Link>

                <Link href="/projects/archiveeng">
                    <div
                        className={styles.projectElement}
                        style={{ background: "linear-gradient(135deg, rgb(70, 70, 70) 20%, rgb(20, 20, 20) 80%)" }}
                    >
                        <div className={styles.projectTitle1}>
                            포트폴리오 사이트
                        </div>

                        <div className={styles.projectTitle2}>
                            아카이빙
                        </div>

                        <Image
                            src="/projects/archiveeng/icon.png" alt=""
                            width={600} height={600}
                            className={styles.projectIcon}
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}