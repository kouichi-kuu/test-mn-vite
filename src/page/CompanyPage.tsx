import HeaderSecond from "../components/HeaderSecond";
import Footer from "../components/Footer";
import CompanyPageContent from "../components/CompanyPageContent";

const CompanyPage = () => {
  return (
    <div id="second-page">
      <HeaderSecond
        HeaderBnrTopTxt={"COMPANY"}
        HeaderBnrBtmTxt={"会社情報"}
        HeaderNavTopTxt={"プロフェッショナルな技術屋集団"}
        HeaderNavSecdTxt={
          "株式会社T.E.Sは愛知県を中心にプラント配管工事、ダクト工事、機械据付、図面制作を行っております。各工事のプロフェッショナル集団として高品質なサービスを提供し地域貢献に励んでまいります。"
        }
        HeaderNavClassName={"company"}
      />
      <div id="company-page">
        <CompanyPageContent />
      </div>
      <Footer />
    </div>
  );
};

export default CompanyPage;
