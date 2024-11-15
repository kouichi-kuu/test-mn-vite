import CompanyPageContent from "./CompanyPageContent";

const CompanyLocationContent = () => {
  return (
    <div className="company-page__philosophy">
      <p className="company-page__philosophy-heading">事業所所在地</p>
      <ul className="company-page__location-wrap">
        <li className="company-page__location-list">
          <p className="company-page__location-bigtxt">
            OFFICE（本社オフィス）
          </p>
          <p className="company-page__location-postnum">〒451-0024</p>
          <p className="company-page__location-address">
            愛知県名古屋市西区秩父通2丁目12 Alba Grande 名護屋204
          </p>
          <div className="company-page__location-map">
            <iframe
              className="com-location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.3681144202587!2d136.8927138762421!3d35.197298656405216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003774375c71ae9%3A0xf2553a63a572276c!2z44Ki44Or44OQ44Kw44Op44Oz44OH5ZCN6K235bGL!5e0!3m2!1sja!2sjp!4v1731220818754!5m2!1sja!2sjp"
            ></iframe>
          </div>
        </li>
        <li className="company-page__location-list">
          <p className="company-page__location-bigtxt">
            FIELD OFFICE（現場オフィス）
          </p>
          <p className="company-page__location-postnum">〒476-0005</p>
          <p className="company-page__location-address">
            愛知県東海市新宝町31番地1（三洋化成工業㈱名古屋工場内）
          </p>
          <div className="company-page__location-map">
            <iframe
              className="com-location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.1188822888776!2d136.8954962762373!3d35.05376676418624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037ea89443824d%3A0x6d0b83ce45783a6!2z5LiJ5rSL5YyW5oiQ5bel5qWtIOWQjeWPpOWxi-W3peWgtA!5e0!3m2!1sja!2sjp!4v1731221135299!5m2!1sja!2sjp"
            ></iframe>
          </div>
        </li>
        <li className="company-page__location-list">
          <p className="company-page__location-bigtxt">FACTORY（工場）</p>
          <p className="company-page__location-postnum">〒459-8001</p>
          <p className="company-page__location-address">
            愛知県名古屋市緑区大高町字西正地60
          </p>
          <div className="company-page__location-map">
            <iframe
              className="com-location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.6405736850975!2d136.92385907623793!3d35.065724263539124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037c72082156c5%3A0x2d865d70492f7c5b!2z44CSNDU5LTgwMDEg5oSb55-l55yM5ZCN5Y-k5bGL5biC57eR5Yy65aSn6auY55S66KW_5q2j5Zyw77yW77yQ!5e0!3m2!1sja!2sjp!4v1731221233381!5m2!1sja!2sjp"
            ></iframe>
          </div>
        </li>
      </ul>
      <CompanyPageContent />
    </div>
  );
};

export default CompanyLocationContent;
