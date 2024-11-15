import RecruitPageContent from "./RecruitPageContent";

const RecruitKantokuContent = () => {
  return (
    <div className="recruit-page__blocklist">
      <ul className="blocklist__list-wrap">
        <li className="blocklist__list">
          <div className="blocklist__left-elem">
            <span>募集職種</span>
          </div>
          <div className="blocklist__right-elem">
            <span>監督業</span>
          </div>
        </li>
        <li className="blocklist__list">
          <div className="blocklist__left-elem">
            <span>雇用形態</span>
          </div>
          <div className="blocklist__right-elem">
            <span>正社員（研修期間あり）</span>
          </div>
        </li>
        <li className="blocklist__list">
          <div className="blocklist__left-elem">
            <span>仕事内容</span>
          </div>
          <div className="blocklist__right-elem">
            <span>現場での監督業をお願いします</span>
          </div>
        </li>
        <li className="blocklist__list">
          <div className="blocklist__left-elem">
            <span>●●●</span>
          </div>
          <div className="blocklist__right-elem">
            <span>●●●●●●●●●●●●●●●●●●</span>
          </div>
        </li>
      </ul>
      <RecruitPageContent />
    </div>
  );
};

export default RecruitKantokuContent;
