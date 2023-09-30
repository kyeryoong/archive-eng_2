import Image from "next/image";

import styles from "./Repository.module.css";

interface RepositoryProps {
  name: string;
  url: string;
}

export default function Repository({ name, url }: RepositoryProps) {
  return (
    <div
      className={styles.repository}
      onClick={() => window.open("https://github.com" + url)}
    >
      <Image
        width={50}
        height={50}
        src="/skills/GitHub_1.png"
        alt=""
        className={styles.repositoryIcon}
      />

      <div className={styles.repositoryName}>{name}</div>
    </div>
  );
}
