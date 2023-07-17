import { useState, useEffect, useRef } from "react";
import { ArticleProps } from "../api/getarticles";

import Link from "next/link"
import Image from "next/image";

import styles from "./index.module.css";



export default function Articles() {
    const [index, setIndex] = useState<number>(0);

    const [showModal, setShowModal] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const [articlesData, setArticlesData] = useState<ArticleProps[]>([]);
    const [searchedData, setSearchedData] = useState<ArticleProps[]>([]);

    const [searchTitle, setSearchTitle] = useState<string>("");
    const [searchSection, setSearchSection] = useState<string[]>([]);



    async function getArticlesData() {
        try {
            const res = await fetch("/api/getarticles");
            const data = await res.json();

            setArticlesData(data);
            setSearchedData(data);
        }

        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getArticlesData();
    }, [])



    useEffect(() => {
        if (searchTitle !== "" && searchSection.length !== 0) {
            setSearchedData(articlesData.filter((elem: ArticleProps) => elem.title.toLowerCase().includes(searchTitle.toLowerCase()) && searchSection.includes(elem.section)));
        }

        else if (searchTitle !== "" && searchSection.length === 0) {
            setSearchedData(articlesData.filter((elem: ArticleProps) => elem.title.toLowerCase().includes(searchTitle.toLowerCase())));
        }

        else if (searchTitle === "" && searchSection.length !== 0) {
            setSearchedData(articlesData.filter((elem: ArticleProps) => searchSection.includes(elem.section)));
        }

        else {
            setSearchedData(articlesData);
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



    function Article({ id, section, title }: ArticleProps) {
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
                searchedData

                    ?

                    <div className={styles.articlesContainer}>
                        {
                            searchedData.map((data: ArticleProps) => (
                                <Article
                                    key={data.id}
                                    id={data.id}
                                    section={data.section}
                                    title={data.title}
                                    year={data.year}
                                    month={data.month}
                                    writer={data.writer}
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
                    <Image
                        width={700}
                        height={350}
                        src={`/articles/images/${index}.png`}
                        alt=""
                        className={styles.modalImage}
                    />

                    <div
                        className={styles.closeButton}
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        <Image
                            width={40}
                            height={40}
                            src={"/close.png"}
                            alt=""
                            className={styles.closeButtonImage}
                        />
                    </div>

                    <div className={styles.modalBottom}>
                        <div className={styles.modalTitle}>
                            {articlesData !== undefined && articlesData[index - 1]?.title}
                        </div>

                        <div className={styles.modalInfo}>
                            <div className={styles.modalInfoHeader}>
                                Writer
                            </div>

                            <div className={styles.modalInfoValue}>
                                {articlesData[index - 1]?.writer}
                            </div>

                            <div className={styles.modalInfoHeader}>
                                Reviser
                            </div>

                            <div className={styles.modalInfoValue}>
                                {articlesData[index - 1]?.reviser}
                            </div>

                            <div className={styles.modalInfoHeader}>
                                Chief Editor
                            </div>

                            <div className={styles.modalInfoValue}>
                                {articlesData[index - 1]?.chiefEditor}
                            </div>
                        </div>

                        <Link href={`/articles/${index}`} className={styles.modalButton}>
                            Read Article
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}