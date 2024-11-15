import { Link } from "react-router-dom";

type mainTopInfoType = {
  mainTopInfo: {
    title: string;
    alphaTitle: string;
    bigTxt: string;
    smallTxt: string;
    image: string;
    linkTxt: string;
    link: string;
  }[];
};

const MainTopInfo = ({ mainTopInfo }: mainTopInfoType) => {
  return (
    <div id="main-wrap">
      {mainTopInfo &&
        mainTopInfo.map((main, index) => (
          <div className="main-contents" key={index}>
            <section className="main-contents__elem section-service">
              <p className="main-contents__alpha-txt sp-elem">
                {main.alphaTitle}
              </p>
              <p className="main-contents__headtxt">{main.title}</p>
              <div className="main-contents__wrap">
                <div className="main-contents__info-wrap">
                  <p className="main-contents__alpha-txt pc-elem">
                    {main.alphaTitle}
                  </p>
                  <ul className="main-contents__info">
                    <li className="main-contents__big-txt">{main.bigTxt}</li>
                    <li className="main-contents__small-txt">
                      {main.smallTxt}
                    </li>
                  </ul>
                </div>
                <div className="main-contents__img-wrap">
                  <figure className="main-contents__img">
                    <img
                      src={main.image}
                      alt=""
                      className="main-contents__picture images"
                    />
                  </figure>
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

export default MainTopInfo;
