import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  width: 100vw;
  height: 150px;
  padding-left: 15vw;
  padding-right: 15vw;
  position: fixed;
  top: 0px;
  left: 0px;
  background: linear-gradient(180deg, black 40%, transparent);
  display: grid;
  grid-template-columns: fit-content(100%) fit-content(100%) 1fr fit-content(
      100%
    );
  align-items: center;
  z-index: 4;

  @media (max-width: 1000px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const TitleText = styled.div`
  font-size: 1.5rem;
  line-height: 40px;
  color: white;
  margin-left: 10px;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const MenuButton = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: fixed;
  right: 15vw;
  top: 55px;
  transition: 0.5s;
  z-index: 8;

  & span {
    height: 10%;
    border-radius: 10px;
    background-color: white;
    transition: 0.5s;
  }

  & span:nth-of-type(1) {
    width: 50%;
    position: absolute;
    top: 15%;
  }

  & span:nth-of-type(2) {
    width: 100%;
    position: absolute;
    top: 45%;
    opacity: 1;
  }

  & span:nth-of-type(3) {
    width: 75%;
    position: absolute;
    bottom: 15%;
  }

  &.show {
    right: min(40px, 5vw);

    & span:nth-of-type(1) {
      width: 100%;
      transform: rotate(45deg);
      top: 45%;
    }

    & span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }

    & span:nth-of-type(3) {
      width: 100%;
      transform: rotate(-45deg);
      bottom: 45%;
    }
  }

  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
    right: min(40px, 5vw);
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  transition: 0.5s;
  z-index: 5;

  &.show {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }

  &.hide {
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    pointer-events: none;
  }
`;

export const Menu = styled.div`
  width: 450px;
  height: 100vh;
  background-color: rgb(20, 20, 20);
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 120px;
  padding-left: 40px;
  transition: 0.5s;
  z-index: 7;

  &.show {
    right: 0px;

    @media (max-width: 600px) {
      width: 100vw;
      top: 0px;
      right: 0px;
      padding-left: min(40px, 5vw);
      gap: min(20px, 5vw);
    }
  }

  &.hide {
    right: -450px;

    @media (max-width: 600px) {
      width: 100vw;
      top: 0px;
      right: -100vw;
      padding-left: min(40px, 5vw);
      gap: min(20px, 5vw);
    }
  }
`;

export const MenuElements = styled(Link)`
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  display: flex;
  flex-direction: row;

  &:hover {
    color: aqua;
  }

  @media (max-width: 1000px) {
    font-size: min(2.5rem, 8vw);
  }
`;

export const Arrow = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  width: 35px;
  transition: 0.5s;

  &.show {
    max-width: 35px;
    opacity: 1;
    color: aqua;

    @media (max-width: 1000px) {
      font-size: min(2.5rem, 8vw);
    }
  }

  &.hide {
    max-width: 0px;
    opacity: 0;

    @media (max-width: 1000px) {
      font-size: min(2.5rem, 8vw);
    }
  }
`;
