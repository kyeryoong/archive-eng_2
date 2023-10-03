import { useState } from "react";
import * as S from "./styled";

export default function Home() {
  const [slide, setSlide] = useState<number>(0);

  setTimeout(() => {
    setSlide((prev) => (prev + 1) % 2);
  }, 10000);

  return (
    <S.Container>
      {slide === 0 && (
        <S.Page>
          <S.Background width={4000} height={3000} src={"/home/1.jpg"} alt="" />
          <S.H1>For Better Web Experience</S.H1>
          <S.H2>더 나은 웹 세상을 만들기 위해 노력합니다.</S.H2>
          <S.H3>Young-Woo Kim, @kyeryoong</S.H3>
        </S.Page>
      )}
      {slide === 1 && (
        <S.Page>
          <S.Background width={4000} height={3000} src={"/home/2.jpg"} alt="" />
          <S.H1>Junior Frontend Developer</S.H1>
          <S.H2>디자인을 좋아하는 프론트엔드 개발자입니다.</S.H2>
          <S.H3>Young-Woo Kim, @kyeryoong</S.H3>
        </S.Page>
      )}
    </S.Container>
  );
}
