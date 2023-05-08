import { useState } from "react";

import Image from "next/image";

import styles from "../../styles/Skills.module.css";



interface SkillProps {
    name: string,
    newName?: string,
    color: "white" | "black",
    rgb1: number[],
    rgb2?: number[],
    description: string,
}

function Skill({ name, newName, color, rgb1, rgb2, description }: SkillProps) {
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
                src={"/skills/" + name + ".png"}
                alt=""
                width={200}
                height={200}
                style={color === "black" ? (containerHover ? { filter: "brightness(1) invert(0)" } : { filter: "brightness(0)" }) : {}}
            />
        </div>
    )
}



export default function Skills() {
    return (
        <div className={styles.container}>
            <div className={styles.skillsHeader}>
                Python
            </div>

            <div className={styles.skillsSubContainer}>
                <Skill
                    name="Python"
                    color="white"
                    rgb1={[74, 138, 189]} rgb2={[255, 223, 89]}
                    description="General-Purpose Programing Language"
                />
                <Skill
                    name="Selenium"
                    color="white"
                    rgb1={[67, 176, 42]}
                    description="Tools and Libraries for Browser Automation"
                />
                <Skill
                    name="Pandas"
                    color="white"
                    rgb1={[21, 4, 88]}
                    description="Python Library for Data Analysis"
                />
            </div>

            <div className={styles.skillsHeader}>
                Web Development
            </div>

            <div className={styles.skillsSubContainer}>
                <Skill
                    name="HTML"
                    color="white"
                    rgb1={[241, 101, 41]}
                    description="Standard Markup Language for Documents and Web Browsers"
                />
                <Skill
                    name="CSS"
                    color="white"
                    rgb1={[41, 101, 241]}
                    description="Style Sheet Language for Presentation of Documents"
                />
                <Skill
                    name="JavaScript"
                    color="black"
                    rgb1={[240, 219, 79]}
                    description="Programming Language for Dynamic Web Page Content"
                />
                <Skill
                    name="TypeScript"
                    color="white"
                    rgb1={[49, 120, 198]}
                    description="Strongly Typed Programming Language that Builds on JavaScript"
                />
                <Skill
                    name="React"
                    color="white"
                    rgb1={[97, 218, 251]}
                    description="JavaScript Library for Building User Interfaces"
                />
                <Skill
                    name="Redux"
                    color="white"
                    rgb1={[118, 74, 188]}
                    description="JavaScript library for Managing State of User Interfaces"
                />
                <Skill
                    name="Next JS" newName="Next.js"
                    color="white"
                    rgb1={[70, 70, 70]}
                    description="React-based Framework for Building Web Applications"
                />
                <Skill
                    name="Firebase"
                    color="white"
                    rgb1={[5, 155, 229]}
                    description="Backend Cloud Computing Service and Application Development Platform"
                />
            </div>

            <div className={styles.skillsHeader}>
                Deploy
            </div>

            <div className={styles.skillsSubContainer}>
                <Skill
                    name="Netlify"
                    color="white"
                    rgb1={[5, 189, 186]}
                    description="Development Platform for Serverless Backend Services"
                />
                <Skill
                    name="Vercel"
                    color="white"
                    rgb1={[70, 70, 70]}
                    description="Website Hosting and Deploying Platform"
                />
            </div>

            <div className={styles.skillsHeader}>
                Cloud
            </div>

            <div className={styles.skillsSubContainer}>
                <Skill
                    name="Amazon EC2"
                    color="white"
                    rgb1={[255, 153, 0]}
                    description="Cloud Computing Platform"
                />
                <Skill
                    name="Amazon RDS"
                    color="white"
                    rgb1={[76, 114, 242]}
                    description="Cloud-based Relational Database"
                />
                <Skill
                    name="Amazon Route 53"
                    color="white"
                    rgb1={[159, 100, 253]}
                    description="Cloud-based Domain Name System"
                />
            </div>

            <div className={styles.skillsHeader}>
                Database
            </div>

            <div className={styles.skillsSubContainer}>
                <Skill
                    name="MySQL"
                    color="white"
                    rgb1={[83, 130, 161]} rgb2={[255, 165, 24]}
                    description="SQL Database Software Engine"
                />
                <Skill
                    name="MariaDB"
                    color="white"
                    rgb1={[53, 65, 104]}
                    description="Fork of the MySQL Relational Database"
                />
            </div>

            <div className={styles.skillsHeader}>
                Version Control
            </div>

            <div className={styles.skillsSubContainer}>
                <Skill
                    name="Git"
                    color="white"
                    rgb1={[240, 80, 50]}
                    description="Software for Version Controls of Files"
                />
                <Skill
                    name="GitHub"
                    color="white"
                    rgb1={[24, 23, 23]}
                    description="Hosting Service for Version Control"
                />
            </div>
        </div>
    )
}