//監督業第2ページ(第三階層)
import HeaderThird from "../components/HeaderThird";
import Footer from "../components/Footer";
import RecruitKantokuContent from "../components/RecruitKantokuContent";

import pcHeaderOverViewImg from "../assets/images/second_back_recruit.jpg";
import spHeaderOverViewImg from "../assets/images/sp_second_back_recruit.jpg";

const RecruitKantokuPage = () => {
  return (
    <div id="second-page">
      <HeaderThird
        HeaderBnrTxt={"監督業"}
        HeaderNavClassName={"third-page"}
        pcHeaderOverViewImg={pcHeaderOverViewImg}
        spHeaderOverViewImg={spHeaderOverViewImg}
        HeaderSecondNavTxt={"採用情報"}
        HeaderSecondNavLink={"/recruit"}
        HeaderThirdNavTxt={"監督業"}
        //HeaderThirdNavLink={"/company/overview"}
      />
      <div id="thirdelem-page">
        <RecruitKantokuContent />
      </div>
      <Footer />
    </div>
  );
};

export default RecruitKantokuPage;
