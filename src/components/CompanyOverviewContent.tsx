import CompanyPageContent from "./CompanyPageContent";

const CompanyOverviewContent = () => {
  return (
    <div className="company-page__overview">
      <p className="company-page__overview-heading">企業概要</p>
      <ul className="overview__list-wrap">
        <li className="overview__list">
          <div className="overview__left-elem">
            <span>社名</span>
          </div>
          <div className="overview__right-elem">
            <span>株式会社T.E.S</span>
          </div>
        </li>
        <li className="overview__list">
          <div className="overview__left-elem">
            <span>社名</span>
          </div>
          <div className="overview__right-elem">
            <span>株式会社T.E.S</span>
          </div>
        </li>
        <li className="overview__list">
          <div className="overview__left-elem">
            <span>社名</span>
          </div>
          <div className="overview__right-elem">
            <span>株式会社T.E.S</span>
          </div>
        </li>
        <li className="overview__list">
          <div className="overview__left-elem">
            <span>社名</span>
          </div>
          <div className="overview__right-elem">
            <span>株式会社T.E.S</span>
          </div>
        </li>
      </ul>
      <CompanyPageContent />
    </div>
  );
};

export default CompanyOverviewContent;
