import Image from "next/image";

import styles from "./Tech.module.css";



interface TechProps {
    name: string,
    newName?: string,
    iconColor: "white" | "black" | "original",
    textColor: "white" | "black",
    rgb1: number[],
    rgb2?: number[]
}



export default function Tech({ name, newName, iconColor, textColor, rgb1, rgb2 }: TechProps) {
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
            <Image
                width={40}
                height={40}
                src={`/skills/${name}_1.png`}
                alt=""
                className={styles.techIcon}
                style={iconColor === "black" ? { filter: "brightness(0)" } : (iconColor === "white" ? { filter: "brightness(0) invert(1)" } : {})}
            />

            <div className={styles.techName} style={{ color: textColor }}>
                {newName ? newName : name}&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    )
}