export interface articleProps {
    id: number,
    section: "Architecture" | "Art" | "Global" | "Issue" | "Medical" | "Technology",
    title: string,
    year: 2021 | 2022 | 2023,
    month: 3 | 5 | 9 | 11,
    chiefEditor: "Han Seunghyeon" | "Kim Minji",
    reviser: "Neil Alexander Cole" | "Jeff T. Vandeweerd",
    keyword: string,
    link: string
}



export const articlesDatabase: articleProps[] = [
    {
        id: 1,
        section: "Architecture",
        title: "Ecopolis",
        year: 2021,
        month: 9,
        chiefEditor: "Han Seunghyeon",
        reviser: "Neil Alexander Cole",
        keyword: "Coexistence",
        link: "https://ibook.hongik.ac.kr/Viewer/DJMA53CR19DP"
    },

    {
        id: 2,
        section: "Art",
        title: "Back to the Good Old Days: Retro Design",
        year: 2021,
        month: 9,
        chiefEditor: "Han Seunghyeon",
        reviser: "Neil Alexander Cole",
        keyword: "Coexistence",
        link: "https://ibook.hongik.ac.kr/Viewer/DJMA53CR19DP"
    },

    {
        id: 3,
        section: "Technology",
        title: "Invisible but Powerful Cloud Computing",
        year: 2021,
        month: 11,
        chiefEditor: "Han Seunghyeon",
        reviser: "Jeff T. Vandeweerd",
        keyword: "Short",
        link: "https://ibook.hongik.ac.kr/Viewer/14C43RIJ1O2B"
    },

    {
        id: 4,
        section: "Technology",
        title: "A New Challenge to Space - KSLV-II Nuri",
        year: 2022,
        month: 3,
        chiefEditor: "Han Seunghyeon",
        reviser: "Neil Alexander Cole",
        keyword: "Hand",
        link: "https://ibook.hongik.ac.kr/Viewer/O5TPPLR9RLQ7"
    },

    {
        id: 5,
        section: "Art",
        title: "Branded Content",
        year: 2022,
        month: 3,
        chiefEditor: "Han Seunghyeon",
        reviser: "Neil Alexander Cole",
        keyword: "Hand",
        link: "https://ibook.hongik.ac.kr/Viewer/O5TPPLR9RLQ7"
    },

    {
        id: 6,
        section: "Medical",
        title: "Information About COVID-19 Test Kits",
        year: 2022,
        month: 5,
        chiefEditor: "Kim Minji",
        reviser: "Jeff T. Vandeweerd",
        keyword: "Aim",
        link: "https://ibook.hongik.ac.kr/Viewer/2OPCFAD9C9A8"
    },

    {
        id: 7,
        section: "Global",
        title: "Figure Skating Doping Scandal at the Olympics",
        year: 2022,
        month: 5,
        chiefEditor: "Kim Minji",
        reviser: "Jeff T. Vandeweerd",
        keyword: "Aim",
        link: "https://ibook.hongik.ac.kr/Viewer/2OPCFAD9C9A8"
    },

    {
        id: 8,
        section: "Technology",
        title: "The Last of Internet Explorer",
        year: 2022,
        month: 9,
        chiefEditor: "Kim Minji",
        reviser: "Neil Alexander Cole",
        keyword: "Reflect",
        link: "https://ibook.hongik.ac.kr/Viewer/HH85205W6PH8"
    },

    {
        id: 9,
        section: "Issue",
        title: "Korea, No Longer Safe from Drugs",
        year: 2022,
        month: 11,
        chiefEditor: "Kim Minji",
        reviser: "Neil Alexander Cole",
        keyword: "Spark",
        link: ""
    },

    {
        id: 10,
        section: "Issue",
        title: "Sportswashing",
        year: 2022,
        month: 11,
        chiefEditor: "Kim Minji",
        reviser: "Neil Alexander Cole",
        keyword: "Spark",
        link: ""
    },

    {
        id: 11,
        section: "Issue",
        title: "SPC's Disregard for Human Life",
        year: 2023,
        month: 3,
        chiefEditor: "Kim Minji",
        reviser: "Neil Alexander Cole",
        keyword: "Voyage",
        link: ""
    },

    {
        id: 12,
        section: "Technology",
        title: "Password: Spears and Shields in Cyberspace",
        year: 2023,
        month: 3,
        chiefEditor: "Kim Minji",
        reviser: "Neil Alexander Cole",
        keyword: "Voyage",
        link: ""
    }
]