import { useState, useEffect } from "react";
import Image from "next/image";

import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/Profile.module.css";
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
    return (
        <div className={styles.container}>
            <div className={styles.question}>
                개발할 때 사용하는 장비에 대해서 알려주세요.
            </div>

            <Swiper
                slidesPerView="auto"
                spaceBetween={0}
            >
                <SwiperSlide style={{ width: "15vw" }}></SwiperSlide>

                <SwiperSlide style={{ width: "max(360px, 20vw)", height: "max(450px, 25vw)" }}>
                    <Equipment index={1} text="마우스" subText="로지텍 Vertical Lift" />
                </SwiperSlide>

                <SwiperSlide style={{ width: "max(360px, 20vw)", height: "max(450px, 30vw)" }}>
                    <Equipment index={2} text="키보드" subText="키크론 K8 Retro" />
                </SwiperSlide>

                <SwiperSlide style={{ width: "max(360px, 20vw)", height: "max(450px, 30vw)" }}>
                    <Equipment index={3} text="모니터" subText="삼성전자 F27T350" />
                </SwiperSlide>

                <SwiperSlide style={{ width: "max(360px, 20vw)", height: "max(450px, 30vw)" }}>
                    <Equipment index={4} text="모니터암" subText="카멜 CA-1D" />
                </SwiperSlide>

                <SwiperSlide style={{ width: "max(360px, 20vw)", height: "max(450px, 30vw)" }}>
                    <Equipment index={5} text="의자" subText="코아스 에르체" />
                </SwiperSlide>

                <SwiperSlide style={{ width: "15vw" }}></SwiperSlide>
            </Swiper>
        </div>
    )
}