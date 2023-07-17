import { useState, useEffect, useRef } from "react";
import { AchievementsProps, achievementsData } from "@/data/achievementsData";

import Image from "next/image";

import styles from "./index.module.css";



export default function Achievements() {
    const [hover, setHover] = useState<number>(0);

    const [showModal, setShowModal] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const [achievementIndex, setAchievementIndex] = useState<number>(0);
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [imageFull, setImageFull] = useState<boolean>(false);



    return (
        <div className={styles.container}>
            {
                achievementsData.map((elem: AchievementsProps, index: number) => (
                    <div
                        className={hover === 0 ? styles.achievementNormal : (hover === index ? styles.achievementSelected : styles.achievementNotSelected)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(0)}
                        key={index}
                    >
                        <Image
                            width={1500}
                            height={1500}
                            src={`/achievements/image/${index + 1}.jpg`}
                            alt=""
                            className={hover === index ? styles.achievementImageSelected : styles.achievementImageNotSelected}
                        />

                        <div className={styles.achievementName}>
                            <div className={styles.achievementNameTop}>
                                {elem.korTitle}
                            </div>

                            <div className={styles.achievementNameCenter}>
                                {elem.engTitle}
                            </div>

                            <div className={styles.achievementNameBottom}>
                                {elem.info}
                            </div>
                        </div>

                        <div
                            className={hover === index ? styles.moreButtonShow : styles.moreButtonHide}
                            onClick={() => {
                                setShowModal(true);
                                setAchievementIndex(index);
                                setImageIndex(1);
                            }}
                        >
                            더보기
                        </div>
                    </div>
                ))
            }



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
                        <Image
                            width={1500}
                            height={1500}
                            src={`/achievements/image/${achievementIndex + 1}/${imageIndex}.jpg`}
                            alt=""
                            className={imageFull ? styles.imageFull : styles.imageNormal}
                        />

                        <div className={styles.expandButton} onClick={() => setImageFull((prev) => !prev)}>
                            <div className={styles.expandButtonText}>
                                {imageFull ? "작게 보기" : "크게 보기"}
                            </div>

                            <Image
                                width={40}
                                height={40}
                                src={imageFull ? "/minimize.png" : "/maximize.png"}
                                alt=""
                                className={styles.expandButtonImage}
                            />
                        </div>

                        <div
                            className={styles.closeButton}
                            onClick={() => {
                                setShowModal(false);
                                setImageFull(false);
                            }}
                        >
                            <Image
                                width={40}
                                height={40}
                                src={"/close.png"}
                                alt=""
                                className={styles.closeButtonImage}
                            />
                        </div>

                        <Image
                            width={40}
                            height={40}
                            alt=""
                            src={"/left.png"}
                            className={styles.imageLeftButton}
                            style={imageIndex == 1 || imageFull ? { opacity: "0", cursor: "default" } : {}}
                            onClick={() => {
                                if (imageIndex !== 1 && !imageFull) {
                                    setImageIndex((prev) => prev - 1);
                                }
                            }}
                        />

                        <Image
                            width={40}
                            height={40}
                            alt=""
                            src={"/right.png"}
                            className={styles.imageRightButton}
                            style={imageIndex == achievementsData[achievementIndex]?.text?.length || imageFull ? { opacity: "0", cursor: "default" } : {}}
                            onClick={() => {
                                if (imageIndex !== achievementsData[achievementIndex]?.text?.length && !imageFull) {
                                    setImageIndex((prev) => prev + 1);
                                }
                            }}
                        />



                        <div className={styles.pagination} style={imageFull ? { opacity: "0", bottom: "-20px" } : {}}>
                            {
                                achievementsData[achievementIndex]?.text?.map((elem: any, index: number) => (
                                    <div key={index} className={index + 1 === imageIndex ? styles.paginationSelected : styles.paginationNotSelected} onClick={() => setImageIndex(index + 1)} />
                                ))
                            }
                        </div>
                    </div>

                    <div className={imageFull ? styles.modalBottomHide : styles.modalBottomShow}>
                        <div className={styles.title}>
                            {achievementsData[achievementIndex]?.korTitle}
                        </div>

                        <div className={styles.date}>
                            {achievementsData[achievementIndex]?.start}
                            &nbsp;~&nbsp;
                            {achievementsData[achievementIndex]?.finish}
                        </div>

                        <div className={styles.mainText}>
                            {achievementsData[achievementIndex]?.text[imageIndex - 1]?.mainText}
                        </div>

                        <div className={styles.subText}>
                            {achievementsData[achievementIndex ]?.text[imageIndex - 1]?.subText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}