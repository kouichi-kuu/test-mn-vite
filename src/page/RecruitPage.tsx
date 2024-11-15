import HeaderSecond from "../components/HeaderSecond";
import Footer from "../components/Footer";
import RecruitPageContent from "../components/RecruitPageContent";

const RecruitPage = () => {
  return (
    <div id="second-page">
      <HeaderSecond
        HeaderBnrTopTxt={"RECRUIT"}
        HeaderBnrBtmTxt={"採用情報"}
        HeaderNavTopTxt={"専門性の高いプラント配管工事の仕事"}
        HeaderNavSecdTxt={
          "プラント工事には、配管工事はもちろんですが、ダクト工事や機械の据付工事、図面作成、各部品製造などさまざまな作業があります。さまざまな現場を経験し、一生モノのスキルを身につけられるので、一緒に頑張りましょう。満足・安心して仕事に専念できるように、スタッフが働きやすい環境づくりにも力を入れています。"
        }
        HeaderNavClassName={"recruit"}
      />
      <div id="recruit-page">
        <RecruitPageContent />
      </div>
      <Footer />
    </div>
  );
};

export default RecruitPage;
