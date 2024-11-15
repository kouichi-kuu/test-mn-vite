//職人第2ページ(第三階層)
import HeaderThird from "../components/HeaderThird";
import Footer from "../components/Footer";
import RecruitShokuninContent from "../components/RecruitShokuninContent";

import pcHeaderOverViewImg from "../assets/images/second_back_recruit.jpg";
import spHeaderOverViewImg from "../assets/images/sp_second_back_recruit.jpg";

const RecruitShokuninPage = () => {
  return (
    <div id="second-page">
      <HeaderThird
        HeaderBnrTxt={"職人"}
        HeaderNavClassName={"third-page"}
        pcHeaderOverViewImg={pcHeaderOverViewImg}
        spHeaderOverViewImg={spHeaderOverViewImg}
        HeaderSecondNavTxt={"採用情報"}
        HeaderSecondNavLink={"/recruit"}
        HeaderThirdNavTxt={"職人"}
        //HeaderThirdNavLink={"/company/overview"}
      />
      <div id="thirdelem-page">
        <RecruitShokuninContent />
      </div>
      <Footer />
    </div>
  );
};

export default RecruitShokuninPage;
