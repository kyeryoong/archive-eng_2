import { useEffect, useState, useRef } from "react";
import { articlesDatabase, articleProps } from "../../../database/articlesDatabase";

import Image from "next/image";

import styles from "../../styles/Articles.module.css";



export default function Articles() {
    const [index, setIndex] = useState<number>(0);

    const [showModal, setShowModal] = useState<boolean>(false);

    const modalRef = useRef<HTMLDivElement>(null);

    const [searchTitle, setSearchTitle] = useState<string>("");
    const [searchSection, setSearchSection] = useState<string[]>([]);

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
            <div
                className={styles.article}
                onClick={() => {
                    setIndex(id);
                    setShowModal(true);
                }}
            >
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
        <div className={styles.container}>
            <input
                className={styles.searchBar}
                placeholder="검색어를 입력하세요."
                value={searchTitle}
                onChange={(event) => setSearchTitle(event.target.value)}
            />

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

            <div
                className={showModal ? styles.backgroundShow : styles.backgroundHide}
                ref={modalRef}
                onClick={(event: any) => {
                    if (event.target == modalRef.current) {
                        setShowModal(false);
                    }
                }}
            >
                <div className={showModal ? styles.modalShow : styles.modalHide}>
                    <img
                        src={"/articles/images/" + index + ".png"}
                        alt=""
                        className={styles.modalImage}
                    />

                    <div
                        className={styles.closeButton}
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        <img src={"/close.png"} alt="" className={styles.closeButtonImage} />
                    </div>

                    <div className={styles.modalBottom}>
                        <div className={styles.modalTitle}>
                        {articlesData[index].title}
                        </div>

                        <div className={styles.modalInfo}>
                            <div className={styles.modalInfoHeader}>
                                Writer
                            </div>

                            <div className={styles.modalInfoValue}>
                                Kim Youngwoo
                            </div>

                            <div className={styles.modalInfoHeader}>
                                Reviser
                            </div>

                            <div className={styles.modalInfoValue}>
                                {articlesData[index].reviser}
                            </div>

                            <div className={styles.modalInfoHeader}>
                                Chief Editor
                            </div>

                            <div className={styles.modalInfoValue}>
                                {articlesData[index].reviser}
                            </div>
                        </div>

                        <div className={styles.modalButton}>
                            Read Article
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}