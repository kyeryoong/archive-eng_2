import Skill from "@/components/Skill";

import styles from "./index.module.css";



export default function Skills() {
    return (
        <div className={styles.container}>
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
                    description="JavaScript Library for Managing State of User Interfaces"
                />
                <Skill
                    name="Next js" newName="Next.js"
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