import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link"
import Image from "next/image";

import styles from "../styles/Header.module.css";



export default function Header() {
    const router = useRouter();

    const [isClicked, setIsClicked] = useState<boolean>(false);
    const consoleRef = useRef<any>();

    const [index, setIndex] = useState<number>(0);

    const [timestamp, setTimestamp] = useState<number>(Date.now());

    const [menu, setMenu] = useState<boolean>(true);



    const [command, setCommand] = useState<string>("");

    const init: string[] = [
        "Archive-eng Terminal",
        "Copyright (c) Kim Young-Woo. All rights reserved.",
        'Type "help" for commands.',
        " "
    ]

    const fortune: string[] = [
        "커피 한 잔. 코드 한 줄. 코피 한 줄.",
        "궁금한점은 GPT로 부탁드려요. 제발.",
        "개발은 B(버그)와 D(디버깅)사이의 C(카페인)이다.",
        "Cache가 부족한 건지, Cash가 부족한 건지.",
        "삶은 if의 연속이니, return 또한 내가 정하는 것.",
        "완벽한 줄 알았다. 실행하기 전까지는.",
        "인생은 Graph, 사랑은 DFS, 우정은 BFS.",
        "개발자들이 가장 좋아하는 운동은? 머신러닝.",
        "잘되면 내 탓, 안되면 프레임워크 탓.",
        "땀이 필요한 순간은 운동할 때만이 아니다;",
        "요즘 실력좋은 개발자들은 null리고 null렸다.",
        "if(출근) { return 퇴근; }",
        "어제 짠 코드는, 오늘의 레거시.",
        "코드가 아름다운 것은, 어디엔가 버그를 숨기고 있기 때문이야.",
        "코드 한 줄에 추억과, 에러 한 줄에 눈물과, 디버그 한 줄에 사랑과, 리뷰 한 줄에 쓸쓸함과, 머지 한 줄에 행복과, 푸시 한 줄에 개발자.",
        "쓰는(write)자의 고통이 쓰는(use)자의 행복이 되길",
        '버그의 꽃말은 "그거 기능이에요".'
    ]



    const [log, setLog] = useState<string[]>(init);
    const logRef = useRef<any>();

    const scrollToBottom = () => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [log]);



    const commandRef: any = useRef();

    useEffect(() => {
        if (isClicked) {
            commandRef.current.focus();
        }
    })


    setTimeout(() => {
        setTimestamp(Date.now());
    }, 1000)

    var time: Date = new Date(timestamp);



    function onCommandSubmit(event: any) {
        event.preventDefault();

        // 메뉴 초기화
        if (command === "init") {
            setLog(init);
            setMenu(true);
        }

        // 메뉴 닫기
        else if (command === "exit" || command === "close") {
            setLog([]);
            setIsClicked(false);
        }

        // 출력 지우기
        else if (command === "cls" || command === "clear") {
            setMenu(false);
            setLog([]);
        }

        // 메뉴 보기
        else if (command === "menu") {
            setMenu(true);
            setLog([]);
        }

        // 명령어 도움말
        else if (command === "help") {
            setMenu(false);
            let temp: string[] = [...log];
            temp.push("[user] $ " + command);
            temp.push("cd\t\t\t\t홈으로 이동");
            temp.push("cd ~[page]\t\t해당 페이지로 이동");
            temp.push("cls, clear\t\t모든 출력 삭제");
            temp.push("exit, close\t\t메뉴 닫기");
            temp.push("fortune\t\t\t명언 출력");
            temp.push("init\t\t\t\t메뉴 초기화");
            temp.push("ls, dir\t\t\t페이지 목록 출력");
            temp.push("menu\t\t\t메뉴 보기");
            temp.push("whoami\t\t\t사용자 정보 보기");
            setLog(temp);
        }

        // 사용자 정보 출력
        else if (command === "whoami") {
            setMenu(false);
            let temp: string[] = [...log];
            temp.push("[user] $ " + command);
            temp.push("user");
            setLog(temp);
        }

        // 디렉터리 출력
        else if (command === "ls" || command === "dir") {
            setMenu(false);
            let temp: string[] = [...log];
            temp.push("[user] $ " + command);
            temp.push("home\t\tprofile\t\tachievements\t\tskills\t\tprojects\t\tarticles");
            setLog(temp);
        }

        // 현재 경로 출력
        else if (command === "pwd") {
            setMenu(false);
            let temp: string[] = [...log];
            temp.push("[user] $ " + command);
            temp.push("archiveeng.com");
            setLog(temp);
        }

        // 인사말 출력
        else if (command === "hello") {
            setMenu(false);
            let temp: string[] = [...log];
            temp.push("[user] $ " + command);
            temp.push("Hello, World!");
            setLog(temp);
        }

        // 명언 출력
        else if (command === "fortune") {
            setMenu(false);
            let temp: string[] = [...log];
            temp.push("[user] $ " + command);
            temp.push(fortune[Math.floor(Math.random() * (fortune.length + 1))]);
            setLog(temp);
        }

        // 관리자 계정
        else if (command === "sudo") {
            setMenu(false);
            setLog(["You are entering admin mode."]);
        }

        // 홈 이동
        else if (command === "cd" || command === "cd home") {
            router.push("/");
            setIsClicked(false);
            setLog(init);
        }

        // 학력&경력 이동
        else if (command === "cd profile") {
            router.push("/profile");
            setIsClicked(false);
            setLog(init);
        }

        // 수상&활동 이동
        else if (command === "cd achievements") {
            router.push("/achievements");
            setIsClicked(false);
            setLog(init);
        }

        // 기술 스택 이동
        else if (command === "cd skills") {
            router.push("/skills");
            setIsClicked(false);
            setLog(init);
        }

        // 프로젝트 이동
        else if (command === "cd projects") {
            router.push("/projects");
            setIsClicked(false);
            setLog(init);
        }

        // 영자신문사 기사 이동
        else if (command === "cd articles") {
            router.push("/articles");
            setIsClicked(false);
            setLog(init);
        }

        // 잘못된 명령어
        else {
            setMenu(false);
            let temp: string[] = [...log];
            temp.push("[user] $ " + command);
            temp.push("bash: " + command + ": command not found");
            setLog(temp);
        }

        setCommand("");
    }



    function toggleDarkLight() {
        let darkLight: string | null = localStorage.getItem("darkLight");

        if (darkLight !== null) {
            if (darkLight === "dark") {
                localStorage.setItem("darkLight", "light");
            }

            else {
                localStorage.setItem("darkLight", "dark");
            }
        }

        else {
            localStorage.setItem("darkLight", "dark");
        }
    }



    return (
        <div>
            <div className={styles.container}>
                <Link href="/" onClick={() => setIsClicked(false)}>
                    <Image className={styles.titleIcon} src="/logo_white.png" alt="" width={40} height={40} />
                </Link>

                <Link href="/" onClick={() => setIsClicked(false)}>
                    <div className={styles.titleText}>
                        archive-eng
                    </div>
                </Link>

                <div onClick={toggleDarkLight} className={styles.toggleContainer}>

                </div>

                <div
                    className={styles.button}
                    onClick={() => {
                        setIsClicked((prev: boolean) => !prev);
                        setMenu(true);
                        setLog(init);
                        setCommand("");
                    }}
                >
                    <div className={isClicked ? styles.buttonClicked : styles.buttonNotClicked} />
                    <span />
                    <span />
                    <span />
                </div>
            </div>


            <div 
                className={isClicked ? styles.backgroundShow : styles.backgroundHide}
                ref={consoleRef}
                onClick={(event: any) => {
                    if (event.target == consoleRef.current) {
                        setIsClicked(false);
                    }
                }}
            >
                <div className={isClicked ? styles.consoleShow : styles.consoleHide} >
                    <div>
                        <div className={styles.log} ref={logRef}>
                            {
                                log.map((current: string, index: number) => (
                                    <div key={index} className={styles.line}>{current}</div>
                                ))
                            }

                            <form
                                className={styles.commandContainer}
                                onSubmit={onCommandSubmit}
                            >
                                <div>
                                    [user] $
                                </div>

                                <input
                                    type="text"
                                    className={styles.commandBox}
                                    value={command}
                                    onChange={(event) => setCommand(event.target.value.replace(/[^A-Za-z ]/ig, ""))}
                                    spellCheck={false}
                                    ref={commandRef}
                                />
                            </form>
                        </div>

                        {
                            menu

                            &&

                            <>
                                <br />
                                <Link href="/profile">
                                    <div
                                        className={styles.menu}
                                        onClick={() => setIsClicked(false)}
                                        onMouseEnter={() => setIndex(1)}
                                        onMouseLeave={() => setIndex(0)}
                                    >
                                        <div className={index === 1 ? styles.arrowShow : styles.arrowHide}>{index === 1 ? ">" : ""}</div>
                                        <div className={index === 1 ? styles.menuBlue : styles.menuWhite}>Profile</div>
                                    </div>
                                </Link>

                                <Link href="/achievements">
                                    <div
                                        className={styles.menu}
                                        onClick={() => setIsClicked(false)}
                                        onMouseEnter={() => setIndex(2)}
                                        onMouseLeave={() => setIndex(0)}
                                    >
                                        <div className={index === 2 ? styles.arrowShow : styles.arrowHide}>{index === 2 ? ">" : ""}</div>
                                        <div className={index === 2 ? styles.menuBlue : styles.menuWhite}>Achievements</div>
                                    </div>
                                </Link>

                                <Link href="/skills">
                                    <div
                                        className={styles.menu}
                                        onClick={() => setIsClicked(false)}
                                        onMouseEnter={() => setIndex(3)}
                                        onMouseLeave={() => setIndex(0)}
                                    >
                                        <div className={index === 3 ? styles.arrowShow : styles.arrowHide}>{index === 3 ? ">" : ""}</div>
                                        <div className={index === 3 ? styles.menuBlue : styles.menuWhite}>Skills</div>
                                    </div>
                                </Link>

                                <Link href="/projects">
                                    <div
                                        className={styles.menu}
                                        onClick={() => setIsClicked(false)}
                                        onMouseEnter={() => setIndex(4)}
                                        onMouseLeave={() => setIndex(0)}
                                    >
                                        <div className={index === 4 ? styles.arrowShow : styles.arrowHide}>{index === 4 ? ">" : ""}</div>
                                        <div className={index === 4 ? styles.menuBlue : styles.menuWhite}>Projects</div>
                                    </div>
                                </Link>

                                <Link href="/articles">
                                    <div
                                        className={styles.menu}
                                        onClick={() => setIsClicked(false)}
                                        onMouseEnter={() => setIndex(5)}
                                        onMouseLeave={() => setIndex(0)}
                                    >
                                        <div className={index === 5 ? styles.arrowShow : styles.arrowHide}>{index === 5 ? ">" : ""}</div>
                                        <div className={index === 5 ? styles.menuBlue : styles.menuWhite}>Articles</div>
                                    </div>
                                </Link>
                            </>
                        }
                    </div>

                    <div className={styles.consoleBottom}>
                        <div className={styles.network}>
                            <div>Network</div>
                            <div className={styles.stable}>Stable</div>
                            <div className={styles.connect} />
                            <div className={styles.connect} />
                            <div className={styles.connect} />
                        </div>

                        <div className={styles.time}>
                            {time.getFullYear()}-{time.getMonth() + 1}-{time.getDate()}&nbsp;&nbsp;
                            {String(time.getHours()).padStart(2, "0")}:{String(time.getMinutes()).padStart(2, "0")}:{String(time.getSeconds()).padStart(2, "0")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}