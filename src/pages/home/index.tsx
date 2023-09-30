import Image from "next/image";
import * as S from "./styled";

export default function Home() {
  return (
    <S.Container>
      <S.Page>
        <S.Background width={3000} height={2000} src={"/home/1.jpg"} alt="" />
        <S.H1>For Better Web Experience</S.H1>
      </S.Page>
    </S.Container>
  );
}
