import { Link } from "react-router-dom";

type serviceInfoType = {
  title: string;
  alphaTitle: string;
  bigTxt: string;
  smallTxt: string;
  image: any;
  linkTxt: string;
  link: string;
};

const MainService = ({ serviceInfo }: { serviceInfo: serviceInfoType }) => {
  return (
    <div className="main-contents">
      <section className="main-contents__elem section-service">
        <p className="main-contents__headtxt">{serviceInfo.title}</p>
        <div className="main-contents__wrap">
          <div className="main-contents__info-wrap">
            <p className="main-contents__alpha-txt">{serviceInfo.alphaTitle}</p>
            <ul className="main-contents__info">
              <li className="main-contents__big-txt">{serviceInfo.bigTxt}</li>
              <li className="main-contents__small-txt">
                {serviceInfo.smallTxt}
              </li>
            </ul>
          </div>
          <div className="main-contents__img-wrap">
            <figure className="main-contents__img">
              <img
                src={serviceInfo.image}
                alt=""
                className="main-contents__picture images"
              />
            </figure>
          </div>
        </div>
        <div className="main-contents__btn">
          <Link to={serviceInfo.link} className="main-contents__btn-link links">
            {serviceInfo.linkTxt}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainService;
