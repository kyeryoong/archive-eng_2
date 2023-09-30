import * as S from "./styled";

function handleEmailClick() {
  window.open(
    "mailto:kyeryoong@gmail.com?subject=안녕하세요, archive-eng을 통해서 이메일 드립니다."
  );
}

function handleGitHubClick() {
  window.open("https://github.com/kyeryoong");
}

function handleLinkedInClick() {
  window.open("https://www.linkedin.com/in/kyeryoong/");
}

export default function Footer() {
  var year: number = new Date().getFullYear();

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerLeft>
          <S.Name>@kyeryoong</S.Name>
          <S.Name>Kim Young-Woo</S.Name>
          <S.Name>김영우</S.Name>
        </S.ContainerLeft>

        <S.ContainerRight>
          <S.Contact>contact</S.Contact>
          <S.ButtonsContainer>
            <S.ButtonImage
              width={30}
              height={30}
              alt=""
              src={"/home/email.png"}
              onClick={handleEmailClick}
            />
            <S.ButtonImage
              width={30}
              height={30}
              alt=""
              src={"/home/github.png"}
              onClick={handleGitHubClick}
            />
            <S.ButtonImage
              width={30}
              height={30}
              alt=""
              src={"/home/linkedin.png"}
              onClick={handleLinkedInClick}
            />
          </S.ButtonsContainer>
        </S.ContainerRight>
      </S.Container>

      <S.AllRightsReserved>
        {year}. archive-eng. All rights reserved.
      </S.AllRightsReserved>
    </S.Wrapper>
  );
}
