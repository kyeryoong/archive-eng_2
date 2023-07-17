import { useState } from "react";

import Image from "next/image";

import styles from "./Skill.module.css";



interface SkillProps {
    name: string,
    newName?: string,
    color: "white" | "black",
    rgb1: number[],
    rgb2?: number[],
    description: string,
}



export default function Skill({ name, newName, color, rgb1, rgb2, description }: SkillProps) {
    const [containerHover, setContainerHover] = useState<boolean>(false);

    return (
        <div
            className={containerHover ? styles.skillClicked : styles.skillNotClicked}
            onMouseEnter={() => setContainerHover(true)}
            onMouseLeave={() => setContainerHover(false)}
            style={
                !containerHover

                    ?

                    (
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
                    )

                    :

                    {
                        backgroundColor: "white",
                    }
            }
        >
            <div style={!containerHover ? { color: color } : { color: `rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})` }}>
                {newName ? newName : name}
            </div>

            {
                containerHover

                &&

                <div className={styles.skillDescription}>
                    {description}
                </div>
            }

            <Image
                className={containerHover ? styles.skillImageColor : styles.skillImageWhite}
                src={"/skills/" + name + "_1.png"}
                alt=""
                width={200}
                height={200}
                style={color === "black" ? (containerHover ? { filter: "brightness(1) invert(0)" } : { filter: "brightness(0)" }) : {}}
            />
        </div>
    )
}