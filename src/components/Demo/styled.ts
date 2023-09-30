import styled from "styled-components";
import Image from "next/image";

export const DemoContainer = styled.div`
  width: calc(70vw - 300px);
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  margin-left: 15vw;
  margin-right: calc(15vw + 300px);
  margin-top: 150px;
  margin-bottom: -50px;
  display: grid;
  grid-template-rows: repeat(4, fit-content(100%));
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 70vw;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    padding: min(5vw, 30px);
    margin-left: 5vw;
    margin-right: 5vw;
  }

  &.show {
    max-height: fit-content;
  }

  &.hide {
    max-height: 90px;

    @media (max-width: 1000px) {
      max-height: calc(2 * min(5vw, 30px) + 20px);
    }
  }
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: fit-content(100%) fit-content(100%) 1fr fit-content(
      100%
    );
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
`;

export const Icon = styled(Image)`
  width: 30px;
  height: 30px;

  @media (max-width: 1000px) {
    width: 20px;
    height: 20px;
  }
`;

export const Header = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  background: -webkit-linear-gradient(
    45deg,
    rgb(100, 100, 250),
    rgb(0, 200, 250)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1000px) {
    font-size: 1.1rem;
  }
`;

export const Live = styled.div`
  font-weight: 700;
  width: 75px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  color: white;
  background-color: rgb(250, 70, 70);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (max-width: 1000px) {
    font-size: 0.75rem;
    width: 50px;
    height: 20px;
    line-height: 20px;
  }
`;

export const Blink = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: white;
  opacity: 1;
  animation: glow 1.5s linear infinite;

  @keyframes glow {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1000px) {
    width: 6px;
    height: 6px;
    border-radius: 3px;
  }
`;

export const Arrow = styled(Image)`
  width: 25px;
  height: 25px;
  filter: invert(0.7);
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 20px;
    height: 20px;
  }

  &.show {
    transform: rotate(180deg);
  }

  &.hide {
    transform: rotate(0deg);
  }
`;

export const Text = styled.div`
  color: rgb(100, 100, 100);
  word-break: keep-all;
`;

export const Url = styled.span`
  font-weight: 700;
  background: -webkit-linear-gradient(
    45deg,
    rgb(100, 100, 250),
    rgb(0, 200, 250)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Notice = styled.ul`
  font-size: 0.9rem;
  background-color: rgb(240, 240, 240);
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  word-break: keep-all;
  color: rgb(150, 150, 150);

  li {
    margin-left: 20px;
  }
`;

export const DemoButton = styled.div`
  font-size: 1.2rem;
  width: 200px;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  color: white;
  margin-top: 15px;
  justify-self: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: linear-gradient(to right, rgb(100, 100, 250), rgb(0, 200, 250));
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, rgb(50, 50, 200), rgb(0, 170, 220));
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
    width: 160px;
    height: 40px;
    line-height: 40px;
  }
`;

export const DemoButtonIcon = styled(Image)`
  filter: invert();
`;
