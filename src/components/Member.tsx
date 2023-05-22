import Image from "next/image";

import styles from "./Member.module.css";



interface MemberProps {
    name: string,
    id: string,
    position: string,
    url: number
}



export default function Member({ name, id, position, url }: MemberProps) {
    return (
        <div className={styles.member}>
            <Image
                width={60}
                height={60}
                src={`https://avatars.githubusercontent.com/u/${url}`}
                alt=""
                className={styles.memberImage}
            />

            <div className={styles.memberInfo}>
                <div className={styles.memberInfoNameId}>
                    <div className={styles.memberInfoName}>
                        {name}
                    </div>

                    <div className={styles.memberInfoId} onClick={() => window.open("https://github.com/" + id)}>
                        @{id}
                    </div>
                </div>

                <div className={styles.memberInfoPosition}>
                    {position}
                </div>
            </div>
        </div>
    )
}