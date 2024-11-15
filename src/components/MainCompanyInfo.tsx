import { Link } from "react-router-dom";

const MainCompanyInfo = ({ whiteRogo }: any) => {
  return (
    <div id="company-wrap">
      <div className="company__heading">
        <p className="company__top-headtxt">COMPANY</p>
        <p className="company__sub-headtxt">会社情報</p>
      </div>
      <p className="company__info-txt">
        株式会社T.E.Sの会社概要をご紹介しています。
        弊社の詳しい情報はこちらからご確認ください。
      </p>
      <figure className="company__img-wrap">
        <img src={whiteRogo} className="company__img images" alt="" />
      </figure>
      <div className="company__btn-wrap">
        <Link to="/company" className="company__btn-link links">
          会社案内を見る
        </Link>
      </div>
    </div>
  );
};

export default MainCompanyInfo;
