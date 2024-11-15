import FooterTopContact from "./FooterTopContact";
import FooterTopFoot from "./FooterTopFoot";

import whiteRogo from "../assets/images/white_tes_rogo3.png";

const FooterTop = () => {
  const menuInfo = [
    { txt: "ホーム", link: "/" },
    { txt: "業務内容", link: "/service" },
    { txt: "実績紹介", link: "/works" },
    { txt: "採用情報", link: "/recruit" },
    { txt: "会社情報", link: "/company" },
    { txt: "お問い合わせ", link: "mailto:matsunami@tes-eng.jp" },
  ];
  return (
    <div id="footer-wrap">
      <FooterTopContact footerAsk={"test@test"} />
      <FooterTopFoot whiteRogo={whiteRogo} menuInfo={menuInfo} />
    </div>
  );
};

export default FooterTop;
