import { useState } from "react";
import Image from "next/image";

import * as S from "./styled";

interface DemoProps {
  url: string;
}

export default function Demo({ url }: DemoProps) {
  const [show, setShow] = useState<boolean>(true);

  function handleArrowClick() {
    setShow((prev) => !prev);
  }

  function handleDemoButtonClick() {
    window.open("https://" + url);
  }

  return (
    <S.DemoContainer className={show ? "show" : "hide"}>
      <S.Title>
        <S.Icon width={30} height={30} src="/projects/deploy.png" alt="" />

        <S.Header>프로젝트 배포 중</S.Header>

        <S.Live>
          LIVE
          <S.Blink />
        </S.Live>

        <S.Arrow
          width={25}
          height={25}
          src="/projects/arrow.png"
          alt=""
          onClick={handleArrowClick}
          className={show ? "show" : "hide"}
        />
      </S.Title>

      <S.Text>
        지금 보고 계신 프로젝트는 <S.Url>{url}</S.Url> 도메인에 연동되어
        있습니다.
        <br />
        해당 사이트에 접속하면, 현재 개발 중인 프로젝트를 직접 체험해 볼 수
        있습니다.
      </S.Text>

      <S.Notice>
        <li>해당 프로젝트는 아직 개발 중입니다.</li>
        <li>모든 기능이 정상적으로 작동하지 않을 수 있습니다.</li>
      </S.Notice>

      <S.DemoButton onClick={handleDemoButtonClick}>
        <S.DemoButtonIcon
          width={25}
          height={25}
          src="/projects/demo.png"
          alt=""
        />
        체험 해보기
      </S.DemoButton>
    </S.DemoContainer>
  );
}
