import HeaderSecond from "../components/HeaderSecond";
import Footer from "../components/Footer";
import WorksPageContent from "../components/WorksPageContent";

type worksContArrayType = {
  worksContArray: {
    id: number;
    image: string;
    bigtxt: string;
    datetxt: string;
    smalltxt: string;
  }[];
};

const WorksPage = ({ worksContArray }: worksContArrayType) => {
  return (
    <div id="second-page">
      <HeaderSecond
        HeaderBnrTopTxt={"WORKS"}
        HeaderBnrBtmTxt={"実績紹介"}
        HeaderNavTopTxt={
          "技術、知識、経験であらゆる生産設備工場の現場を支えます"
        }
        HeaderNavSecdTxt={
          "株式会社T.E.Sは愛知県名古屋市を中心にプラント配管工事、ダクト工事、機械据付、溶接など幅広く行なっております。培ってきた配管工事の技術、知識、経験であらゆる生産設備工場の現場を支えます。工事の⼀部ではありますがご紹介いたします。"
        }
        HeaderNavClassName={"works"}
      />
      <div id="works-page">
        <WorksPageContent worksContArray={worksContArray} />
      </div>
      <Footer />
    </div>
  );
};

export default WorksPage;
