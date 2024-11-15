import { Link } from "react-router-dom";

type HeaderProp = {
  //JSON形式の型指定
  menuInfo: {
    topTxt: string;
    btmTxt: string;
    link: string;
  }[];
  menuBool: boolean;
  setMenuBool: any;
  spSpanBool: boolean;
  setSpSpanBool: any;
};

const HeaderTopMenu = ({
  menuInfo,
  menuBool,
  setMenuBool,
  spSpanBool,
  setSpSpanBool,
}: HeaderProp) => {
  const modalBackGround = () => {
    if (spSpanBool == true) {
      document.body.style.overflow = "auto";
    }
  };
  const spClick = () => {
    setMenuBool(!menuBool);
    setSpSpanBool(!spSpanBool);
    modalBackGround();
  };
  return (
    <ul
      className={
        menuBool ? "header-top__menu spmenu-active" : "header-top__menu"
      }
    >
      {menuInfo &&
        menuInfo.map((menu, index) => (
          <li className="header-top__menu-list" key={index}>
            <Link
              to={menu.link}
              className="header-top__menu-link links"
              onClick={spClick}
            >
              <span className="header-top__menu-uptxt">{menu.topTxt}</span>
              <span className="header-top__menu-downtxt">{menu.btmTxt}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default HeaderTopMenu;
