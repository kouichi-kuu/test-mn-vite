//企業概要第2ページ(第三階層)
import HeaderThird from "../components/HeaderThird";
import Footer from "../components/Footer";
import CompanyOverviewContent from "../components/CompanyOverviewContent";

import pcHeaderOverViewImg from "../assets/images/second_back_company.jpg";
import spHeaderOverViewImg from "../assets/images/sp_second_back_company.jpg";

const CompanyOverviewPage = () => {
  return (
    <div id="second-page">
      <HeaderThird
        HeaderBnrTxt={"企業概要"}
        HeaderNavClassName={"third-page"}
        pcHeaderOverViewImg={pcHeaderOverViewImg}
        spHeaderOverViewImg={spHeaderOverViewImg}
        HeaderSecondNavTxt={"会社情報"}
        HeaderSecondNavLink={"/company"}
        HeaderThirdNavTxt={"企業概要"}
        //HeaderThirdNavLink={"/company/overview"}
      />
      <div id="thirdelem-page">
        <CompanyOverviewContent />
      </div>
      <Footer />
    </div>
  );
};

export default CompanyOverviewPage;
