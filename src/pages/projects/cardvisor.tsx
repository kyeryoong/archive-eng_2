import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Image from "next/image";

import Member from "@/components/Member";
import Repository from "@/components/Repository";
import Tech from "@/components/Tech";

import styles from "./cardvisor.module.css";
import "swiper/css";
import "swiper/css/navigation";



export default function Cardvisor() {
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
    const ref6 = useRef<HTMLDivElement>(null);
    const ref7 = useRef<HTMLDivElement>(null);

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

    function scrollTo6() {
        ref6.current?.scrollIntoView({ behavior: "smooth" });
    }

    function scrollTo7() {
        ref7.current?.scrollIntoView({ behavior: "smooth" });
    }



    let refPositions: number[] = [
        ref1.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref1.current?.getBoundingClientRect().top) : 0,
        ref2.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref2.current?.getBoundingClientRect().top) : 0,
        ref3.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref3.current?.getBoundingClientRect().top) : 0,
        ref4.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref4.current?.getBoundingClientRect().top) : 0,
        ref5.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref5.current?.getBoundingClientRect().top) : 0,
        ref6.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref6.current?.getBoundingClientRect().top) : 0,
        ref7.current?.getBoundingClientRect().top !== undefined ? Math.abs(ref7.current?.getBoundingClientRect().top) : 0
    ]

    let currentRef: number = refPositions.findIndex((elem) => elem === Math.min(...refPositions));



    return (
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <div className={styles.title1}>
                    사용자 소비 패턴 기반 카드 추천 서비스
                </div>

                <div className={styles.title2}>
                    카드바이저
                </div>

                <Image
                    width={600}
                    height={200}
                    src="/projects/cardvisor/logo.png"
                    alt=""
                    className={styles.titleImage}
                />
            </div>



            <div className={styles.navigator} style={position > 400 ? { top: `150px` } : { top: `calc(550px - ${position}px)` }}>
                {
                    [
                        [0, "개요", scrollTo1],
                        [1, "개발 팀원", scrollTo2],
                        [2, "성과", scrollTo3],
                        [3, "소스 코드", scrollTo4],
                        [4, "사용 기술", scrollTo5],
                        [5, "구조", scrollTo6],
                        [6, "결과물 보기", scrollTo7],
                    ].map((elem: any[], index: number) => (
                        <div key={index} className={currentRef === index ? styles.navigatorButtonOn : styles.navigatorButtonOff} onClick={elem[2]}>
                            <Image width={25} height={25} src={`/projects/${elem[0]}.png`} alt="" className={currentRef === index ? styles.navigatorIconOn : styles.navigatorIconOff} />
                            <div className={currentRef === index ? styles.navigatorTextOn : styles.navigatorTextOff}>{elem[1]}</div>
                        </div>
                    ))
                }
            </div>



            <div className={styles.containerBottom}>
                <div className={styles.infoContainer} ref={ref1}>
                    <div className={styles.infoHeader}>
                        개요
                    </div>

                    <div className={styles.infoText}>
                        대한민국은 연간 카드 승인 금액이 약 200조원이 넘을 만큼, 카드 사용량이 많은 나라입니다.
                        사용자 본인에게 적합한 카드를 사용하게되면, 효율적인 경제 활동을 할 수 있습니다.
                        그래서, 우리팀은 소비자들이 자신이 원하는 혜택과 브랜드를 선택하여 가장 적합한 카드를 추천해주는 서비스를 개발하였습니다.
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref2}>
                    <div className={styles.infoHeader}>
                        개발 팀원
                    </div>

                    <div className={styles.memberContainer}>
                        <Member name="김민석" id="min-0404" position="Team Leader, Back-End Programmer" url={78293352} />
                        <Member name="조융" id="yung5060" position="Back-End Programmer" url={80459033} />
                        <Member name="김영우" id="kyeryoong" position="Front-End Programmer" url={98510309} />
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref3}>
                    <div className={styles.infoHeader}>
                        성과
                    </div>

                    <div className={styles.achievementContainer}>
                        <div className={styles.infoText}>
                            2022 홍익대학교 컴퓨터공학과 졸업 전시회 - 최우수상
                        </div>

                        <div className={styles.infoText}>
                            마이 핀테크 서비스 해커톤 - 우수상(학생부)
                        </div>

                        <div className={styles.infoText}>
                            졸업 전시회 기간 약 300명 소프트웨어 체험
                        </div>

                        <div className={styles.infoText}>
                            창직종합설계프로젝트 1,2 - 지도 교수 선정 우수 작품
                        </div>
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref4}>
                    <div className={styles.infoHeader}>
                        소스 코드
                    </div>

                    <div className={styles.repositoryContainer}>
                        <Repository name="프론트 엔드 GitHub 페이지" url="/kyeryoong/cardvisor" />
                        <Repository name="백 엔드 GitHub 페이지" url="/min-0404/Graduation_Project" />
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref5}>
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
                            <Tech name="JavaScript" iconColor="black" textColor="black" rgb1={[240, 219, 79]} />
                            <Tech name="React" iconColor="white" textColor="white" rgb1={[97, 218, 251]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            백 엔드
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Java" iconColor="white" textColor="white" rgb1={[225, 31, 33]} rgb2={[13, 110, 182]} />
                            <Tech name="Spring Boot" iconColor="white" textColor="white" rgb1={[109, 179, 63]} />
                            <Tech name="Spring Security" iconColor="white" textColor="white" rgb1={[109, 179, 63]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            데이터베이스
                        </div>

                        <div className={styles.techList}>
                            <Tech name="MySQL" iconColor="white" textColor="white" rgb1={[83, 130, 161]} rgb2={[255, 165, 24]} />
                            <Tech name="Amazon RDS" iconColor="white" textColor="white" rgb1={[76, 114, 242]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            데이터 수집 & 분석
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Python" iconColor="white" textColor="white" rgb1={[74, 138, 189]} rgb2={[255, 223, 89]} />
                            <Tech name="Selenium" iconColor="white" textColor="white" rgb1={[67, 176, 42]} />
                            <Tech name="Pandas" iconColor="white" textColor="white" rgb1={[41, 24, 108]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            추천 알고리즘
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Python" iconColor="white" textColor="white" rgb1={[74, 138, 189]} rgb2={[255, 223, 89]} />
                            <Tech name="Flask" iconColor="white" textColor="white" rgb1={[70, 70, 70]} />
                            <Tech name="Scikit-Learn" iconColor="original" textColor="white" rgb1={[52, 153, 202]} rgb2={[248, 153, 57]} />
                        </div>
                    </div>


                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            배포 & 운영
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Amazon EC2" iconColor="white" textColor="white" rgb1={[255, 153, 0]} />
                            <Tech name="Amazon Route 53" iconColor="white" textColor="white" rgb1={[159, 100, 253]} />
                            <Tech name="NGINX" iconColor="white" textColor="white" rgb1={[0, 150, 57]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            협업 & 버전 관리
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Git" iconColor="white" textColor="white" rgb1={[240, 80, 50]} />
                            <Tech name="GitHub" iconColor="white" textColor="white" rgb1={[70, 70, 70]} />
                            <Tech name="Notion" iconColor="black" textColor="black" rgb1={[220, 220, 220]} />
                        </div>
                    </div>
                </div>



                <div className={styles.infoContainer} ref={ref6}>
                    <div className={styles.infoHeader}>
                        구조
                    </div>

                    <Image
                        width={2000}
                        height={1000}
                        src="/projects/cardvisor/diagram.png"
                        alt=""
                        className={styles.diagram}
                    />
                </div>



                <div className={styles.infoContainer} ref={ref7}>
                    <div className={styles.infoHeader}>
                        결과물 보기
                    </div>

                    <Swiper
                        className={styles.demoImageContainer}
                        navigation={true}
                        modules={[Navigation]}
                        centeredSlides={true}
                    >
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/1.png" alt="" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/2.png" alt="" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/3.png" alt="" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/4.png" alt="" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/5.png" alt="" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/6.png" alt="" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/7.png" alt="" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/8.png" alt="" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><Image width={2100} height={1200} src="/projects/cardvisor/9.png" alt="" className={styles.demoImage} /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}