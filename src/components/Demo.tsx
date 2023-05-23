import { useState } from "react";
import Image from "next/image";

import styles from "./Demo.module.css";



interface DemoProps {
    url: string
}



export default function Demo({ url }: DemoProps) {
    const [show, setShow] = useState<boolean>(true);

    return (
        <div className={show ? styles.demoContainerShow : styles.demoContainerHide}>
            <div className={styles.demoContainerTop}>
                <Image
                    width={30}
                    height={30}
                    src="/projects/deploy.png"
                    alt=""
                    className={styles.icon}
                />

                <div className={styles.header}>
                    프로젝트 배포 중
                </div>

                <div className={styles.live}>
                    LIVE

                    <div className={styles.blink} />
                </div>

                <Image
                    width={25}
                    height={25}
                    src="/projects/arrow.png"
                    alt=""
                    onClick={() => setShow((show) => !show)}
                    className={show ? styles.arrowShow : styles.arrowHide}
                />
            </div>

            <div className={styles.text}>
                지금 보고 계신 프로젝트는 <span className={styles.url}>{url}</span> 도메인에 연동되어 있습니다.<br />
                해당 사이트에 접속하면, 현재 개발 중인 프로젝트를 직접 체험해 볼 수 있습니다.
            </div>

            <ul className={styles.notice}>
                <li>해당 프로젝트는 아직 개발 중입니다.</li>
                <li>모든 기능이 정상적으로 작동하지 않을 수 있습니다.</li>
            </ul>

            <div
                className={styles.demoButton}
                onClick={() => window.open("https://" + url)}
            >
                <Image
                    width={25}
                    height={25}
                    src="/projects/demo.png"
                    alt=""
                    style={{ filter: "invert()" }}
                />
                체험 해보기
            </div>
        </div>
    )
}