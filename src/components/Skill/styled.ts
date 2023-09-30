import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div<{ rgb1: number[]; rgb2?: number[] }>`
  width: fit-content;
  height: 80px;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: ${({ rgb1, rgb2 }) =>
    rgb2
      ? `linear-gradient(135deg, rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]}) 20%, rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]}) 80%)`
      : `linear-gradient(135deg, rgb(${rgb1[0] + 10}, ${rgb1[1] + 10}, ${
          rgb1[2] + 10
        }) 20%, rgb(${rgb1[0] - 40}, ${rgb1[1] - 40}, ${rgb1[2] - 40}) 80%)`};

  @media (max-width: 1000px) {
    height: 50px;
    border-radius: 25px;
    gap: 0px;
  }
`;

export const Icon = styled(Image)`
  width: 80px;
  height: 80px;

  &.white {
    filter: brightness(0) invert(1);
  }

  &.black {
    filter: brightness(0) invert(0);
  }

  @media (max-width: 1000px) {
    width: 50px;
    height: 50px;
  }
`;

export const Name = styled.div<{ nameColor: string }>`
  font-size: 2rem;
  color: ${({ nameColor }) => nameColor};
  margin-right: 25px;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    margin-right: 15px;
  }
`;
