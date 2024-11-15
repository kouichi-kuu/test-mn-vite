//第三階層用パンくずパーツ
import { Link } from "react-router-dom";

type HeaderNavBackType = {
  HeaderSecondNavTxt: string;
  HeaderSecondNavLink: string;
  HeaderThirdNavTxt: string;
  //HeaderThirdNavLink: string;
};

const HeaderThirdNavBack = ({
  HeaderSecondNavTxt,
  HeaderSecondNavLink,
  HeaderThirdNavTxt,
}: HeaderNavBackType) => {
  return (
    <div id="header-thirdback">
      <ul className="header-secondback__pankuzu">
        <li className="header-secondback__list">
          <Link to="/" className="header-secondback__listtxt">
            TOP
          </Link>
        </li>
        <li className="header-secondback__list">
          <Link to={HeaderSecondNavLink} className="header-secondback__listtxt">
            {HeaderSecondNavTxt}
          </Link>
        </li>
        <li className="header-secondback__list">{HeaderThirdNavTxt}</li>
      </ul>
    </div>
  );
};

export default HeaderThirdNavBack;
