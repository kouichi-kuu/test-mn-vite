//第三階層用ヘッダー画像部分※テキスト含む
type HeaderElemInfo = {
  HeaderNavClassName: string;
  HeaderBnrTxt: string;
  pcHeaderOverViewImg: string;
  spHeaderOverViewImg: string;
};
const HeaderMainBnrThird = ({
  HeaderNavClassName,
  HeaderBnrTxt,
  pcHeaderOverViewImg,
  spHeaderOverViewImg,
}: HeaderElemInfo) => {
  return (
    <div id="header-mainbnr-second" className={HeaderNavClassName}>
      <ul className="header-mainbnr-second__rogo-elem">
        <li className="header-mainbnr-second__top-txt">{HeaderBnrTxt}</li>
      </ul>
      <div className="header-mainbnr__elem">
        <div className="header-mainbnr__img pc-elem">
          <img
            src={pcHeaderOverViewImg}
            alt=""
            className="header-mainbnr__picture images"
          />
        </div>
        <div className="header-mainbnr__img sp-elem">
          <img
            src={spHeaderOverViewImg}
            alt=""
            className="header-mainbnr__picture images"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMainBnrThird;
