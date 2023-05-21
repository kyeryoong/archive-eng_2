import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper";

import styles from "../../styles/Profile.module.css";
import "swiper/css";
import "swiper/css/free-mode";



interface EquipmentProps {
    index: number,
    text: string,
    subText: string
}

function Equipment({ index, text, subText }: EquipmentProps) {
    return (
        <div className={styles.equipmentElements}>
            <Image alt="" width={500} height={500} className={styles.equipmentImage} src={"/profile/equipment" + index + ".png"} />

            <div className={styles.equipmentText}>
                {text}
            </div>

            <div className={styles.equipmentSubText}>
                {subText}
            </div>
        </div>
    )
}



export default function Profile() {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [textIndex, setTextIndex] = useState<number>(0);

    setTimeout(() => {
        setImageIndex((imageIndex + 1) % 2);
    }, 5000)

    setTimeout(() => {
        setTextIndex((textIndex + 1) % 3);
    }, 3000)

    const textArray: string[] = [
        "프론트엔드 개발자",
        "MERN 스택 개발자를 꿈꾸는",
        "주니어 개발자"
    ]



    interface BaseProps {
        fontFamily: string,
        fontWeight: string,
        color?: string,
        fontStyle?: string,
        cursor?: string
    }

    const base: BaseProps = {
        fontFamily: "JetBrains Mono",
        fontWeight: "600"
    }

    const red: BaseProps = { ...base, color: "#F92672" }
    const orange: BaseProps = { ...base, color: "#FD971F" }
    const yellow: BaseProps = { ...base, color: "#E6DB74" }
    const green: BaseProps = { ...base, color: "#A6E22E" }
    const blue: BaseProps = { ...base, color: "#66D9EF", fontStyle: "italic" }
    const purple: BaseProps = { ...base, color: "#AE81FF" }
    const gray: BaseProps = { ...base, color: "#919288" }
    const darkgray: BaseProps = { ...base, color: "#6E7066", fontStyle: "italic" }
    const white: BaseProps = { ...base, color: "#FFFFFF" }

    const hovered: BaseProps = { ...base, color: "aqua", cursor: "pointer" }

    const [emailHover, setEmailHover] = useState<boolean>(false);
    const [githubHover, setGithubHover] = useState<boolean>(false);



    return (
        <div className={styles.container}>
            <div>
                <Swiper
                    direction={"vertical"}
                    slidesPerView="auto"
                    mousewheel={true}
                    modules={[Mousewheel]}
                    autoHeight={true}
                    speed={1000}
                    style={{
                        width: "100vw",
                        height: "100vh",
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        backgroundColor: "black",
                        zIndex: "2"
                    }}

                >
                    <SwiperSlide>
                        <div className={styles.page}>
                            <div className={styles.profile}>
                                <div className={styles.profileContainer}>
                                    <div className={styles.imageContainer}>
                                        <Image className={imageIndex === 0 ? styles.image1Show : styles.image1Hide} alt="" src={"/profile/profile1.jpg"} width={200} height={200} />
                                        <Image className={imageIndex === 1 ? styles.image2Show : styles.image2Hide} alt="" src={"/profile/profile2.jpg"} width={200} height={200} />
                                    </div>

                                    <div className={styles.textWrapper}>
                                        <div className={styles.textNormal}>
                                            안녕하세요,
                                        </div>

                                        <div className={styles.textContainer}>
                                            <div className={textIndex === 1 ? styles.text1 : (textIndex === 2 ? styles.text2 : styles.text3)}>
                                                {textArray.map((elem: string) => (
                                                    <div className={styles.textElements}>{elem}</div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={styles.textNormal}>
                                            김영우 입니다.
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.arrow}>
                                    아래로 스크롤 해주세요
                                    <Image className={styles.arrowImage} alt="" src={"/left.png"} width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.page}>
                            <div className={styles.info}>
                                <span style={darkgray}>&#47;&#47; Let me introduce myself.</span>
                                <br /><br />

                                <span style={blue}>let</span>&nbsp;&nbsp;
                                <span style={white}>youngwoo</span>&nbsp;&nbsp;
                                <span style={red}>=</span>&nbsp;&nbsp;
                                <span style={red}>&#123;</span>
                                <br />

                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={white}>name</span>
                                    <span style={gray}>:</span>&nbsp;&nbsp;
                                    <span style={gray}>&#34;</span>
                                    <span style={yellow}>Kim Young-Woo</span>
                                    <span style={gray}>&#34;</span>
                                    <span style={gray}>,</span>
                                </div>

                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={white}>birth</span>
                                    <span style={gray}>:</span>&nbsp;&nbsp;
                                    <span style={red}>new</span>&nbsp;&nbsp;
                                    <span style={green}>Date</span>&nbsp;&nbsp;
                                    <span style={orange}>(</span>
                                    <span style={purple}>1995</span>
                                    <span style={gray}>,</span>&nbsp;
                                    <span style={purple}>7</span>
                                    <span style={gray}>,</span>&nbsp;
                                    <span style={purple}>29</span>
                                    <span style={orange}>)</span>
                                    <span style={gray}>,</span>
                                </div>

                                <div style={{ position: "relative" }}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={white}>email</span>
                                    <span style={gray}>:</span>&nbsp;&nbsp;
                                    <span style={gray}>&#34;</span>
                                    <span
                                        style={emailHover ? hovered : yellow}
                                        onMouseEnter={() => setEmailHover(true)}
                                        onMouseLeave={() => setEmailHover(false)}
                                        onClick={() => window.open("mailto:kyeryoong@gmail.com?subject=안녕하세요, archive-eng을 통해서 이메일 드립니다.")}
                                    >kyeryoong@gmail.com</span>
                                    <span style={gray}>&#34;</span>
                                    <span style={gray}>,</span>
                                </div>

                                <div style={{ position: "relative" }}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={white}>github</span>
                                    <span style={gray}>:</span>&nbsp;&nbsp;
                                    <span style={gray}>&#34;</span>
                                    <span
                                        style={githubHover ? hovered : yellow}
                                        onMouseEnter={() => setGithubHover(true)}
                                        onMouseLeave={() => setGithubHover(false)}
                                        onClick={() => window.open("https://github.com/kyeryoong")}
                                    >github.com/kyeryoong</span>
                                    <span style={gray}>&#34;</span>
                                </div>

                                <span style={red}>&#125;</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.page}>
                            <div className={styles.question}>
                                컴퓨터공학과를 선택한 이유
                            </div>

                            <div className={styles.line} />

                            <div className={styles.answer}>
                                저는 어릴 적부터 컴퓨터에 대한 관심이 많았습니다.<br />
                                항상 컴퓨터를 가지고 무언가를 하고 있었고, 프로그램을 잘못 건드려서 컴퓨터가 이상해질 때도 많았습니다.<br />
                                아르바이트할 때, 컴퓨터 앞에서 문서를 정리했었고,<br />
                                군 복무 중일 때도, 컴퓨터로 기상 관련 정보를 입력하는 업무를 수행했습니다.
                            </div>

                            <div className={styles.hashtagContainer}>
                                <div className={styles.hashtag}>#컴퓨터수리안함</div>
                                <div className={styles.hashtag}>#체크무니안입음</div>
                                <div className={styles.hashtag}>#해킹할줄모름</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.page}>
                            <div className={styles.question}>
                                프론트 엔드 개발자를 선택한 이유
                            </div>

                            <div className={styles.line} />

                            <div className={styles.answer}>
                                직접 눈으로 보여지는 화면을 만드는 것이 너무 즐거웠습니다.<br />
                                특히, 내가 작성한 코드가 바로 브라우저에 나타나는 것이 좋았습니다.
                            </div>

                            <div className={styles.hashtagContainer}>
                                <div className={styles.hashtag}>#감성충만</div>
                                <div className={styles.hashtag}>#휘황찬란</div>
                                <div className={styles.hashtag}>#보기좋은떡이_먹기도좋다</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.page}>
                            <div className={styles.question}>
                                개발자로서 중요하게 생각하는 것
                            </div>

                            <div className={styles.line} />

                            <div className={styles.keyFactorContainer}>
                                <div className={styles.keyFactor}>
                                    새로운 것 배우기
                                </div>

                                <div className={styles.keyFactor}>
                                    다른 사람의 말 경청하기
                                </div>

                                <div className={styles.keyFactor}>
                                    다른 팀원의 분야 이해하기
                                </div>

                                <div className={styles.keyFactor}>
                                    스스로 문제를 해결하기
                                </div>

                                <div className={styles.keyFactor}>
                                    다른 사람의 코드 잘 읽기
                                </div>

                                <div className={styles.keyFactor}>
                                    구글링 잘 하기
                                </div>

                                <div className={styles.keyFactor}>
                                    영어 문서 잘 읽기
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.equipmentPage}>
                            <div className={styles.equipmentHeader}>
                                코딩할 때 사용하는 장비
                            </div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={0}
                                freeMode={true}
                                modules={[FreeMode]}
                            >
                                <SwiperSlide style={{ width: "fit-content", }}>
                                    <div className={styles.gap} />
                                </SwiperSlide>

                                <SwiperSlide style={{ width: "fit-content", height: "fit-content" }}>
                                    <Equipment index={1} text="마우스" subText="로지텍 Vertical Lift" />
                                </SwiperSlide>

                                <SwiperSlide style={{ width: "fit-content", height: "fit-content" }}>
                                    <Equipment index={2} text="키보드" subText="키크론 K8 Retro" />
                                </SwiperSlide>

                                <SwiperSlide style={{ width: "fit-content", height: "fit-content" }}>
                                    <Equipment index={3} text="모니터" subText="삼성전자 F27T350" />
                                </SwiperSlide>

                                <SwiperSlide style={{ width: "fit-content", height: "fit-content" }}>
                                    <Equipment index={4} text="모니터암" subText="카멜 CA-1D" />
                                </SwiperSlide>

                                <SwiperSlide style={{ width: "fit-content", height: "fit-content" }}>
                                    <Equipment index={5} text="의자" subText="코아스 에르체" />
                                </SwiperSlide>

                                <SwiperSlide style={{ width: "fit-content", }}>
                                    <div className={styles.gap} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Footer />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}