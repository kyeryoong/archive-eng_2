import styles from "./Authors.module.css";



interface AuthorsProps {
    reviser: string
}



export default function Authors({ reviser }: AuthorsProps) {
    return (
        <div className={styles.authorsContainer}>
            <div className={styles.header}>
                <div className={styles.label}>Written by</div>
                <div className={styles.value}>Kim Youngwoo</div>
            </div>

            <div className={styles.header}>
                <div className={styles.label}>Revised by</div>
                <div className={styles.value}>{reviser}</div>
            </div>
        </div>
    )
}