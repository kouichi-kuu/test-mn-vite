import { Link } from "react-router-dom";

type worksContArrayType = {
  worksContArray: {
    id: number;
    image: string;
    bigtxt: string;
    datetxt: string;
    smalltxt: string;
  }[];
};

const WorksPageContent = ({ worksContArray }: worksContArrayType) => {
  return (
    <div className="works-page__content">
      <div className="works-page__elem-wrap">
        {worksContArray &&
          worksContArray.map((info, index) => (
            <ul className="works-page__list-wrap" key={index}>
              <li className="works-page__elem-list list-img">
                <Link to={`/works/${info.id}`} className="links">
                  <figure className="works-page__img-elem">
                    <img
                      src={info.image}
                      className="works-page__img images"
                      alt=""
                    />
                  </figure>
                </Link>
              </li>
              <li className="works-page__elem-list list-txt">
                <Link to={`/works/${info.id}`} className="links">
                  <p className="works-page__big-txt">{info.bigtxt}</p>
                  <p className="works-page__date-txt">{info.datetxt}</p>
                  <p className="works-page__small-txt">{info.smalltxt}</p>
                </Link>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default WorksPageContent;
