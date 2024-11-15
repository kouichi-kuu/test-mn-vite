import { Link } from "react-router-dom";

type recruitInfoType = {
  title: string;
  alphaTitle: string;
  bigTxt: string;
  smallTxt: string;
  image: any;
  linkTxt: string;
  link: string;
};

const MainRecruit = ({ recruitInfo }: { recruitInfo: recruitInfoType }) => {
  return (
    <div className="main-contents">
      <section className="main-contents__elem section-service">
        <p className="main-contents__headtxt">{recruitInfo.title}</p>
        <div className="main-contents__wrap">
          <div className="main-contents__info-wrap">
            <p className="main-contents__alpha-txt">{recruitInfo.alphaTitle}</p>
            <ul className="main-contents__info">
              <li className="main-contents__big-txt">{recruitInfo.bigTxt}</li>
              <li className="main-contents__small-txt">
                {recruitInfo.smallTxt}
              </li>
            </ul>
          </div>
          <div className="main-contents__img-wrap">
            <figure className="main-contents__img">
              <img
                src={recruitInfo.image}
                alt=""
                className="main-contents__picture images"
              />
            </figure>
          </div>
        </div>
        <div className="main-contents__btn">
          <Link to={recruitInfo.link} className="main-contents__btn-link links">
            {recruitInfo.linkTxt}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainRecruit;
