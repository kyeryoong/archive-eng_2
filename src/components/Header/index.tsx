import { useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import MusicPlayer from "../MusicPlayer";

import * as S from "./styled";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuIndex, setMenuIndex] = useState<number>(-1);
  const menuRef = useRef<any>();

  function handleMouseEnter(index: number) {
    setMenuIndex(index);
  }

  function handleMouseLeave() {
    setMenuIndex(-1);
  }

  function handleLinkClick() {
    setShowMenu(false);
  }

  function handleMenuClick() {
    setShowMenu((prev) => !prev);
  }

  return (
    <>
      <S.Container>
        <Link href="/" onClick={handleLinkClick}>
          <Image src="/logo_white.png" alt="" width={40} height={40} />
        </Link>

        <Link href="/" onClick={handleLinkClick}>
          <S.TitleText>archive-eng</S.TitleText>
        </Link>
      </S.Container>

      <S.MenuButton
        className={showMenu ? "show" : "hide"}
        onClick={handleMenuClick}
      >
        <span />
        <span />
        <span />
      </S.MenuButton>

      <S.Background
        className={showMenu ? "show" : "hide"}
        onClick={(event: any) => {
          if (event.target !== menuRef.current) {
            setShowMenu(false);
          }
        }}
      />

      <S.Menu className={showMenu ? "show" : "hide"} ref={menuRef}>
        <S.MenuElements
          href="/"
          onClick={handleLinkClick}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <S.Arrow className={menuIndex === 0 ? "show" : "hide"}>
            {menuIndex === 0 ? ">" : ""}
          </S.Arrow>
          Home
        </S.MenuElements>

        <S.MenuElements
          href="/profile"
          onClick={handleLinkClick}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <S.Arrow className={menuIndex === 1 ? "show" : "hide"}>
            {menuIndex === 1 ? ">" : ""}
          </S.Arrow>
          Profile
        </S.MenuElements>

        <S.MenuElements
          href="/achievements"
          onClick={handleLinkClick}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <S.Arrow className={menuIndex === 2 ? "show" : "hide"}>
            {menuIndex === 2 ? ">" : ""}
          </S.Arrow>
          Achievements
        </S.MenuElements>

        <S.MenuElements
          href="/skills"
          onClick={handleLinkClick}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <S.Arrow className={menuIndex === 3 ? "show" : "hide"}>
            {menuIndex === 3 ? ">" : ""}
          </S.Arrow>
          Skills
        </S.MenuElements>

        <S.MenuElements
          href="/projects"
          onClick={handleLinkClick}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <S.Arrow className={menuIndex === 4 ? "show" : "hide"}>
            {menuIndex === 4 ? ">" : ""}
          </S.Arrow>
          Projects
        </S.MenuElements>

        <S.MenuElements
          href="/articles"
          onClick={handleLinkClick}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          <S.Arrow className={menuIndex === 5 ? "show" : "hide"}>
            {menuIndex === 5 ? ">" : ""}
          </S.Arrow>
          Articles
        </S.MenuElements>

        <MusicPlayer />
      </S.Menu>
    </>
  );
}
