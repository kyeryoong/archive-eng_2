import * as S from "./styled";

interface SkillProps {
  name: string;
  displayName?: string;
  nameColor: "white" | "black";
  rgb1: number[];
  rgb2?: number[];
  logoColor: "white" | "black" | "color";
  logoHover?: string;
  description: string;
}

export default function Skill({
  name,
  displayName,
  nameColor,
  rgb1,
  rgb2,
  logoColor,
  logoHover,
  description,
}: SkillProps) {
  return (
    <S.Container rgb1={rgb1} rgb2={rgb2}>
      <S.Icon
        width={80}
        height={80}
        src={`/skills/${name}.png`}
        alt=""
        className={logoColor}
      />
      <S.Name nameColor={nameColor}>{displayName ? displayName : name}</S.Name>
    </S.Container>
  );
}
