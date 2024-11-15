import { Link } from "react-router-dom";

type mainTopInfoRightType = {
  mainTopInfoRight: {
    title: string;
    alphaTitle: string;
    bigTxt: string;
    smallTxt: string;
    image: string;
    linkTxt: string;
    link: string;
  }[];
};
const MainTopInfoRight = ({ mainTopInfoRight }: mainTopInfoRightType) => {
  return (
    <div id="main-wrap">
      {mainTopInfoRight &&
        mainTopInfoRight.map((main, index) => (
          <div className="main-contents" key={index}>
            <section className="main-contents__elem section-service">
              <p className="main-contents__right-alpha-txt sp-elem">
                {main.alphaTitle}
              </p>
              <p className="main-contents__headtxt">{main.title}</p>
              <div className="main-contents__wrap">
                <div className="main-contents__img-wrap">
                  <figure className="main-contents__img">
                    <img
                      src={main.image}
                      alt=""
                      className="main-contents__picture images"
                    />
                  </figure>
                </div>
                <div className="main-contents__right-info-wrap">
                  <ul className="main-contents__info">
                    <li className="main-contents__big-txt">{main.bigTxt}</li>
                    <li className="main-contents__small-txt">
                      {main.smallTxt}
                    </li>
                  </ul>
                  <p className="main-contents__right-alpha-txt pc-elem">
                    {main.alphaTitle}
                  </p>
                </div>
              </div>
              <div className="main-contents__btn ghost-btn">
                <Link
                  to={main.link}
                  className="main-contents__btn-link ghost-btn__link links"
                >
                  {main.linkTxt}
                </Link>
              </div>
            </section>
          </div>
        ))}
    </div>
  );
};

export default MainTopInfoRight;
