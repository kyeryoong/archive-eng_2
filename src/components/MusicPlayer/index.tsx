import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import musicData from "../../../data/musicData";

import * as S from "./styled";

export default function MusicPlayer() {
  const [musicIndex, setMusicIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  let musicRef = useRef<any>();

  useEffect(() => {
    musicRef.current.volume = 0.05;
    musicRef.current.play();
  }, []);

  function handleVolumeDown() {
    if (musicRef.current.volume >= 0.05) {
      musicRef.current.volume -= 0.05;
    }
  }

  function handleVolumeUp() {
    if (musicRef.current.volume <= 0.95) {
      musicRef.current.volume += 0.05;
    }
  }

  function handlePlayPauseMusic() {
    if (isPlaying) {
      musicRef.current.pause();
      setIsPlaying(false);
    } else {
      musicRef.current.play();
      setIsPlaying(true);
    }
  }

  function handlePreviousMusic() {
    if (musicIndex === 0) {
      setMusicIndex(musicData.length - 1);
    } else {
      setMusicIndex((prev) => prev - 1);
    }
    setIsPlaying(true);
  }

  function handleNextMusic() {
    if (musicIndex === musicData.length - 1) {
      setMusicIndex(0);
    } else {
      setMusicIndex((prev: number) => prev + 1);
    }
    setIsPlaying(true);
  }

  return (
    <S.Container>
      <audio
        autoPlay
        src={`/music/${musicIndex}.mp3`}
        ref={musicRef}
        onEnded={() =>
          setMusicIndex((prev: number) => (prev + 1) % musicData.length)
        }
      />

      <S.AlbumArtWrapper>
        <S.AlbumArt
          src={`/music/${musicIndex}.jpg`}
          alt=""
          width={90}
          height={90}
          className={isPlaying ? "play" : "pause"}
        />

        <S.AlbumArtCenter />
      </S.AlbumArtWrapper>

      <S.MusicPlayer>
        <S.MusicTitle>{musicData[musicIndex].title}</S.MusicTitle>

        <S.MusicArtist>{musicData[musicIndex].artist}</S.MusicArtist>

        <S.MusicController>
          <S.MusicIcon
            src="/music/minus.png"
            alt=""
            width={12}
            height={12}
            onClick={handleVolumeDown}
          />

          <S.MusicIcon
            src="/music/previous.png"
            alt=""
            width={12}
            height={12}
            onClick={handlePreviousMusic}
          />

          <S.MusicIcon
            src={isPlaying ? "/music/pause.png" : "/music/play.png"}
            alt=""
            width={16}
            height={16}
            onClick={handlePlayPauseMusic}
          />

          <S.MusicIcon
            src="/music/next.png"
            alt=""
            width={12}
            height={12}
            onClick={handleNextMusic}
          />

          <S.MusicIcon
            src="/music/plus.png"
            alt=""
            width={12}
            height={12}
            onClick={handleVolumeUp}
          />
        </S.MusicController>
      </S.MusicPlayer>
    </S.Container>
  );
}
