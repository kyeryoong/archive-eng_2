import { useState } from 'react';
import { useEffect } from 'react';

import styles from "../styles/Home.module.css";



function TypingAnimation({ mainWords, subWords }: { mainWords: string[], subWords: string[] }) {
    const [index, setIndex] = useState<number>(0);

    const [mainText, setMainText] = useState<string>("");
    const [subText, setSubText] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [increase, setIncrease] = useState<boolean>(true);

    const [cursor, setCursor] = useState<number>(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (increase) {
                setMainText((prev: string) => {
                    if (count > mainWords[index].length - 1) {

                        return mainWords[index]
                    }

                    else {
                        setCount(count + 1);

                        return prev + mainWords[index][count];
                    }
                })

                setSubText((prev: string) => {
                    if (count === subWords[index].length) {
                        setIncrease(false);
                        return subWords[index]
                    }

                    else {
                        setCount(count + 1);

                        return prev + subWords[index][count];
                    }
                });
            }

            else {
                setSubText((prev) => {
                    if (count === 0) {
                        setIncrease(true);
                        setMainText("");

                        setIndex((prev: number) => (prev + 1) % mainWords.length);

                        return ""
                    }

                    else {
                        setCount(count - 1);

                        return prev.substring(0, count);
                    }
                });
            }

            setCursor((prev: number) => (prev + 1) % 8);
        }, 150);


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
                    mainWords={["#FE", "#FBWE"]}
                    subWords={["Frontend Developer", "For Better Web Experience"]}
                />
            </div>

            <div className={styles.line} />


            <div className={styles.subText}>
                @kyeryoong
            </div>


            <div className={styles.subText}>
                Kim Young-Woo
            </div>
        </div>
    )
}