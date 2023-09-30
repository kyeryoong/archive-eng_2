import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 370px;
  height: 80px;
  margin-top: 50px;
  border-radius: 40px 10px 10px 40px;
  background-color: rgb(50, 50, 50);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export const AlbumArtWrapper = styled.div`
  width: 94px;
  height: 94px;
  background-color: rgb(100, 100, 100);
  border-radius: 47px;
  -webkit-box-shadow: 5px 0px 15px 5px rgba(10, 10, 10, 0.9);
  box-shadow: 5px 0px 15px 5px rgba(10, 10, 10, 0.9);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlbumArt = styled(Image)`
  &.play {
    border-radius: 45px;
    animation: spin 10s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  &.pause {
    border-radius: 45px;
  }
`;

export const AlbumArtCenter = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: absolute;
  background-color: rgb(70, 70, 70);
  -webkit-box-shadow: 0px 0px 5px 0px rgb(10, 10, 10);
  box-shadow: 0px 0px 5px 0px rgb(10, 10, 10);
`;

export const MusicPlayer = styled.div`
  width: 100%;
  padding-left: 94px;
  display: flex;
  flex-direction: column;
`;

export const MusicTitle = styled.div`
  font-size: 0.95rem;
  padding-left: 20px;
  color: white;
`;

export const MusicArtist = styled.div`
  font-size: 0.7rem;
  padding-left: 20px;
  color: rgb(150, 150, 150);
`;

export const MusicController = styled.div`
  margin-top: 8px;
  padding-top: 8px;
  margin-left: 20px;
  margin-right: 20px;
  border-top: 1px solid rgb(100, 100, 100);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MusicIcon = styled(Image)`
  filter: invert();
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;
