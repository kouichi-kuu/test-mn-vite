type HeaderImg = {
    HeaderBnrImg1 : string;
    spHeaderBnrImg1: string;
    HeaderBnrWhiteRogo : string;
    HeaderBnrTxt : string;
}

const HeaderMainBnr = ({HeaderBnrImg1,spHeaderBnrImg1,HeaderBnrWhiteRogo,HeaderBnrTxt}:HeaderImg)=>{
    return (
        <div id="header-mainbnr">
            <ul className="header-mainbnr__rogo-elem">
                <li className="header-mainbnr__rogo"><img src={HeaderBnrWhiteRogo} alt="" className="header-mainbnr__rogo-img images" /></li>
                <li className="header-mainbnr__txt">{HeaderBnrTxt}</li>
            </ul>
            <div className="header-mainbnr__elem">
                <div className="header-mainbnr__img pc-elem"><img src={HeaderBnrImg1} alt="" className="header-mainbnr__picture images" /></div>
                <div className="header-mainbnr__img sp-elem"><img src={spHeaderBnrImg1} alt="" className="header-mainbnr__picture images" /></div>
            </div>
        </div>
    )
}

export default HeaderMainBnr