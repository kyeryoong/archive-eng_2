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
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Background = styled(Image)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  object-fit: cover;
`;

export const Heading = styled.div`
  font-family: "Poppins";
  color: white;
  z-index: 2;
`;

export const H1 = styled(Heading)`
  font-size: 6rem;
`;

export const H2 = styled(Heading)`
  font-size: 4rem;
`;
