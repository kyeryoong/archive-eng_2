import Image from "next/image";
import styles from "../styles/Abilities.module.css";


type AbilityProps = {
    name: string,
    color: "white" | "black",
    rgb1: number[],
    rgb2?: number[]
}

function Ability({ name, color, rgb1, rgb2 }: AbilityProps) {
    return (
        <div 
            className={styles.ability} 
            style={
                rgb2 

                ?

                { 
                    background: `
                    linear-gradient(135deg, 
                        rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]}) 20%, 
                        rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]}) 80%` 
                }

                :

                { 
                    background: `
                    linear-gradient(135deg, 
                        rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]}) 20%, 
                        rgba(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]}, 0.6) 80%` 
                }
            }
        >
            <div style={{color: color}}>
                {name}
            </div>
            
            <Image className={styles.abilityIcon} src={`/abilities/${name}.png`} alt="" width={120} height={120} />
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
                <Ability name="Python" color="white" rgb1={[74, 138, 189]} rgb2={[255, 223, 89]} />
                <Ability name="Selenium" color="white" rgb1={[67, 176, 42]} />
                <Ability name="Pandas" color="white" rgb1={[21, 4, 88]} />
            </div>

            <div className={styles.abilitiesHeader}>
                Web Development
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="HTML" color="white" rgb1={[241, 101, 41]} />
                <Ability name="CSS" color="white" rgb1={[41, 101, 241]} />
                <Ability name="JavaScript" color="black" rgb1={[240, 219, 79]} />
                <Ability name="TypeScript" color="white" rgb1={[49, 120, 198]} />
                <Ability name="React" color="white" rgb1={[97, 218, 251]} />
                <Ability name="Next JS" color="white" rgb1={[50, 50, 50]} />
            </div>

            <div className={styles.abilitiesHeader}>
                Deploy
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="Netlify" color="white" rgb1={[32, 198, 183]} rgb2={[77, 154, 191]} />
                <Ability name="Vercel" color="white" rgb1={[50, 50, 50]} />
                <Ability name="NGINX" color="white" rgb1={[0, 150, 57]} />
            </div>

            <div className={styles.abilitiesHeader}>
                Cloud
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="Amazon EC2" color="white" rgb1={[255, 153, 0]} />
                <Ability name="Amazon RDS" color="white" rgb1={[76, 114, 242]} />
                <Ability name="Amazon Route 53" color="white" rgb1={[159, 100, 253]} />
            </div>

            <div className={styles.abilitiesHeader}>
                Database
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="MySQL" color="white" rgb1={[83, 130, 161]} rgb2={[255, 165, 24]} />
                <Ability name="MariaDB" color="white" rgb1={[0, 53, 69]} />
            </div>

            <div className={styles.abilitiesHeader}>
                Version Control
            </div>

            <div className={styles.abilitiesSubContainer}>
                <Ability name="Git" color="white" rgb1={[240, 80, 50]} />
                <Ability name="GitHub" color="white" rgb1={[24, 23, 23]} />
            </div>
        </div>
    )
}