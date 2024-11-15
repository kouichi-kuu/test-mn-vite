import { Link } from "react-router-dom";

type HeaderNavBackType = {
  HeaderNavTopTxt: string;
  HeaderNavClassName: string;
  HeaderBnrBtmTxt: string;
  HeaderNavSecdTxt: string;
};

const HeaderSecondNavBack = ({
  HeaderNavTopTxt,
  HeaderNavClassName,
  HeaderBnrBtmTxt,
  HeaderNavSecdTxt,
}: HeaderNavBackType) => {
  return (
    <div id="header-secondback" className={HeaderNavClassName}>
      <ul className="header-secondback__pankuzu">
        <li className="header-secondback__list">
          <Link to="/" className="header-secondback__listtxt">
            TOP
          </Link>
        </li>
        <li className="header-secondback__list">{HeaderBnrBtmTxt}</li>
      </ul>
      <div className="header-secondback__toptxt-elem">
        <p className="header-secondback__toptxt">{HeaderNavTopTxt}</p>
        <div className="header-secondback__txtelem">
          <p className="header-secondback__secondtxt">{HeaderNavSecdTxt}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSecondNavBack;
