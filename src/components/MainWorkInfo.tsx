import { Link } from "react-router-dom";

type workNewsInfoType = {
  workNewsInfo: {
    id: number;
    workImg: string;
    workDate: string;
    workTxt: string;
    workSlideLink: string;
  }[];
  arrowLeft: string;
  arrowRight: string;
  workLink: string;
};

const MainWorkInfo = ({
  workNewsInfo,
  arrowLeft,
  arrowRight,
  workLink,
}: workNewsInfoType) => {
  return (
    <div id="work-wrap">
      <div className="work__heading">
        <p className="work__top-headtxt">WORK&NEWS</p>
        <p className="work__sub-headtxt">実績紹介＆お知らせ</p>
      </div>
      <div className="work__slide-wrap">
        <div className="work__arrow-left">
          <img src={arrowLeft} className="work__arrow-img images" alt="" />
        </div>
        <ul className="work__slide">
          {workNewsInfo &&
            workNewsInfo.map((info, index) => (
              <li className="work__slide-list" key={index}>
                <Link
                  to={`/works/${info.id}`}
                  className="work__slidelist-link links"
                >
                  <figure className="work__slide-imagewrap">
                    <img
                      src={info.workImg}
                      className="work__slide-img images"
                      alt=""
                    />
                  </figure>
                  <div className="work__info-wrap">
                    <p className="work__info-date">{info.workDate}</p>
                    <p className="work__info-txt">{info.workTxt}</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        <div className="work__arrow-right">
          <img src={arrowRight} className="work__arrow-img images" alt="" />
        </div>
      </div>
      <div className="work__more-btn ghost-btn">
        <Link to={workLink} className="work__link ghost-btn__link links">
          もっと見る
        </Link>
      </div>
    </div>
  );
};

export default MainWorkInfo;
