import { useState } from "react";

import Image from "next/image";

import { achievementsDatabase } from "../../database/achievementsDatabase";

import styles from "../styles/Achievements.module.css";



export default function Achievements() {
    const [hover, setHover] = useState<number>(0);

    const [showContainer, setShowContainer] = useState<boolean>(false);
    const [achievementIndex, setAchievementIndex] = useState<number>(0);
    const [imageIndex, setImageIndex] = useState<number>(0);

    const [imageHover, setImageHover] = useState<boolean>(false);
    const [imageFull, setImageFull] = useState<boolean>(false);

    const data: any = achievementsDatabase;



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
                        setShowContainer(true);
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
                        setShowContainer(true);
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
                        setShowContainer(true);
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
                        setShowContainer(true);
                        setAchievementIndex(4);
                        setImageIndex(1);
                    }}
                >
                    더보기
                </div>
            </div>

            <div className={showContainer ? styles.backgroundShow : styles.backgroundHide}>
                <div className={showContainer ? styles.backgroundContainerShow : styles.backgroundContainerHide}>
                    <img
                        src={"/achievements/image/" + achievementIndex + "/" + imageIndex + ".jpg"}
                        alt=""
                        className={imageFull ? styles.imageFull : styles.imageNormal}
                        onMouseEnter={() => setImageHover(true)}
                        onMouseLeave={() => setImageHover(false)}
                    />

                    <div className={styles.expandButtonWrapper} onClick={() => setImageFull((prev) => !prev)}>
                        <div className={styles.expandButtonText}>
                            {imageFull ? "작게 보기" : "크게 보기"}
                        </div>

                        <img src={imageFull ? "/minimize.png" : "/maximize.png"} alt="" className={styles.expandButtonImage} />
                    </div>

                    <div
                        className={styles.closeButtonWrapper}
                        onClick={() => {
                            setShowContainer(false);
                            setTimeout(() => setImageFull(false), 500);
                        }}
                    >
                        <img src={"/close.png"} alt="" className={styles.closeButtonImage} />
                    </div>

                    <div className={imageFull ? styles.descriptionHide : styles.descriptionNormal}>
                        <div>
                            <div className={styles.pagination}>
                                {
                                    data.data?.[achievementIndex - 1]?.map((elem: any, index: number) => (
                                        <div key={index} className={index + 1 === imageIndex ? styles.paginationSelected : styles.paginationNotSelected} onClick={() => setImageIndex(index + 1)} />
                                    ))
                                }
                            </div>

                            <div className={styles.title}>
                                {data.metaData?.[achievementIndex - 1]?.title}
                            </div>

                            <div className={styles.date}>
                                {data.metaData?.[achievementIndex - 1]?.start}
                                &nbsp;~&nbsp;
                                {data.metaData?.[achievementIndex - 1]?.finish}
                            </div>
                        </div>

                        <div>
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
        </div>
    )
}