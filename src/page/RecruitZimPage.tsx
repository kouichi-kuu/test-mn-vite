//事務員第2ページ(第三階層)
import HeaderThird from "../components/HeaderThird";
import Footer from "../components/Footer";
import RecruitZimContent from "../components/RecruitZimContent";

import pcHeaderOverViewImg from "../assets/images/second_back_recruit.jpg";
import spHeaderOverViewImg from "../assets/images/sp_second_back_recruit.jpg";

const RecruitZimPage = () => {
  return (
    <div id="second-page">
      <HeaderThird
        HeaderBnrTxt={"事務員"}
        HeaderNavClassName={"third-page"}
        pcHeaderOverViewImg={pcHeaderOverViewImg}
        spHeaderOverViewImg={spHeaderOverViewImg}
        HeaderSecondNavTxt={"採用情報"}
        HeaderSecondNavLink={"/recruit"}
        HeaderThirdNavTxt={"事務員"}
        //HeaderThirdNavLink={"/company/overview"}
      />
      <div id="thirdelem-page">
        <RecruitZimContent />
      </div>
      <Footer />
    </div>
  );
};

export default RecruitZimPage;
