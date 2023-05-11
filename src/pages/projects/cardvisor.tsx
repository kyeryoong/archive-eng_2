import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Image from "next/image";

import styles from "../../styles/Cardvisor.module.css";
import "swiper/css";
import "swiper/css/navigation";



interface MemberProps {
    name: string,
    id: string,
    position: string,
    url: number
}

interface RepositoryProps {
    name: string,
    url: string
}

interface TechProps {
    name: string,
    newName?: string,
    color: "white" | "black",
    rgb1: number[],
    rgb2?: number[]
}



export default function Cardvisor() {
    function Member({ name, id, position, url }: MemberProps) {
        return (
            <div className={styles.member}>
                <Image
                    width={60}
                    height={60}
                    src={`https://avatars.githubusercontent.com/u/${url}`}
                    alt=""
                    className={styles.memberImage}
                />

                <div className={styles.memberInfo}>
                    <div className={styles.memberInfoName}>
                        <div className={styles.memberInfoName1}>
                            {name}
                        </div>

                        <div className={styles.memberInfoName2}>
                            @{id}
                        </div>
                    </div>

                    <div className={styles.memberInfoPosition}>
                        {position}
                    </div>
                </div>
            </div>
        )
    }



    function Repository({ name, url }: RepositoryProps) {
        return (
            <div className={styles.repository} onClick={() => window.open("https://github.com" + url)}>
                <Image
                    width={50}
                    height={50}
                    src="/skills/GitHub.png"
                    alt=""
                    className={styles.repositoryIcon}
                />

                <div className={styles.repositoryName}>
                    {name}
                </div>
            </div>
        )
    }



    function Tech({ name, newName, color, rgb1, rgb2 }: TechProps) {
        return (
            <div className={styles.tech} style={
                rgb2

                    ?

                    {
                        background: `linear-gradient(135deg, 
                                rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]}) 20%, 
                                rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]}) 80%`
                    }

                    :

                    {
                        background: `linear-gradient(135deg, 
                                rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]}) 20%, 
                                rgb(${rgb1[0] - 50}, ${rgb1[1] - 50}, ${rgb1[2] - 50}) 80%`
                    }
            }>
                <Image
                    width={40}
                    height={40}
                    src={`/skills/${name}.png`}
                    alt=""
                    className={styles.techIcon}
                />

                <div className={styles.techName} style={{ color: color }}>
                    {newName ? newName : name}&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        )
    }



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

            <div className={styles.containerBottom}>
                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>
                        프로젝트 소개
                    </div>

                    <div className={styles.infoText}>
                        대한민국은 연간 카드 승인 금액이 약 200조원이 넘을 만큼, 카드 사용량이 많은 나라입니다.
                        사용자 본인에게 적합한 카드를 사용하게되면, 효율적인 경제 활동을 할 수 있습니다.
                        그래서, 우리팀은 소비자들이 자신이 원하는 혜택과 브랜드를 선택하여 가장 적합한 카드를 추천해주는 서비스를 개발하였습니다.
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>
                        개발 팀원
                    </div>

                    <div className={styles.memberContainer}>
                        <Member name="김민석" id="min-0404" position="Team Leader, Back-End Programmer" url={78293352} />
                        <Member name="조융" id="yung5060" position="Back-End Programmer" url={80459033} />
                        <Member name="김영우" id="kyeryoong" position="Front-End Programmer" url={98510309} />
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>
                        프로젝트 리포지토리
                    </div>

                    <div className={styles.repositoryContainer}>
                        <Repository name="프론트 엔드 GitHub 페이지" url="/kyeryoong/cardvisor" />
                        <Repository name="백 엔드 GitHub 페이지" url="/min-0404/Graduation_Project" />
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>
                        사용 기술
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            프론트 엔드
                        </div>

                        <div className={styles.techList}>
                            <Tech name="HTML" color="white" rgb1={[241, 101, 41]} />
                            <Tech name="CSS" color="white" rgb1={[41, 101, 241]} />
                            <Tech name="JavaScript" color="black" rgb1={[240, 219, 79]} />
                            <Tech name="React" color="white" rgb1={[97, 218, 251]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            백 엔드
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Java" color="white" rgb1={[225, 31, 33]} rgb2={[13, 110, 182]} />
                            <Tech name="Spring Boot" color="white" rgb1={[109, 179, 63]} />
                            <Tech name="Spring Security" color="white" rgb1={[109, 179, 63]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            데이터베이스
                        </div>

                        <div className={styles.techList}>
                            <Tech name="MySQL" color="white" rgb1={[83, 130, 161]} rgb2={[255, 165, 24]} />
                            <Tech name="Amazon RDS" color="white" rgb1={[76, 114, 242]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            데이터 수집 & 분석
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Python" color="white" rgb1={[74, 138, 189]} rgb2={[255, 223, 89]} />
                            <Tech name="Selenium" color="white" rgb1={[67, 176, 42]} />
                            <Tech name="Pandas" color="white" rgb1={[41, 24, 108]} />
                            <Tech name="Scikit-Learn" color="white" rgb1={[52, 153, 202]} rgb2={[248, 153, 57]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            배포 & 운영
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Amazon EC2" color="white" rgb1={[255, 153, 0]} />
                            <Tech name="Amazon Route 53" color="white" rgb1={[159, 100, 253]} />
                            <Tech name="NGINX" color="white" rgb1={[0, 150, 57]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            협업 & 버전 관리
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Git" color="white" rgb1={[240, 80, 50]} />
                            <Tech name="GitHub" color="white" rgb1={[70, 70, 70]} />
                            <Tech name="Notion" color="black" rgb1={[220, 220, 220]} />
                        </div>
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>
                        프로젝트 보기
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