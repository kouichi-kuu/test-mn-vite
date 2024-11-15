//第二階層会社概要ページパーツ
import { Link } from "react-router-dom";

import companyGaiyou from "../assets/images/company_gaiyou.jpg";
import companyRinen from "../assets/images/company_rinen.jpg";
import companyShozaichi from "../assets/images/company_shozaichi.jpg";

const CompanyPageContent = () => {
  const companyContArray = [
    { link: "/company/overview", image: companyGaiyou, text: "企業概要" },
    { link: "/company/philosophy", image: companyRinen, text: "企業理念" },
    {
      link: "/company/location",
      image: companyShozaichi,
      text: "事業所所在地",
    },
  ];
  return (
    <div className="company-page__content">
      {companyContArray &&
        companyContArray.map((info, index) => (
          <ul className="company-page__repeat-elem" key={index}>
            <li className="company-page__repeat-list">
              <Link to={info.link} className="company-page__link links">
                <img
                  src={info.image}
                  className="company-page__img images"
                  alt=""
                />
                <div className="company-page__txt-wrap">
                  <span className="company-page__txt">{info.text}</span>
                </div>
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default CompanyPageContent;
