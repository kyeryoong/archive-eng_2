import { useState } from "react";

import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/router"

import styles from "../../styles/Navigation.module.css";



export default function Navigation() {
    const router = useRouter();

    const [isClicked, setIsClicked] = useState<boolean>(false);

    return (
        <div>
            <div className={styles.navigationContainerTop}>
                <Image className={styles.titleIcon} src="/logo.png" alt="" width={40} height={40} />

                <div className={styles.titleText}>
                    archive-eng
                </div>

                <Image className={isClicked ? styles.buttonNotClicked : styles.buttonClicked} src="/arrow.png" alt="" width={20} height={20} onClick={() => setIsClicked((prev) => !prev)} />
            </div>

            <div className={styles.menuContainer} style={isClicked ? { top: "0px" } : { top: "-100vh" }}>
                <div className={styles.menuElementsContainer}>
                    <div className={styles.menuElements} />
                    <div className={styles.menuElements} />
                    <div className={styles.menuElements} />
                    <div className={styles.menuElements} />
                </div>

                <div className={styles.menuLine} />
            </div>
        </div>
    )
}