//第三階層用ヘッダーパーツ
import HeaderTop from "./HeaderTop";
import HeaderAboveLine from "./HeaderAboveLine";
import HeaderMainBnrThird from "./HeaderMainBnrThird";
import HeaderBtmLine from "./HeaderBtmLine";
import HeaderThirdNavBack from "./HeaderThirdNavBack";

type HeaderSecondType = {
  HeaderBnrTxt: string;
  HeaderNavClassName: string;
  pcHeaderOverViewImg: string;
  spHeaderOverViewImg: string;
  HeaderSecondNavTxt: string;
  HeaderSecondNavLink: string;
  HeaderThirdNavTxt: string;
  //HeaderThirdNavLink: string;
};

const HeaderThird = ({
  HeaderBnrTxt,
  HeaderNavClassName,
  pcHeaderOverViewImg,
  spHeaderOverViewImg,
  HeaderSecondNavTxt,
  HeaderSecondNavLink,
  HeaderThirdNavTxt,
}: //HeaderThirdNavLink,
HeaderSecondType) => {
  return (
    <header id="header">
      <HeaderTop />
      <HeaderAboveLine
        menuAboveTxt={"Total Engineering Service for Plant 株式会社 テス"}
      />
      <HeaderMainBnrThird
        HeaderNavClassName={HeaderNavClassName}
        HeaderBnrTxt={HeaderBnrTxt}
        pcHeaderOverViewImg={pcHeaderOverViewImg}
        spHeaderOverViewImg={spHeaderOverViewImg}
      />
      <HeaderBtmLine
        headerBtmTxt={
          "プラント配管工事・ダクト工事・機械据付・図面制作のプロフェッショナル"
        }
      />
      <HeaderThirdNavBack
        HeaderSecondNavTxt={HeaderSecondNavTxt}
        HeaderSecondNavLink={HeaderSecondNavLink}
        HeaderThirdNavTxt={HeaderThirdNavTxt}
      />
    </header>
  );
};

export default HeaderThird;
