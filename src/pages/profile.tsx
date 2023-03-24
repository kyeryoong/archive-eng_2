import { useState, useEffect } from "react";

import styles from "../styles/Profile.module.css";



function Keywords({ keywords }: { keywords: string[] }) {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const keywordInterval = setInterval(() => {
            setIndex((prev) => prev + 1)
        }, 5000);

        return () => {
            clearInterval(keywordInterval);
        };
    });

    return (
        <span>
            <div className={index % keywords.length === 0 ? styles.keywordShow : styles.keywordHide}>
                {index % keywords.length === 0 && keywords[0]}
            </div>

            <div className={index % keywords.length === 1 ? styles.keywordShow : styles.keywordHide}>
                {index % keywords.length === 1 && keywords[1]}
            </div>

            <div className={index % keywords.length === 2 ? styles.keywordShow : styles.keywordHide}>
                {index % keywords.length === 2 && keywords[2]}
            </div>
        </span>
    )
}

export default function Profile() {


    return (
        <div className={styles.profileContainer}>
            <div className={styles.name}>
                <Keywords keywords={["김영우", "Kim Young-Woo", "@kyeryoong"]} />
            </div>


            <div className={styles.careerContainer}>
                <div className={styles.career}>
                    <div className={styles.careerPeriod}>
                        2017.03 ~ 2023.02
                    </div>

                    <div className={styles.careerName}>
                        홍익대학교 컴퓨터공학과 학사 과정
                    </div>
                </div>

                <div className={styles.career}>
                    <div className={styles.careerPeriod}>
                        2018.08 ~ 2020.06
                    </div>

                    <div className={styles.careerName}>
                        대한민국 공군 병장 만기전역
                    </div>
                </div>

                <div className={styles.career}>
                    <div className={styles.careerPeriod}>
                        2021.04 ~ 2023.02
                    </div>

                    <div className={styles.careerName}>
                        홍익대학교 영자신문사(Hongik Tidings) 기자
                    </div>
                </div>
            </div>

            <div className={styles.questionContainer}>
                <div className={styles.question}>
                    <div className={styles.questionHeader}>
                        Why<br />
                        Computer<br />
                        Engineering<br />
                        ?
                    </div>

                    <div className={styles.questionText}>
                        어릴 적 부터 컴퓨터가 너무 좋아서 선택했습니다.<br />
                        물론 학교를 다닐수록 컴퓨터 사용하는 거랑 크게 연관없는것을 느꼈습니다.
                    </div>
                </div>

                <div className={styles.question}>
                    <div className={styles.questionHeader}>
                        Why<br />
                        Frontend<br />
                        ?
                    </div>

                    <div className={styles.questionText}>
                        사용자 인터페이스를 설계하면서,<br />
                        사용자 경험을 만족시켜주는 것에 흥미를 느꼈기 때문에 선택했습니다.
                    </div>
                </div>

                <div className={styles.question}>
                    <div className={styles.questionHeader}>
                        What's<br />
                        Important<br />
                        As Developer<br />
                        ?
                    </div>

                    <div className={styles.questionText}>
                        1. 다른 개발 분야에 대한 이해<br />
                        2. 커뮤니케이션 능력<br />
                        3. 지치지 않고 배우려는 자세
                    </div>
                </div>
            </div>
        </div>
    )
}