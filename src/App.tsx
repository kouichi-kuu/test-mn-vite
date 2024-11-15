import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopPage from "./page/TopPage";
import ServicePage from "./page/ServicePage";
import CompanyPage from "./page/CompanyPage";
import RecruitPage from "./page/RecruitPage";
import WorksPage from "./page/WorksPage";
import CompanyOverviewPage from "./page/CompanyOverviewPage";
import CompanyPhilosophyPage from "./page/CompanyPhilosophyPage";
import CompanyLocationPage from "./page/CompanyLocationPage";
import RecruitKantokuPage from "./page/RecruitKantokuPage";
import RecruitShokuninPage from "./page/RecruitShokuninPage";
import RecruitZimPage from "./page/RecruitZimPage";
import WorksInnerPage from "./page/WorksInnerPage";

import work1img from "./assets/images/work1.jpg";
import work2img from "./assets/images/work2.jpg";
import work3img from "./assets/images/work3.jpg";

const App = () => {
  const worksContArray = [
    {
      id: 1,
      image: work1img,
      bigtxt: "プラント配管工事",
      datetxt: "2022.6.20",
      smalltxt:
        "株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました",
    },
    {
      id: 2,
      image: work2img,
      bigtxt: "名古屋市のダクト工事",
      datetxt: "2022.6.20",
      smalltxt:
        "株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました",
    },
    {
      id: 3,
      image: work3img,
      bigtxt: "株式会社T.E.S",
      datetxt: "2022.6.20",
      smalltxt:
        "株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました株式会社T.E.Sのホームページが完成しました",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route
            path="/works"
            element={<WorksPage worksContArray={worksContArray} />}
          />
          <Route path="/recruit" element={<RecruitPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/overview" element={<CompanyOverviewPage />} />
          <Route
            path="/company/philosophy"
            element={<CompanyPhilosophyPage />}
          />
          <Route path="/company/location" element={<CompanyLocationPage />} />
          <Route path="/recruit/kantoku" element={<RecruitKantokuPage />} />
          <Route path="/recruit/shokunin" element={<RecruitShokuninPage />} />
          <Route path="/recruit/zimu" element={<RecruitZimPage />} />
          <Route
            path="/works/:id"
            element={<WorksInnerPage worksContArray={worksContArray} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
