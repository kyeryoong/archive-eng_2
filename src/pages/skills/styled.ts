import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: black;
  padding-top: 200px;
  padding-left: 15vw;
  padding-right: 15vw;

  @media (max-width: 1000px) {
    padding-top: 150px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const Category = styled.div`
  height: 40px;
  line-height: 40px;
  margin-bottom: 30px;
  color: white;
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    height: 30px;
    line-height: 30px;
  }
`;

export const CategoryName = styled.div`
  font-size: 2.5rem;
  height: 40px;
  line-height: 40px;
  border-right: 1px solid gray;
  margin-right: 30px;
  padding-right: 30px;

  @media (max-width: 1000px) {
    font-size: 1.6rem;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    padding-right: 20px;
  }
`;

export const CategoryNumber = styled.div`
  font-size: 2.5rem;
  height: 40px;
  line-height: 40px;

  @media (max-width: 1000px) {
    font-size: 1.6rem;
    height: 30px;
    line-height: 30px;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    gap: 15px;
  }
`;
