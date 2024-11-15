import HeaderSecond from "../components/HeaderSecond";
import Footer from "../components/Footer";
import ServicePageContent from "../components/ServicePageContent";

import servicePlantImg from "../assets/images/service_plant.jpg";
import serviceDuctImg from "../assets/images/service_duct.jpg";
import serviceMachineImg from "../assets/images/service_machine.jpg";

const ServicePage = () => {
  const serviceContArray = [
    {
      serviceImg: servicePlantImg,
      serviceHeadTxt: "Plant",
      serviceBigTxt: "プラント配管工事",
      serviceSmallTxt:
        "工場の安全性を守るために、綿密に設計や施工をする仕事です。プラント配管は、製造されるものや機械の配置によって工場ごとに違うため、プラント配管工の経験や技術、対応力が求められます。",
    },
    {
      serviceImg: serviceDuctImg,
      serviceHeadTxt: "Duct",
      serviceBigTxt: "ダクト工事",
      serviceSmallTxt:
        "建物内における空調設備、給排水、衛生設備等のための配管・ダクト工事を行います。製作・施工・メンテナンスなど幅広く対応します。高度な技術と豊富な経験が必要になります。",
    },
    {
      serviceImg: serviceMachineImg,
      serviceHeadTxt: "Installation",
      serviceBigTxt: "機械据付",
      serviceSmallTxt:
        "工場への重量物の移設や搬入・搬出、据付工事を行います。プラント内の重量機器は精密なものが多く危険も伴うため、安全性と正確性が求められます。事前にしっかりと現場調査を行い、綿密なプランを立て、迅速で丁寧な施工を行います。",
    },
    {
      serviceImg: serviceDuctImg,
      serviceHeadTxt: "Drawing",
      serviceBigTxt: "図面作成",
      serviceSmallTxt:
        "大規模な設備設計をはじめ小規模な生産ラインまで、幅広いプラント配管設計を行います。工場の新設、生産ラインの改造や増設などによる配管設計を行い図面作成を行います。",
    },
    {
      serviceImg: serviceMachineImg,
      serviceHeadTxt: "Welding",
      serviceBigTxt: "溶接",
      serviceSmallTxt:
        "株式会社T.E.Sは自社の工場で各施設に対応可能な配管や設備の溶接、配管設備修理など幅広い溶接工事も行なっております。",
    },
  ];
  return (
    <div id="second-page">
      <HeaderSecond
        HeaderBnrTopTxt={"SERVICE"}
        HeaderBnrBtmTxt={"業務内容"}
        HeaderNavTopTxt={
          "安全に正確に、誠意と向上⼼を持ってあらゆる現場で貢献する"
        }
        HeaderNavSecdTxt={
          "その後に作業をする人のことを考え、安全・潤滑な作業ができるように足場工事を心がけています。工事現場での作業者の安全を守る足場を組む、とてもやりがいのある仕事です。現場で様々な工事をクラフトビルドでは行なっています。その一部をご紹介いたします。"
        }
        HeaderNavClassName={"service"}
      />
      <div id="service-page">
        <ServicePageContent serviceContArray={serviceContArray} />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
