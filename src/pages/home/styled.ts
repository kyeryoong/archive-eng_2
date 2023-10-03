import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0px;
  z-index: 2;
`;

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: slide 10s forwards;

  @keyframes slide {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 1;
    }

    95% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const Background = styled(Image)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  object-fit: cover;
  filter: grayscale(1) brightness(0.5);
  animation: zoom 10s linear forwards;

  @keyframes zoom {
    0% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const Heading = styled.div`
  font-family: "Poppins", "Pretendard";
  color: white;
  opacity: 0;
  z-index: 2;
  text-align: center;

  @keyframes float {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }

    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export const H1 = styled(Heading)`
  font-size: 6rem;
  animation: float 1s 0.5s ease forwards;
`;

export const H2 = styled(Heading)`
  font-size: 2rem;
  animation: float 1s 1s ease forwards;
`;

export const H3 = styled(Heading)`
  font-size: 1.5rem;
  animation: float 1s 1.5s ease forwards;
`;
