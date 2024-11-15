type ServiceContArrayType = {
  serviceContArray: {
    serviceImg: string;
    serviceHeadTxt: string;
    serviceBigTxt: string;
    serviceSmallTxt: string;
  }[];
};

const ServicePageContent = ({ serviceContArray }: ServiceContArrayType) => {
  return (
    <div className="service-page__content">
      <div className="service-page__elem-wrap">
        {serviceContArray &&
          serviceContArray.map((info, index) => (
            <ul className="service-page__list-wrap" key={index}>
              <li className="service-page__elem-list list-img">
                <figure className="service-page__img-elem">
                  <img
                    src={info.serviceImg}
                    className="service-page__img images"
                    alt=""
                  />
                </figure>
              </li>
              <li className="service-page__elem-list list-txt">
                <p className="service-page__heading-txt">
                  {info.serviceHeadTxt}
                </p>
                <p className="service-page__bit-txt">{info.serviceBigTxt}</p>
                <p className="service-page__small-txt">
                  {info.serviceSmallTxt}
                </p>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default ServicePageContent;
