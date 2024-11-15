type SpMenuProp = {
  setMenuBool: any;
  menuBool: boolean;
  spSpanBool: boolean;
  setSpSpanBool: any;
};

const HeaderSpMenu = ({
  setMenuBool,
  menuBool,
  spSpanBool,
  setSpSpanBool,
}: SpMenuProp) => {
  //const [spSpanBool, setSpSpanBool] = useState<boolean>(false)
  const spMenuClick = () => {
    setMenuBool(!menuBool);
    setSpSpanBool(!spSpanBool);
    modalBackGround();
  };
  const modalBackGround = () => {
    if (spSpanBool == true) {
      document.body.style.overflow = "auto";
    } else if (spSpanBool == false) {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div className="header-top__sp-menu">
      <div
        className={
          spSpanBool ? "sp-menu__trigger active-elem" : "sp-menu__trigger"
        }
        onClick={spMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HeaderSpMenu;
