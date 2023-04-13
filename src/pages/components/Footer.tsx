import styles from "../../styles/Footer.module.css";



export default function Footer() {
    var year: number = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <div className={styles.name}>
                        @kyeryoong
                    </div>

                    <div className={styles.name}>
                        김영우
                    </div>

                    <div className={styles.name}>
                        Kim Young-Woo
                    </div>
                </div>

                <div className={styles.containerRight}>
                    <div className={styles.contact}>
                        contact
                    </div>

                    <div className={styles.buttonsContainer}>
                        <img src={"/home/email.png"} className={styles.buttonImage} onClick={() => window.open("mailto:kyeryoong@gmail.com?subject=안녕하세요, archive-eng을 통해서 이메일 드립니다.")} />
                        <img src={"/home/github.png"} className={styles.buttonImage} onClick={() => window.open("https://github.com/kyeryoong")} />
                        <img src={"/home/linkedin.png"} className={styles.buttonImage} onClick={() => window.open("https://www.linkedin.com/in/kyeryoong/")} />
                    </div>
                </div>
            </div>

            <div className={styles.allRightsReserved}>
                {year}. archive-eng. All rights reserved.
            </div>
        </div>
    )
}