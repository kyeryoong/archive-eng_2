import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "../styles/Profile.module.css";



function Keywords({ keywords, delay }: { keywords: string[], delay: number }) {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const keywordInterval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, delay * 1000);

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



function Question({ question, answer }: { question: string, answer: string }) {
    return (
        <div className={styles.questionAnswer}>
            <div className={styles.question}>
                <div className={styles.questionArrow} />

                <div className={styles.questionText}>
                    {question}
                </div>
            </div>

            <div className={styles.answer}>
                <div className={styles.answerText}>
                    {answer}
                </div>

                <div className={styles.answerArrow} />
            </div>
        </div>
    )
}



export default function Profile() {
    const [image, setImage] = useState<boolean>(false);


    useEffect(() => {
        const keywordInterval = setInterval(() => {
            setImage((prev) => !prev);
        }, 4000);

        return () => {
            clearInterval(keywordInterval);
        };
    })



    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                {
                    image

                    ?

                    <Image
                        className={image ? styles.profileImageShow : styles.profileImageHide}
                        src={"/profile/profile1.jpg"}
                        alt=""
                        width={200}
                        height={200}
                    />

                    :

                    <Image
                        className={image ? styles.profileImageHide : styles.profileImageShow}
                        src={"/profile/profile2.jpg"}
                        alt=""
                        width={200}
                        height={200}
                    />
                }


                <div className={styles.profileName}>
                    <Keywords keywords={["김영우", "Kim Young-Woo", "@kyeryoong"]} delay={5} />
                </div>
            </div>

            <div className={styles.careerContainer}>
                <div className={styles.career}>
                    <div className={styles.careerPeriod}>
                        2017.03 ~ 2023.02
                    </div>

                    <div className={styles.careerName}>
                        홍익대학교 컴퓨터공학과 학사
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

            <div className={styles.questionAnswerContainer}>
                <Question
                    question="컴퓨터공학을 선택한 이유는?"
                    answer={`어릴적 부터 컴퓨터가 너무 좋아서 선택했습니다.\n물론 학교를 다닐수록 컴퓨터를 사용하는 것이랑 크게 연관이 없는것을 아주 많이 느꼈습니다.`}
                />

                <Question
                    question="프론트엔드 개발자를 선택한 이유는?"
                    answer={`사용자 인터페이스를 설계하면서, 직접 눈으로 보여지는 결과물을 만드는게 너무 즐거웠습니다.\n그리고, 사용자 경험을 만족시켜주는 것에 흥미를 느꼈기 때문에 선택했습니다.`}
                />

                <Question
                    question="개발자로서 중요하게 생각하는 것은?"
                    answer={`1. 끊임없이 노력하는 것\n2. 새로운 것을 배우려는 도전 정신\n3. 팀원들과 함께 일하려는 마음\n4. 팀원들의 분야에 대한 최소한의 이해\n5. 다른 사람들의 코드 이해하고 내 것으로 만드는 능력\n6. 구글링 잘하기`}
                />
            </div>
        </div>
    )
}