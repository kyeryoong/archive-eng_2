import { useEffect, useState } from "react";
import { articlesDatabase, articleProps } from "../../database/articlesDatabase";

import Image from "next/image";

import styles from "../styles/Articles.module.css";



export default function Articles() {
    const [index, setIndex] = useState<number>(0);

    const [searchTitle, setSearchTitle] = useState<string>("");
    const [searchSection, setSearchSection] = useState<string[]>([]);
    const [order, setOrder] = useState<number>(0);

    const [articlesData, setArticlesData] = useState<articleProps | any>(articlesDatabase);

    useEffect(() => {
        if (searchTitle !== "" && searchSection.length !== 0) {
            setArticlesData(articlesDatabase.filter((elem: articleProps) => elem.title.toLowerCase().includes(searchTitle.toLowerCase()) && searchSection.includes(elem.section)));
        }

        else if (searchTitle !== "" && searchSection.length === 0) {
            setArticlesData(articlesDatabase.filter((elem: articleProps) => elem.title.toLowerCase().includes(searchTitle.toLowerCase())));
        }

        else if (searchTitle === "" && searchSection.length !== 0) {
            setArticlesData(articlesDatabase.filter((elem: articleProps) => searchSection.includes(elem.section)));
        }

        else {
            setArticlesData(articlesDatabase);
        }
    }, [searchTitle, searchSection])



    function Section({ section }: { section: string }) {
        return (
            <div
                className={searchSection.includes(section) ? styles.searchSectionIncluded : styles.searchSectionNotIncluded}
                onClick={() => {
                    var temp = searchSection;
                    if (searchSection.includes(section)) {
                        temp = temp.filter((elem) => elem !== section);
                    }

                    else {
                        temp.push(section);
                    }

                    setSearchSection([...temp]);
                }}
            >
                <Image src={"/articles/sections/" + section.toLowerCase() + ".png"} alt="" width={30} height={30} className={searchSection.includes(section) ? styles.searchSectionImageIncluded : styles.searchSectionImageNotIncluded} />

                <div className={searchSection.includes(section) ? styles.searchSectionTextIncluded : styles.searchSectionTextNotIncluded}>
                    {section}
                </div>
            </div>
        )
    }



    function Article({ id, section, title, year, month, chiefEditor, keyword, link }: articleProps) {
        return (
            <div className={styles.article} onClick={() => setIndex(id)}>
                <Image src={"/articles/images/" + id + ".png"} alt="" width={720} height={360} className={styles.articleImage} />

                <div className={styles.articleInfo}>
                    <div className={styles.section}>
                        <Image src={"/articles/sections/" + section.toLowerCase() + ".png"} alt="" width={30} height={30} className={styles.sectionImage} />

                        <div className={styles.sectionText}>
                            {section}
                        </div>
                    </div>

                    <div className={styles.title}>
                        {title}
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div>
            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <input
                        className={styles.searchBarInputBox}
                        placeholder="검색어를 입력하세요."
                        value={searchTitle}
                        onChange={(event) => setSearchTitle(event.target.value)}
                    />
                </div>

                <div className={styles.searchSection}>
                    <Section section="Architecture" />
                    <Section section="Art" />
                    <Section section="Global" />
                    <Section section="Issue" />
                    <Section section="Medical" />
                    <Section section="Technology" />
                </div>

                {
                    articlesData.length > 0

                        ?

                        <div className={styles.articlesContainer}>
                            {
                                articlesData.map((data: articleProps) => (
                                    <Article
                                        key={data.id}
                                        id={data.id}
                                        section={data.section}
                                        title={data.title}
                                        year={data.year}
                                        month={data.month}
                                        chiefEditor={data.chiefEditor}
                                        reviser={data.reviser}
                                        keyword={data.keyword}
                                        link={data.link}
                                    />
                                ))
                            }
                        </div>

                        :

                        <div className={styles.noResultsFounded}>
                            No Results Founded
                        </div>
                }
            </div>

            <div className={index !== 0 ? styles.backgroundShow : styles.backgroundHide}>
                <div className={index !== 0 ? styles.backgroundContainerShow : styles.backgroundContainerHide}>
                    <Image src={"/articles/images/" + index + ".png"} alt="" width={1000} height={500} className={styles.backgroundContainerImage} />

                    <Image src={"/close.png"} alt="" width={1000} height={500} className={styles.backgroundContainerClose} onClick={() => setIndex(0)} />

                    <div className={styles.backgroundContainerBottom}>
                        <div className={styles.backgroundContainerBottomTitle}>
                            {articlesDatabase[index - 1]?.title}
                        </div>

                        <div className={styles.nameContainer}>
                            <div className={styles.nameHeader}>Writer</div>
                            <div className={styles.nameText}>Kim Youngwoo</div>
                        </div>

                        <div className={styles.nameContainer}>
                            <div className={styles.nameHeader}>Reviser</div>
                            <div className={styles.nameText}>{articlesDatabase[index - 1]?.reviser}</div>
                        </div>

                        <div className={styles.nameContainer}>
                            <div className={styles.nameHeader}>Chief Editor</div>
                            <div className={styles.nameText}>{articlesDatabase[index - 1]?.chiefEditor}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}