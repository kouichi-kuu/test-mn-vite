import MainTopInfo from "./MainTopInfo";
import MainWorkInfo from "./MainWorkInfo";
import MainCompanyInfo from "./MainCompanyInfo";
import MainTopInfoRight from "./MainTopInfoRight";

import serviceImg from "../assets/images/top_service.jpg";
import recruitImg from "../assets/images/top_recruit.jpg";
import work1img from "../assets/images/work1.jpg";
import work2img from "../assets/images/work2.jpg";
import work3img from "../assets/images/work3.jpg";
import arrowLeft from "../assets/images/left.png";
import arrowRight from "../assets/images/right.png";
import whiteRogo from "../assets/images/white_tes_rogo1.png";

const MainTop = () => {
  const mainTopInfo = [
    {
      title: "専門性の高いプラント配管から幅広く対応",
      alphaTitle: "SERVICE",
      bigTxt: "業務内容",
      smallTxt:
        "愛知県内のでのプラントにおける配管工事一式を承ります。またプラント設備配管工事に伴い、ダクト工事、機械据付、図面制作、溶接など多種多様な現場での工事、制作を行います。プラント配管工は、工場の安全性を守るために、綿密に設計や施工をする仕事です。プラント配管は、製造されるものや機械の配置によって工場ごとに違うため、プラント配管工の経験や技術、対応力が求められます。",
      image: serviceImg,
      linkTxt: "業務内容を見る",
      link: "/service",
    },
  ];

  const mainTopInfoRight = [
    {
      title: "一緒に働ける仲間を募集しています",
      alphaTitle: "RECRUIT",
      bigTxt: "採用情報",
      smallTxt:
        "株式会社T.E.Sでは新しい現場スタッフを求人募集しております！経験者・未経験者ともに歓迎いたします。プラント設備や機械設備など各種配管工事のプロフェッショナルとして、自らの成長と共に会社の成長を盛り立ててくれるような人材を、積極的に採用します。弊社の業務にご興味をお持ちの方は、ぜひ一緒に成長していきませんか。",
      image: recruitImg,
      linkTxt: "採用情報を見る",
      link: "/recruit",
    },
  ];

  const workNewsInfo = [
    {
      id: 1,
      workImg: work1img,
      workDate: "2022.6.20",
      workTxt: "株式会社T.E.Sのホームページが完成しました",
      workSlideLink: "#1",
    },
    {
      id: 2,
      workImg: work2img,
      workDate: "2022.7.30",
      workTxt: "愛知県名古屋市のプラント配管工事",
      workSlideLink: "#2",
    },
    {
      id: 3,
      workImg: work3img,
      workDate: "2022.8.10",
      workTxt: "愛知県名古屋市のダクト工事",
      workSlideLink: "#3",
    },
  ];

  return (
    <main id="main">
      <MainTopInfo mainTopInfo={mainTopInfo} />
      <MainTopInfoRight mainTopInfoRight={mainTopInfoRight} />
      <MainWorkInfo
        workNewsInfo={workNewsInfo}
        arrowLeft={arrowLeft}
        arrowRight={arrowRight}
        workLink={"/works"}
      />
      <MainCompanyInfo whiteRogo={whiteRogo} />
    </main>
  );
};

export default MainTop;
