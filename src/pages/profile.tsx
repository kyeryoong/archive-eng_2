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

                        <img
                            className={image ? styles.profileImageShow : styles.profileImageHide}
                            src={"/profile/profile1.jpg"}
                            alt=""
                        />

                        :

                        <img
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
                <div className={styles.questionAnswer}>
                    <div className={styles.question}>
                        <div className={styles.questionArrow} />

                        <div className={styles.questionText}>
                            컴퓨터공학을 선택한 이유는?
                        </div>
                    </div>

                    <div className={styles.answer}>
                        어릴적 부터 컴퓨터가 너무 좋아서 선택했습니다.<br />
                        물론 전공을 배울수록 컴퓨터를 사용하는 것이랑 크게 연관이 없다는것을 많이 느꼈습니다.
                    </div>

                    <div className={styles.hashtag}>
                        <div className={styles.hastagElements}>
                            #컴퓨터수리안해줌
                        </div>

                        <div className={styles.hastagElements}>
                            #체크무늬안입음
                        </div>

                        <div className={styles.hastagElements}>
                            #해킹할줄모름
                        </div>
                    </div>
                </div>

                <div className={styles.questionAnswer}>
                    <div className={styles.question}>
                        <div className={styles.questionArrow} />

                        <div className={styles.questionText}>
                            프론트엔드 개발자를 선택한 이유는?
                        </div>
                    </div>

                    <div className={styles.answer}>
                        직접 눈으로 보여지는 사용자 인터페이스를 설계하는게 너무 즐거웠습니다.<br />
                        특히, 내가 작성한 코드가 바로 브라우저 화면에 나타난다는 것이 좋았습니다.
                    </div>

                    <div className={styles.hashtag}>
                        <div className={styles.hastagElements}>
                            #감성충만프엔
                        </div>

                        <div className={styles.hastagElements}>
                            #휘황찬란프엔
                        </div>

                        <div className={styles.hastagElements}>
                            #보기좋은떡이_먹기도좋다
                        </div>
                    </div>
                </div>

                <div className={styles.questionAnswer}>
                    <div className={styles.question}>
                        <div className={styles.questionArrow} />

                        <div className={styles.questionText}>
                            개발자로서 중요하게 생각하는 것은?
                        </div>
                    </div>

                    <div className={styles.importantContainer}>
                        <div className={styles.importantElements}>
                            <div className={styles.importantText1}>
                                노력하기
                            </div>

                            <div className={styles.importantText2}>
                                #노오오오오오오력
                            </div>
                        </div>

                        <div className={styles.importantElements}>
                            <div className={styles.importantText1}>
                                새로운 것 배우기
                            </div>

                            <div className={styles.importantText2}>
                                #응애_나_주니어_개발자
                            </div>
                        </div>

                        <div className={styles.importantElements}>
                            <div className={styles.importantText1}>
                                팀원들과 소통하기
                            </div>

                            <div className={styles.importantText2}>
                                #브로드캐스트통신
                            </div>
                        </div>

                        <div className={styles.importantElements}>
                            <div className={styles.importantText1}>
                                다른 팀원의 분야 이해하기
                            </div>

                            <div className={styles.importantText2}>
                                #스프링_하시는분들_리스펙
                            </div>
                        </div>

                        <div className={styles.importantElements}>
                            <div className={styles.importantText1}>
                                다른 사람 코드 잘 이해하기
                            </div>

                            <div className={styles.importantText2}>
                                #import_some_code
                            </div>
                        </div>

                        <div className={styles.importantElements}>
                            <div className={styles.importantText1}>
                                구글링 잘하기
                            </div>

                            <div className={styles.importantText2}>
                                #스택오버플로우도잘하기
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.questionAnswer}>
                    <div className={styles.question}>
                        <div className={styles.questionArrow} />

                        <div className={styles.questionText}>
                            자바스크립트에 대해서 어떻게 생각하나?
                        </div>
                    </div>

                    <div className={styles.jsImageContainer}>
                        <img className={styles.jsImage1} src={"/profile/js1.png"} />
                        <img className={styles.jsImage2} src={"/profile/js2.png"} />
                    </div>

                    <div className={styles.hashtag}>
                        <div className={styles.hastagElements}>
                            #sort()에_낚였을때_모니터_부실뻔함
                        </div>

                        <div className={styles.hastagElements}>
                            #더이상설명이필요한가?
                        </div>
                    </div>
                </div>

                <div className={styles.questionAnswer}>
                    <div className={styles.question}>
                        <div className={styles.questionArrow} />

                        <div className={styles.questionText}>
                            개발할 때 사용하는 장비에 대해서 소개해달라.
                        </div>
                    </div>

                    <div className={styles.equipmentContainer}>
                        <div className={styles.equipmentElements}>
                            <img className={styles.equipmentImage} src={"/profile/equipment1.png"} />

                            <div className={styles.equipmentText1}>
                                마우스
                            </div>

                            <div className={styles.equipmentText2}>
                                Logitech Vertical Lift
                            </div>
                        </div>

                        <div className={styles.equipmentElements}>
                            <img className={styles.equipmentImage} src={"/profile/equipment2.png"} />

                            <div className={styles.equipmentText1}>
                                키보드
                            </div>

                            <div className={styles.equipmentText2}>
                                Keychron K8 Retro
                            </div>
                        </div>

                        <div className={styles.equipmentElements}>
                            <img className={styles.equipmentImage} src={"/profile/equipment3.png"} />

                            <div className={styles.equipmentText1}>
                                모니터
                            </div>

                            <div className={styles.equipmentText2}>
                                삼성 F27T350
                            </div>
                        </div>

                        <div className={styles.equipmentElements}>
                            <img className={styles.equipmentImage} src={"/profile/equipment4.png"} />

                            <div className={styles.equipmentText1}>
                                모니터암
                            </div>

                            <div className={styles.equipmentText2}>
                                카멜 CA-1D
                            </div>
                        </div>

                        <div className={styles.equipmentElements}>
                            <img className={styles.equipmentImage} src={"/profile/equipment5.png"} />

                            <div className={styles.equipmentText1}>
                                아이스 아메리카노
                            </div>

                            <div className={styles.equipmentText2}>
                                아이스 구정물
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}