import Image from "next/image";

import styles from "../styles/404.module.css";



export default function Error() {
    return (
        <div className={styles.errorContainer}>
            <Image className={styles.errorIcon} src="/error.png" alt="" width={2000} height={1000} />
            
            <div className={styles.errorMessage}>
                Page Not Founded
            </div>
        </div>
    )
}