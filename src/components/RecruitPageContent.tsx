//第二階層求人ページパーツ
import { Link } from "react-router-dom";

import recruitKantoku from "../assets/images/kantoku_recruit.jpg";
import recruitShokunin from "../assets/images/shokunin_recruit.jpg";
import recruitZimuin from "../assets/images/zimuin_recruit.jpg";

const RecruitPageContent = () => {
  const recruitContArray = [
    { link: "/recruit/kantoku", image: recruitKantoku, text: "監督業" },
    { link: "/recruit/shokunin", image: recruitShokunin, text: "職人" },
    { link: "/recruit/zimu", image: recruitZimuin, text: "事務員" },
  ];
  return (
    <div className="recruit-page__content">
      {recruitContArray &&
        recruitContArray.map((info, index) => (
          <ul className="recruit-page__repeat-elem" key={index}>
            <li className="recruit-page__repeat-list">
              <Link to={info.link} className="recruit-page__link links">
                <img
                  src={info.image}
                  className="recruit-page__img images"
                  alt=""
                />
                <div className="recruit-page__txt-wrap">
                  <span className="recruit-page__txt">{info.text}</span>
                </div>
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default RecruitPageContent;
