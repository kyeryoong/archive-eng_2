import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import styles from "../../styles/Testcon.module.css";
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



export default function Testcon () {
    function Member({ name, id, position, url }: MemberProps) {
        return (
            <div className={styles.member}>
                <img src={`https://avatars.githubusercontent.com/u/${url}`} className={styles.memberImage} />

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
                <img src="/skills/GitHub.png" className={styles.repositoryIcon} />

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
                <img src={`/skills/${name}.png`} className={styles.techIcon} />

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
                    온라인 시험 플랫폼
                </div>

                <div className={styles.title2}>
                    테스트콘
                </div>

                <img src="/projects/testcon/logo.png" className={styles.titleImage} />
            </div>

            <div className={styles.containerBottom}>
                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>
                        프로젝트 소개
                    </div>

                    <div className={styles.infoText}>
                        오늘날 종이보다는 PDF나 워드 파일, 두꺼운 책보다는 얇은 태블릿으로 공부하는 사람들이 많아지고 있습니다.
                        그리고, 컴퓨터로 시험을 보는(CBT Computer-Based Test) 경우를 심심치 않게 발견할 수 있습니다.
                        예를 들자면, 2023년 부터 한국산업인력공단이 주관하는 기사 시험 같은 경우, 필기를 CBT 방식으로 전환하여 시행하고 있습니다.
                        그리고, 코로나 19로 인해 많은 대학교에서 온라인 시험 플랫폼을 활용하여 시험을 진행하는 경우를 많이 볼 수 있었습니다.
                        취업 준비생들에게 친숙한 AI 온라인 역량검사나 코딩 테스트도 모두 컴퓨터로 진행됩니다.
                        이처럼 온라인으로 시험을 보는 시대가 도래한 만큼, 개인 프로젝트로 온라인 시험 플랫폼 테스트콘을 제작하게 되었습니다.
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>
                        개발 팀원
                    </div>

                    <div className={styles.memberContainer}>
                        <Member name="김영우" id="kyeryoong" position="Programmer" url={98510309} />
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.infoHeader}>
                        프로젝트 리포지토리
                    </div>

                    <div className={styles.repositoryContainer}>
                        <Repository name="GitHub 페이지" url="/kyeryoong/testcon" />
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
                            <Tech name="TypeScript" color="white" rgb1={[49, 120, 198]} />
                            <Tech name="React" color="white" rgb1={[97, 218, 251]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            백 엔드
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Firebase" color="white" rgb1={[5, 155, 229]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            데이터베이스
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Firebase" newName="Firestore" color="white" rgb1={[5, 155, 229]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            배포 & 운영
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Firebase" color="white" rgb1={[5, 155, 229]} />
                            <Tech name="GitHub Actions" color="white" rgb1={[32, 136, 225]} />
                        </div>
                    </div>

                    <div className={styles.techContainer}>
                        <div className={styles.techHeader}>
                            협업 & 버전 관리
                        </div>

                        <div className={styles.techList}>
                            <Tech name="Git" color="white" rgb1={[240, 80, 50]} />
                            <Tech name="GitHub" color="white" rgb1={[70, 70, 70]} />
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
                        <SwiperSlide><img src="/projects/testcon/01.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/02.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/11.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/12.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/21.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/22.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/23.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/24.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/25.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/26.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/27.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/28.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/29.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/31.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/32.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/33.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/34.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/35.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/36.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/37.png" className={styles.demoImage} /></SwiperSlide>
                        <SwiperSlide><img src="/projects/testcon/38.png" className={styles.demoImage} /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}