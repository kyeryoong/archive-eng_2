import * as S from "./styled";

interface MemberProps {
  name: string;
  id: string;
  position: string;
  url: number;
}

export default function Member({ name, id, position, url }: MemberProps) {
  function handleIdClick() {
    window.open(`https://github.com/${id}`);
  }

  return (
    <S.Container>
      <S.Profile
        width={60}
        height={60}
        src={`https://avatars.githubusercontent.com/u/${url}`}
        alt=""
      />

      <S.Info>
        <S.NameId>
          <S.Name>{name}</S.Name>

          <S.Id onClick={handleIdClick}>@{id}</S.Id>
        </S.NameId>

        <S.Position>{position}</S.Position>
      </S.Info>
    </S.Container>
  );
}
