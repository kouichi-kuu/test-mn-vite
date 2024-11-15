//事業所所在地第2ページ(第三階層)
import HeaderThird from "../components/HeaderThird";
import Footer from "../components/Footer";
import CompanyLocationContent from "../components/CompanyLocationContent";

import pcHeaderOverViewImg from "../assets/images/second_back_company.jpg";
import spHeaderOverViewImg from "../assets/images/sp_second_back_company.jpg";

const CompanyLocationPage = () => {
  return (
    <div id="second-page">
      <HeaderThird
        HeaderBnrTxt={"事業所所在地"}
        HeaderNavClassName={"third-page"}
        pcHeaderOverViewImg={pcHeaderOverViewImg}
        spHeaderOverViewImg={spHeaderOverViewImg}
        HeaderSecondNavTxt={"会社情報"}
        HeaderSecondNavLink={"/company"}
        HeaderThirdNavTxt={"事業所所在地"}
        //HeaderThirdNavLink={"/company/overview"}
      />
      <div id="thirdelem-page">
        <CompanyLocationContent />
      </div>
      <Footer />
    </div>
  );
};

export default CompanyLocationPage;
