import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Profile = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Info = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameId = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Id = styled.div`
  font-size: 1.3rem;
  color: white;
  margin-left: 10px;

  &:hover {
    color: aqua;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Position = styled.div`
  font-size: 1rem;
  color: rgb(100, 100, 100);
  height: 20px;
  line-height: 20px;

  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }
`;
