import { useState, useRef } from "react";

import Image from "next/image";

import { achievementsDatabase } from "../../database/achievementsDatabase";

import styles from "../styles/Achievements.module.css";



export default function Achievements() {
    const [hover, setHover] = useState<number>(0);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [achievementIndex, setAchievementIndex] = useState<number>(0);
    const [imageIndex, setImageIndex] = useState<number>(0);

    const [imageFull, setImageFull] = useState<boolean>(false);

    const data: any = achievementsDatabase;

    const modalRef = useRef<HTMLDivElement>(null);



    return (
        <div className={styles.container}>
            <div
                className={hover === 0 ? styles.achievementNormal : (hover === 1 ? styles.achievementSelected : styles.achievementNotSelected)}
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(0)}
            >
                <img
                    src="/achievements/image/hice.jpg" alt=""
                    className={hover === 1 ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                />

                <div className={styles.achievementName}>
                    <div className={styles.achievementNameTop}>
                        홍익대학교 컴퓨터공학과 졸업전시회
                    </div>

                    <div className={styles.achievementNameCenter}>
                        Hongik University Computer Engineering Graduation Exhibition
                    </div>

                    <div className={styles.achievementNameBottom}>
                        최우수상
                    </div>
                </div>

                <div
                    className={hover === 1 ? styles.moreButtonShow : styles.moreButtonHide}
                    onClick={() => {
                        setShowModal(true);
                        setAchievementIndex(1);
                        setImageIndex(1);
                    }}
                >
                    더보기
                </div>
            </div>

            <div
                className={hover === 0 ? styles.achievementNormal : (hover === 2 ? styles.achievementSelected : styles.achievementNotSelected)}
                onMouseEnter={() => setHover(2)}
                onMouseLeave={() => setHover(0)}
            >
                <img
                    src="/achievements/image/hackerton.jpg" alt=""
                    className={hover === 2 ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                />

                <div className={styles.achievementName}>
                    <div className={styles.achievementNameTop}>
                        마이 핀테크 서비스 해커톤
                    </div>

                    <div className={styles.achievementNameCenter}>
                        My Fintech Service Hackerton
                    </div>

                    <div className={styles.achievementNameBottom}>
                        우수상 <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>(학생부)</span>
                    </div>
                </div>

                <div
                    className={hover === 2 ? styles.moreButtonShow : styles.moreButtonHide}
                    onClick={() => {
                        setShowModal(true);
                        setAchievementIndex(2);
                        setImageIndex(1);
                    }}
                >
                    더보기
                </div>
            </div>

            <div
                className={hover === 0 ? styles.achievementNormal : (hover === 3 ? styles.achievementSelected : styles.achievementNotSelected)}
                onMouseEnter={() => setHover(3)}
                onMouseLeave={() => setHover(0)}
            >
                <img
                    src="/achievements/image/fina.jpg" alt=""
                    className={hover === 3 ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                />

                <div className={styles.achievementName}>
                    <div className={styles.achievementNameTop}>
                        광주 FINA 세계수영선수권대회
                    </div>

                    <div className={styles.achievementNameCenter}>
                        Gwangju FINA World Championships
                    </div>

                    <div className={styles.achievementNameBottom}>
                        자원봉사
                    </div>
                </div>

                <div
                    className={hover === 3 ? styles.moreButtonShow : styles.moreButtonHide}
                    onClick={() => {
                        setShowModal(true);
                        setAchievementIndex(3);
                        setImageIndex(1);
                    }}
                >
                    더보기
                </div>
            </div>

            <div
                className={hover === 0 ? styles.achievementNormal : (hover === 4 ? styles.achievementSelected : styles.achievementNotSelected)}
                onMouseEnter={() => setHover(4)}
                onMouseLeave={() => setHover(0)}
            >
                <img
                    src="/achievements/image/tidings.jpg" alt=""
                    className={hover === 4 ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                />

                <div className={styles.achievementName}>
                    <div className={styles.achievementNameTop}>
                        홍익대학교 영자신문사
                    </div>

                    <div className={styles.achievementNameCenter}>
                        Hongik Tidings
                    </div>

                    <div className={styles.achievementNameBottom}>
                        정기자
                    </div>
                </div>

                <div
                    className={hover === 4 ? styles.moreButtonShow : styles.moreButtonHide}
                    onClick={() => {
                        setShowModal(true);
                        setAchievementIndex(4);
                        setImageIndex(1);
                    }}
                >
                    더보기
                </div>
            </div>

            <div
                className={showModal ? styles.backgroundShow : styles.backgroundHide}
                ref={modalRef}
                onClick={(event: any) => {
                    if (event.target == modalRef.current) {
                        setShowModal(false);
                    }
                }}
            >
                <div className={showModal ? styles.modalShow : styles.modalHide}>
                    <div className={imageFull ? styles.modalTopFull : styles.modalTopNormal}>
                        <img
                            src={"/achievements/image/" + achievementIndex + "/" + imageIndex + ".jpg"}
                            alt=""
                            className={imageFull ? styles.imageFull : styles.imageNormal}
                        />

                        <div className={styles.expandButton} onClick={() => setImageFull((prev) => !prev)}>
                            <div className={styles.expandButtonText}>
                                {imageFull ? "작게 보기" : "크게 보기"}
                            </div>

                            <img src={imageFull ? "/minimize.png" : "/maximize.png"} alt="" className={styles.expandButtonImage} />
                        </div>

                        <div
                            className={styles.closeButton}
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            <img src={"/close.png"} alt="" className={styles.closeButtonImage} />
                        </div>

                        <img
                            src={"/left.png"}
                            className={styles.imageLeftButton}
                            style={imageIndex == 1 || imageFull ? { opacity: "0", cursor: "default" } : {}}
                            onClick={() => {
                                if (imageIndex !== 1 && !imageFull) {
                                    setImageIndex((prev) => prev - 1);
                                }
                            }}
                        />

                        <img
                            src={"/right.png"}
                            className={styles.imageRightButton}
                            style={imageIndex == data.data?.[achievementIndex - 1]?.length || imageFull ? { opacity: "0", cursor: "default" } : {}}
                            onClick={() => {
                                if (imageIndex !== data.data?.[achievementIndex - 1]?.length && !imageFull) {
                                    setImageIndex((prev) => prev + 1);
                                }
                            }}
                        />

                        <div className={styles.pagination} style={imageFull ? {opacity: "0", bottom: "-20px"} : {}}>
                            {
                                data.data?.[achievementIndex - 1]?.map((elem: any, index: number) => (
                                    <div key={index} className={index + 1 === imageIndex ? styles.paginationSelected : styles.paginationNotSelected} onClick={() => setImageIndex(index + 1)} />
                                ))
                            }
                        </div>
                    </div>

                    <div className={imageFull ? styles.modalBottomHide : styles.modalBottomShow}>
                        <div className={styles.title}>
                            {data.metaData?.[achievementIndex - 1]?.title}
                        </div>

                        <div className={styles.date}>
                            {data.metaData?.[achievementIndex - 1]?.start}
                            &nbsp;~&nbsp;
                            {data.metaData?.[achievementIndex - 1]?.finish}
                        </div>

                        <div className={styles.mainText}>
                            {data.data?.[achievementIndex - 1]?.[imageIndex - 1]?.mainText}
                        </div>

                        <div className={styles.subText}>
                            {data.data?.[achievementIndex - 1]?.[imageIndex - 1]?.subText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}