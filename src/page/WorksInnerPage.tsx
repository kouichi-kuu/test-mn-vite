//実績紹介第2ページ(第三階層)
import HeaderThird from "../components/HeaderThird";
import Footer from "../components/Footer";
//import { useParams } from "react-router-dom";

import pcHeaderOverViewImg from "../assets/images/second_back_works.jpg";
import spHeaderOverViewImg from "../assets/images/sp_second_back_works.jpg";

type worksContArrayType = {
  worksContArray: {
    id: number;
    image: string;
    bigtxt: string;
    datetxt: string;
    smalltxt: string;
  }[];
};

// type ParamTypes = {
//   id: string;
// };

const WorksInnerPage = ({ worksContArray }: worksContArrayType) => {
  //const urlParams = useParams<{id: number}>()
  //const { id } = useParams<ParamTypes>();
  return (
    <div id="second-page">
      <HeaderThird
        HeaderBnrTxt={"プラント配管工事"}
        HeaderNavClassName={"third-page"}
        pcHeaderOverViewImg={pcHeaderOverViewImg}
        spHeaderOverViewImg={spHeaderOverViewImg}
        HeaderSecondNavTxt={"実績紹介"}
        HeaderSecondNavLink={"/works"}
        HeaderThirdNavTxt={"プラント配管工事"}
        //HeaderThirdNavLink={"/company/overview"}
      />
      <div id="thirdelem-page">
        <div id="post">
          <div id="post__left">
            <ul className="post__left-elem">
              <li className="post__left-heading">{worksContArray[0].bigtxt}</li>
              <li className="post__left-date">{worksContArray[0].datetxt}</li>
              <li className="post__left-thumnail sp-elem">
                <img
                  src={worksContArray[0].image}
                  className="post__left-img images"
                  alt=""
                />
              </li>
              <li className="post__left-smtxt">{worksContArray[0].smalltxt}</li>
            </ul>
          </div>
          <div id="post__right" className="pc-elem">
            <figure className="post__right-img">
              <img
                src={worksContArray[0].image}
                className="post__left-img images"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorksInnerPage;
