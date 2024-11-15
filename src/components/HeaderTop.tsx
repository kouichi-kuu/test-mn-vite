import HeaderTopRogo from "./HeaderTopRogo";
import HeaderTopMenu from "./HeaderTopMenu";
import HeaderTopAsk from "./HeaderTopAsk";
import HeaderSpMenu from "./HeaderSpMenu";

import HeaderTopRogoImg from "../assets/images/tes_rogo.png";
import HeaderTopPlant from "../assets/images/plant.png";

import { useState } from "react";

const HeaderTop = () => {
  const menuInfo = [
    { topTxt: "TOP", btmTxt: "トップ", link: "/" },
    { topTxt: "SERVICE", btmTxt: "業務内容", link: "/service" },
    { topTxt: "WORKS", btmTxt: "実績紹介", link: "/works" },
    { topTxt: "RECRUIT", btmTxt: "採用情報", link: "/recruit" },
    { topTxt: "COMPANY", btmTxt: "会社情報", link: "/company" },
  ];
  const [menuBool, setMenuBool] = useState<boolean>(false);
  const [spSpanBool, setSpSpanBool] = useState<boolean>(false);
  return (
    <div id="header-contents">
      <HeaderTopRogo
        HeaderTopRogoImg={HeaderTopRogoImg}
        HeaderTopPlant={HeaderTopPlant}
      />
      <HeaderTopMenu
        menuInfo={menuInfo}
        setMenuBool={setMenuBool}
        menuBool={menuBool}
        spSpanBool={spSpanBool}
        setSpSpanBool={setSpSpanBool}
      />
      <HeaderSpMenu
        setMenuBool={setMenuBool}
        menuBool={menuBool}
        spSpanBool={spSpanBool}
        setSpSpanBool={setSpSpanBool}
      />
      <HeaderTopAsk menuAsk={"test@test"} />
    </div>
  );
};

export default HeaderTop;
