import { useState } from "react";
import Image from "next/image";

import styles from "../styles/Abilities.module.css";


interface AbilityProps {
    name: string,
    newName?: string,
    color: "white" | "black",
    rgb1: number[],
    rgb2?: number[],
    description?: string
}

function Ability({ name, newName, color, rgb1, rgb2, description }: AbilityProps) {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <div
            className={clicked ? styles.abilityClicked : styles.abilityNotClicked}
            onClick={() => setClicked((prev: boolean) => !prev)}
            style={
                !clicked

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
            <div style={!clicked ? { color: color } : { color: `rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})` }}>
                {newName ? newName : name}
            </div>

            {
                clicked

                &&

                <div className={styles.abilityDescription}>
                    {description}
                </div>
            }

            <Image
                className={!clicked ? styles.abilityIconNotClicked : styles.abilityIconClicked}
                src={!clicked ? `/abilities/${name}.png` : `/abilities/${name}_c.png`}
                alt=""
                width={200}
                height={200}
            />

            {
                clicked

                &&

                <div className={styles.abilityGoToButton} style={{ backgroundColor: `rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})`, color: color }}>
                    Go to Official Page
                </div>
            }
        </div>
    )
}



export default function Abilities() {
    return (
        <div className={styles.abilitiesContainer}>
            <div className={styles.abilitiesHeader}>
                Python
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="Python" color="white" rgb1={[74, 138, 189]} rgb2={[255, 223, 89]} description="General-Purpose Programing Language" />
                <Ability name="Selenium" color="white" rgb1={[67, 176, 42]} description="Tools and Libraries for Browser Automation Tools" />
                <Ability name="Pandas" color="white" rgb1={[21, 4, 88]} description="Python Library for Data Analysis" />
            </div>

            <div className={styles.abilitiesHeader}>
                Web Development
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="HTML" color="white" rgb1={[241, 101, 41]} description="Standard Markup Language for Documents and Web Browsers" />
                <Ability name="CSS" color="white" rgb1={[41, 101, 241]} description="Style Sheet Language for Presentation of Documents" />
                <Ability name="JavaScript" color="black" rgb1={[240, 219, 79]} description="Programming Language for Dynamic Web Page Content" />
                <Ability name="TypeScript" color="white" rgb1={[49, 120, 198]} description="Strongly Typed Programming Language that Builds on JavaScript" />
                <Ability name="React" color="white" rgb1={[97, 218, 251]} description="JavaScript Library for Building User Interfaces" />
                <Ability name="Next JS" newName="Next.js" color="white" rgb1={[50, 50, 50]} description="React-based Framework for Building Web Applications" />
                <Ability name="Firebase" color="white" rgb1={[5, 155, 229]} description="Backend Cloud Computing Service and Application Development Platform" />
            </div>

            <div className={styles.abilitiesHeader}>
                Deploy
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="Netlify" color="white" rgb1={[5, 189, 186]} description="Development Platform for Serverless Backend Services" />
                <Ability name="Vercel" color="white" rgb1={[50, 50, 50]} description="Website Hosting and Deploying Platform" />
                <Ability name="NGINX" color="white" rgb1={[0, 150, 57]} description="Software for Web Serving, Reverse Proxying, and More" />
            </div>

            <div className={styles.abilitiesHeader}>
                Cloud
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="Amazon EC2" color="white" rgb1={[255, 153, 0]} description="Cloud Computing Platform" />
                <Ability name="Amazon RDS" color="white" rgb1={[76, 114, 242]} description="Cloud-based Relational Database" />
                <Ability name="Amazon Route 53" color="white" rgb1={[159, 100, 253]} description="Cloud-based Domain Name System" />
            </div>

            <div className={styles.abilitiesHeader}>
                Database
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="MySQL" color="white" rgb1={[83, 130, 161]} rgb2={[255, 165, 24]} description="SQL Database Software Engine" />
                <Ability name="MariaDB" color="white" rgb1={[53, 65, 104]} description="Fork of the MySQL Relational Database" />
            </div>

            <div className={styles.abilitiesHeader}>
                Version Control
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="Git" color="white" rgb1={[240, 80, 50]} description="Software for Version Controls of Files" />
                <Ability name="GitHub" color="white" rgb1={[24, 23, 23]} description="Hosting Service for Version Control" />
            </div>
        </div>
    )
}