import styled from "styled-components";

const ParagraphStyle = styled.div`
    font-size: 1.2rem;
    color: gray;
    line-height: 30px;
    text-align: justify;
    word-break: keep-all;

    & @media (max-width: 1000px) {
        font-size: 1rem;
        line-height: 25px;
    }
`


export default function Paragraph({ children }: { children: string }) {
    return (
        <ParagraphStyle>
            {children}
        </ParagraphStyle>
    )
}