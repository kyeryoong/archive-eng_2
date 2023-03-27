import Image from "next/image";

import styles from "../styles/Achievements.module.css";



export default function Achievements() {
    return (
        <div className={styles.achievementsContainer}>
            <div className={styles.achievement}>
                <Image
                    className={styles.achievementImage}
                    src="/achievements/hackerton.png"
                    alt=""
                    width={480}
                    height={160}
                />

                <div className={styles.achievementSubText}>
                    마이 핀테크 서비스 개발경진대회
                </div>

                <div className={styles.achievementMainText}>
                    우수상(학생부)
                </div>

                <div className={styles.achievementDescription}>
                    참가자 본인의 개인정보(금융, 생활, 건강 등)를 직접입력하여 개인 단말에 저장 후 신규 핀테크 서비스 개발하는 대회입니다. 아이디어 우수성, 창의성, 실현가능성 역량을 바탕으로 개발 완성도, 기술력, 창의성, 사업성 등을 종합적으로 평가받게 됩니다.
                </div>
            </div>

            <div className={styles.achievement}>
                <Image
                    className={styles.achievementImage}
                    src="/achievements/hice.png"
                    alt=""
                    width={480}
                    height={160}
                />

                <div className={styles.achievementSubText}>
                    2022 홍익대학교 컴퓨터공학과 졸업프로젝트 전시회
                </div>

                <div className={styles.achievementMainText}>
                    최우수상
                </div>

                <div className={styles.achievementDescription}>
                    컴퓨터공학을 4년간 공부한 학생들이 하나의 프로젝트로 담아낸 작품들을 대중에게 보여드리는 행사입니다. 학생들은 스스로 제안하고, 설계하고, 구현하는 과정에서 많은 것을 배우고 경험하게 됩니다.
                </div>
            </div>

            <div className={styles.achievement}>
                <Image
                    className={styles.achievementImage}
                    src="/achievements/fina.png"
                    alt=""
                    width={480}
                    height={160}
                />

                <div className={styles.achievementSubText}>
                    2019 광주 세계수영선수권대회 
                </div>

                <div className={styles.achievementMainText}>
                    통역 지원
                </div>

                <div className={styles.achievementDescription}>
                    광주와 여수에서 개최된 세계수영선수권대회 기간동안 통역 자원 봉사자로 활동하여, 외국인과 선수단을 대상으로 영어로 통역 서비스를 제공하였습니다.
                </div>
            </div>

            <div className={styles.achievement}>
                <Image
                    className={styles.achievementImage}
                    src="/achievements/tidings.png"
                    alt=""
                    width={480}
                    height={160}
                />

                <div className={styles.achievementSubText}>
                    홍익대학교 교내언론사 영자신문사
                </div>

                <div className={styles.achievementMainText}>
                    기자 활동
                </div>

                <div className={styles.achievementDescription}>
                본교 공식 부속기관으로 매년 3월, 5월, 9월, 11월 1년 간 총 4차례의 영문 잡지를 발행하며 인문, 사회, 문화, 예술, 과학, 기술, 교내 소식 등 다양한 분야의 영문 기사를 작성했습니다.
                </div>
            </div>

            <div className={styles.achievement}>
                <Image
                    className={styles.achievementImage}
                    src="/achievements/hrdk.png"
                    alt=""
                    width={480}
                    height={160}
                />

                <div className={styles.achievementSubText}>
                    한국산업인력공단
                </div>

                <div className={styles.achievementMainText}>
                    정보처리기사
                </div>

                <div className={styles.achievementDescription}>
                    컴퓨터를 효과적으로 활용하기 위해서 하드웨어뿐만 아니라 정교한 소프트웨어와 프로그램을 개발하여 업무의 효율성을 높이고, 궁극적으로 국가발전에 이바지하기 위해서 컴퓨터에 관한 전문적인 지식과 기술을 갖춘 사람을 양성할 목적으로 제정된 자격증입니다.
                </div>
            </div>

            <div className={styles.achievement}>
                <Image
                    className={styles.achievementImage}
                    src="/achievements/opic.png"
                    alt=""
                    width={480}
                    height={160}
                />

                <div className={styles.achievementSubText}>
                    ACTFL OPIc
                </div>

                <div className={styles.achievementMainText}>
                    IH
                </div>

                <div className={styles.achievementDescription}>
                    OPIc는 공인인증 영어 말하기 시험입니다. 컴퓨터를 이용해 응시자 개개인의 질문에 대한 대답을 녹음한 후 미국의 평가 서버에 전송하여 공인평가자가 평가합니다.
                </div>
            </div>
        </div>
    )
}