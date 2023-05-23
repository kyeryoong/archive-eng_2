import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Image from "next/image";

import Demo from "@/components/Demo";
import Member from "@/components/Member";
import Repository from "@/components/Repository";
import Tech from "@/components/Tech";

import styles from "./testcon.module.css";
import "swiper/css";
import "swiper/css/navigation";



export default function Testcon() {
    const [position, setPosition] = useState<number>(0);

    function onScroll() {
        setPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])



    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);

    function scrollTo1() {
        ref1.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollTo2() {
        ref2.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollTo3() {
        ref3.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollTo4() {
        ref4.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollTo5() {
        ref5.current?.scrollIntoView({ behavior: "smooth" });
    }



    let refPositions: number[] = [
        ref1.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref1.current?.getBoundingClientRect().top) : 0,
        ref2.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref2.current?.getBoundingClientRect().top) : 0,
        ref3.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref3.current?.getBoundingClientRect().top) : 0,
        ref4.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref4.current?.getBoundingClientRect().top) : 0,
        ref5.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref5.current?.getBoundingClientRect().top) : 0,
    ]

    let currentRef: number = refPositions.findIndex((elem) => elem === Math.min(...refPositions));



    return (
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <div className={styles.title1}>
                    온라인 시험 플랫폼
                </div>

                <div className={styles.title2}>
                    테스트콘
                </div>

                <Image
                    width={600}
                    height={200}
                    src="/projects/testcon/logo.png"
                    alt=""
                    className={styles.titleImage}
                />
            </div>



            <div className={styles.navigator} style={position > 400 ? { top: `150px` } : { top: `calc(550px - ${position}px)`, transition: "0s" }}>
                {
                    [
                        [0, "개요", scrollTo1],
                        [1, "개발 팀원", scrollTo2],
                        [3, "소스 코드", scrollTo3],
                        [4, "사용 기술", scrollTo4],
                        [6, "결과물 보기", scrollTo5],
                    ].map((elem: any[], index: number) => (
                        <div key={index} className={currentRef === index ? styles.navigatorButtonOn : styles.navigatorButtonOff} onClick={elem[2]}>
                            <Image width={25} height={25} src={`/projects/${elem[0]}.png`} alt="" className={currentRef === index ? styles.navigatorIconOn : styles.navigatorIconOff} />
                            <div className={currentRef === index ? styles.navigatorTextOn : styles.navigatorTextOff}>{elem[1]}</div>
                        </div>
                    ))
                }
            </div>



            <Demo url={"testcon.site"} />



            <div className={styles.containerBottom}>
                <div className={styles.infoContainer} ref={ref1}>
                    <div className={styles.infoHeader}>
                        개요
                    </div>

                    <div className={styles.infoText}>
                        오늘날 종이보다는 PDF나 워드 파일, 두꺼운 책보다는 얇은 태블릿으로 공부하는 사람들이 많아지고 있습니다.
                        그리고, 컴퓨터로 시험을 보는(CBT Computer-Based Test) 경우를 심심치 않게 발견할 수 있습니다.
                        예를 들자면, 2023년부터 한국산업인력공단이 주관하는 기사 시험 같은 경우, 필기를 CBT 방식으로 전환하여 시행하고 있습니다.
                        그리고, 코로나19로 인해 많은 대학교에서 온라인 시험 플랫폼을 활용하여 시험을 진행하는 경우를 많이 볼 수 있었습니다.
                        취업 준비생들에게 친숙한 AI 온라인 역량검사나 코딩 테스트도 모두 컴퓨터로 진행됩니다.
                        이처럼 온라인으로 시험을 보는 시대가 도래한 만큼, 개인 프로젝트로 온라인 시험 플랫폼 테스트콘을 제작하게 되었습니다.
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref2}>
                    <div className={styles.infoHeader}>
                        개발 팀원
                    </div>

                    <div className={styles.memberContainer}>
                        <Member name="김영우" id="kyeryoong" position="Programmer" url={98510309} />
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref3}>
                    <div className={styles.infoHeader}>
                        소스 코드
                    </div>

                    <div className={styles.repositoryContainer}>
                        <Repository name="GitHub 페이지" url="/kyeryoong/testcon" />
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref4}>
                    <div className={styles.infoHeader}>
                        사용 기술
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            프론트 엔드
                        </div>

                        <div className={styles.techList}>
                            <Tech name="HTML" iconColor="white" textColor="white" rgb1={[241, 101, 41]} />
                            <Tech name="CSS" iconColor="white" textColor="white" rgb1={[41, 101, 241]} />
                            <Tech name="TypeScript" iconColor="white" textColor="white" rgb1={[49, 120, 198]} />
                            <Tech name="React" iconColor="white" textColor="white" rgb1={[97, 218, 251]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            백 엔드
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Firebase" iconColor="original" textColor="white" rgb1={[5, 155, 229]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            데이터베이스
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Firebase" newName="Firestore" iconColor="original" textColor="white" rgb1={[5, 155, 229]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            배포 & 운영
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Firebase" iconColor="original" textColor="white" rgb1={[5, 155, 229]} />
                            <Tech name="GitHub Actions" iconColor="white" textColor="white" rgb1={[32, 136, 225]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            버전 관리
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Git" iconColor="white" textColor="white" rgb1={[240, 80, 50]} />
                            <Tech name="GitHub" iconColor="white" textColor="white" rgb1={[70, 70, 70]} />
                        </div>
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref5}>
                    <div className={styles.infoHeader}>
                        결과물 보기
                    </div>

                    <Swiper
                        className={styles.demoImageContainer}
                        navigation={true}
                        modules={[Navigation]}
                        centeredSlides={true}
                    >
                        {
                            ["01", "11", "12", "21", "22", "23", "24", "25", "26", "27", "28", "29", "31", "32", "33", "34", "35", "36", "37", "38"].map((elem: string, index: number) => (
                                <SwiperSlide key={index}>
                                    <Image width={2100} height={1200} src={`/projects/testcon/${elem}.png`} alt="" className={styles.demoImage} />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}