import { Link } from "react-router-dom";

type menuInfoType = {
  menuInfo: {
    txt: string;
    link: string;
  }[];
  whiteRogo: string;
};

const FooterTopFoot = ({ whiteRogo, menuInfo }: menuInfoType) => {
  return (
    <div id="foot-wrap">
      <ul className="foot__company-name">
        <li className="foot__company-rogo">
          <img src={whiteRogo} className="foot__company-img images" alt="" />
          <span className="foot__company-txt sp-elem">株式会社 テス</span>
        </li>
        <li className="foot__company-txt pc-elem">
          Total Engineering Service for Plant 株式会社 テス
        </li>
        <li className="foot__company-txt sp-elem">
          Total Engineering Service for Plant
        </li>
      </ul>
      <p className="foot__info">
        プラント配管工事、ダクト工事、機械据付、図面作成、溶接
      </p>
      <ul className="foot__build-info">
        <li className="foot__office">
          <p className="foot__heading">OFFICE</p>
          {/* <p className="foot__fax">FAX 052-601-9580</p> */}
          <div className="foot__address-wrap">
            <span className="foot__address-num">〒451-0025</span>
            <span className="foot__address">
              愛知県名古屋市西区秩父通2丁目12 Alba Grande 名護屋204
            </span>
          </div>
        </li>
        <li className="foot__field">
          <p className="foot__heading">FIELD OFFICE</p>
          <div className="foot__address-wrap">
            <span className="foot__address-num">〒476-0005</span>
            <span className="foot__address">
              愛知県東海市新宝町31番地1（三洋化成工業（株）名古屋工場内）
            </span>
          </div>
        </li>
        <li className="foot__factory">
          <p className="foot__heading">FACTORY</p>
          <div className="foot__address-wrap">
            <span className="foot__address-num">〒459-8001</span>
            <span className="foot__address">
              愛知県名古屋市緑区大高町字西正地60
            </span>
          </div>
        </li>
      </ul>
      <ul className="foot__menu">
        {menuInfo &&
          menuInfo.map((menu, index) => (
            <li className="foot__menu-list" key={index}>
              <Link to={menu.link} className="foot__menu-link links">
                {menu.txt}
              </Link>
            </li>
          ))}
      </ul>
      <p className="foot__copylight">
        Copyright © 株式会社テス All rights reserved.
      </p>
    </div>
  );
};

export default FooterTopFoot;
