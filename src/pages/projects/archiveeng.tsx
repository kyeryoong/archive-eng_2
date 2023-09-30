import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import Demo from "@/components/Demo";
import Member from "@/components/Member";
import Repository from "@/components/Repository";
import Tech from "@/components/Tech";

import Heading from "../../../themes/Heading";
import Paragraph from "../../../themes/Paragraph";

import styles from "./archiveeng.module.css";

export default function Archiveeng() {
  const [position, setPosition] = useState<number>(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

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

  let refPositions: number[] = [
    ref1.current?.getBoundingClientRect().top !== undefined
      ? Math.abs(ref1.current?.getBoundingClientRect().top)
      : 0,
    ref2.current?.getBoundingClientRect().top !== undefined
      ? Math.abs(ref2.current?.getBoundingClientRect().top)
      : 0,
    ref3.current?.getBoundingClientRect().top !== undefined
      ? Math.abs(ref3.current?.getBoundingClientRect().top)
      : 0,
    ref4.current?.getBoundingClientRect().top !== undefined
      ? Math.abs(ref4.current?.getBoundingClientRect().top)
      : 0,
  ];

  let currentRef: number = refPositions.findIndex(
    (elem) => elem === Math.min(...refPositions)
  );

  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.title1}>포트폴리오 사이트</div>

        <div className={styles.title2}>아카이빙</div>

        <Image
          width={600}
          height={200}
          src="/projects/archiveeng/logo.png"
          alt=""
          className={styles.titleImage}
        />
      </div>

      <div
        className={styles.navigator}
        style={
          position > 400
            ? { top: `150px` }
            : { top: `calc(550px - ${position}px)`, transition: "0s" }
        }
      >
        {[
          [0, "개요", scrollTo1],
          [1, "개발 팀원", scrollTo2],
          [3, "소스 코드", scrollTo3],
          [4, "사용 기술", scrollTo4],
        ].map((elem: any[], index: number) => (
          <div
            key={index}
            className={
              currentRef === index
                ? styles.navigatorButtonOn
                : styles.navigatorButtonOff
            }
            onClick={elem[2]}
          >
            <Image
              width={25}
              height={25}
              src={`/projects/${elem[0]}.png`}
              alt=""
              className={
                currentRef === index
                  ? styles.navigatorIconOn
                  : styles.navigatorIconOff
              }
            />
            <div
              className={
                currentRef === index
                  ? styles.navigatorTextOn
                  : styles.navigatorTextOff
              }
            >
              {elem[1]}
            </div>
          </div>
        ))}
      </div>

      <Demo url={"archiveeng.com"} />

      <div className={styles.containerBottom}>
        <div className={styles.infoContainer} ref={ref1}>
          <Heading>개요</Heading>

          <Paragraph>
            archive-eng은 프론트 엔드 개발자 김영우의 포트폴리오 사이트입니다.
            archive-eng은 archive와 eng을 합한 것이며, eng은 다음과 같이 두 가지
            뜻을 내포하고 있습니다. 첫 번째로는, 전공 분야인
            컴퓨터&#34;공학&#34;의 engineering의 의미를 담고 있습니다. 두
            번째로는, 영자 신문사와 통역 자원봉사 활동과 관련된 &#34;영어&#34;의
            english를 뜻하기도 합니다. 4년 동안 학부 생활을 하면서 했던 다양한
            활동들, 진행했던 프로젝트, 수상 내역들을 모아놓았습니다. 그리고, 이
            사이트는 Notion이나 PDF 파일 대신 포트폴리오 제출 용도로
            제작되었습니다.
          </Paragraph>
        </div>

        <div className={styles.infoContainer} ref={ref2}>
          <Heading>개발 팀원</Heading>

          <div className={styles.memberContainer}>
            <Member
              name="김영우"
              id="kyeryoong"
              position="Programmer"
              url={98510309}
            />
          </div>
        </div>

        <div className={styles.infoContainer} ref={ref3}>
          <Heading>소스 코드</Heading>

          <div className={styles.repositoryContainer}>
            <Repository name="GitHub 페이지" url="/kyeryoong/archive-eng" />
          </div>
        </div>

        <div className={styles.infoContainer} ref={ref4}>
          <Heading>사용 기술</Heading>

          <div className={styles.techContainer}>
            <div className={styles.techHeader}>프론트 엔드</div>

            <div className={styles.techList}>
              <Tech
                name="HTML"
                iconColor="white"
                textColor="white"
                rgb1={[241, 101, 41]}
              />
              <Tech
                name="CSS"
                iconColor="white"
                textColor="white"
                rgb1={[41, 101, 241]}
              />
              <Tech
                name="TypeScript"
                iconColor="white"
                textColor="white"
                rgb1={[49, 120, 198]}
              />
              <Tech
                name="Next js"
                newName="Next.js"
                iconColor="white"
                textColor="white"
                rgb1={[70, 70, 70]}
              />
            </div>
          </div>

          <div className={styles.techContainer}>
            <div className={styles.techHeader}>데이터베이스</div>

            <div className={styles.techList}>
              <Tech
                name="MongoDB"
                iconColor="white"
                textColor="white"
                rgb1={[0, 104, 74]}
              />
            </div>
          </div>

          <div className={styles.techContainer}>
            <div className={styles.techHeader}>배포 & 운영</div>

            <div className={styles.techList}>
              <Tech
                name="Vercel"
                iconColor="white"
                textColor="white"
                rgb1={[70, 70, 70]}
              />
            </div>
          </div>

          <div className={styles.techContainer}>
            <div className={styles.techHeader}>버전 관리</div>

            <div className={styles.techList}>
              <Tech
                name="Git"
                iconColor="white"
                textColor="white"
                rgb1={[240, 80, 50]}
              />
              <Tech
                name="GitHub"
                iconColor="white"
                textColor="white"
                rgb1={[70, 70, 70]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
