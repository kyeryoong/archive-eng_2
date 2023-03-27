import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";



function TypingAnimation({ mainWords, subWords }: { mainWords: string[], subWords: string[] }) {
    const [index, setIndex] = useState<number>(0);
    const [randomIndex1, setRandomIndex1] = useState<number>(Math.floor(Math.random() * 4));
    const [randomIndex2, setRandomIndex2] = useState<number>(Math.floor(Math.random() * 4));

    const [mainText, setMainText] = useState<string>("");
    const [subText, setSubText] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [increase, setIncrease] = useState<boolean>(true);

    const [cursor, setCursor] = useState<number>(0);

    const animationText1 = mainWords[index];
    var animationText2 = subWords[index];

    const randomWords1: string[] = ["Smart", "Superb", "Stylish", "Skillful"];
    const randomWords2: string[] = ["Ambitious", "Amazing", "Awesome", "Active"];

    if (subWords[index] === "ASAP") {
        animationText2 = "Also, " + randomWords1[randomIndex1] + " and " + randomWords2[randomIndex2] + " Programmer";
    }



    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (increase) {
                setMainText((prev: string) => {
                    if (count > animationText1.length - 1) {
                        return animationText1
                    }

                    else {
                        setCount(count + 1);

                        return prev + animationText1[count]
                    }
                })

                setSubText((prev: string) => {
                    if (count === animationText2.length) {
                        setIncrease(false);

                        return animationText2
                    }

                    else {
                        setCount(count + 1);

                        return prev + animationText2[count]
                    }
                });
            }

            else {
                setSubText((prev) => {
                    if (count === 0) {
                        setIncrease(true);
                        setMainText("");
                        setIndex((prev: number) => (prev + 1) % mainWords.length);
                        setRandomIndex1(Math.floor(Math.random() * 4));
                        setRandomIndex2(Math.floor(Math.random() * 4));

                        return ""
                    }

                    else {
                        setCount(count - 1);

                        return prev.substring(0, count)
                    }
                });
            }

            setCursor((prev: number) => (prev + 1) % 8);
        }, 120);


        return () => {
            clearInterval(typingInterval);
        };
    });



    return (
        <span>
            <div className={styles.animationText1}>
                {mainText}
            </div>

            <div className={styles.animationText2}>
                {subText}
                {(cursor === 0 || cursor === 1 || cursor === 2 || cursor === 3) && "_"}
            </div>
        </span>
    )
};



export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <div>
                <TypingAnimation
                    mainWords={["#FE", "#ASAP", "#FBWE"]}
                    subWords={["Frontend Developer", "ASAP", "For Better Web Experience"]}
                />
            </div>

            <div className={styles.line} />

            <div className={styles.subText}>
                @kyeryoong
            </div>

            <div className={styles.subText}>
                Kim Young-Woo
            </div>

            <div className={styles.subText}>
                김영우
            </div>
        </div>
    )
}