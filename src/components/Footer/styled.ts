import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  padding-left: 15vw;
  padding-right: 15vw;
  padding-bottom: 100px;
  background-color: black;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const Container = styled.div`
  margin-top: 100px;
  padding-top: 100px;
  border-top: 1px solid rgb(50, 50, 50);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 500px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, fit-content(100%));
    gap: 50px;
  }
`;

export const ContainerLeft = styled.div`
  display: grid;
  grid-template-rows: repeat(3, fit-content(100%));
  gap: 5px;

  @media (max-width: 500px) {
    gap: 5px;
  }
`;

export const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
`;

export const ContainerRight = styled.div`
  display: grid;
  justify-items: right;

  @media (max-width: 500px) {
    justify-items: left;
  }
`;

export const Contact = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: white;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, fit-content(100%));
  gap: 20px;
  align-self: end;
`;

export const ButtonImage = styled(Image)`
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1);
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;

export const AllRightsReserved = styled.div`
  font-size: 1rem;
  color: rgb(100, 100, 100);
  text-align: center;
  margin-top: 50px;
`;
