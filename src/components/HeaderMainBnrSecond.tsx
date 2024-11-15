type HeaderElemInfo = {
    HeaderBnrImg1: string;
    spHeaderBnrImg1: string;
    HeaderBnrTopTxt: string;
    HeaderBnrBtmTxt: string;
}

const HeaderMainBnrSecond = ({HeaderBnrImg1,spHeaderBnrImg1,HeaderBnrTopTxt,HeaderBnrBtmTxt}:HeaderElemInfo)=>{
    return (
        <div id="header-mainbnr-second" >
            <ul className="header-mainbnr-second__rogo-elem">
                <li className="header-mainbnr-second__top-txt">{HeaderBnrTopTxt}</li>
                <li className="header-mainbnr-second__btm-txt">{HeaderBnrBtmTxt}</li>
            </ul>
            <div className="header-mainbnr__elem">
                <div className="header-mainbnr__img pc-elem"><img src={HeaderBnrImg1} alt="" className="header-mainbnr__picture images" /></div>
                <div className="header-mainbnr__img sp-elem"><img src={spHeaderBnrImg1} alt="" className="header-mainbnr__picture images" /></div>
            </div>
        </div>
    )
}

export default HeaderMainBnrSecond