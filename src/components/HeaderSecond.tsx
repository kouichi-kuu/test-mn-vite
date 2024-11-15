import HeaderTop from "./HeaderTop"
import HeaderAboveLine from "./HeaderAboveLine"
import HeaderMainBnrSecond from "./HeaderMainBnrSecond"
import HeaderBtmLine from "./HeaderBtmLine"
import HeaderSecondNavBack from "./HeaderSecondNavBack"

import HeaderBnrImg1 from '../assets/images/bnr_img1.jpg'
import spHeaderBnrImg1 from '../assets/images/sp_bnr_img1.jpg'

type HeaderSecondType = {
    HeaderBnrTopTxt: string;
    HeaderBnrBtmTxt: string;
    HeaderNavTopTxt: string;
    HeaderNavClassName: string;
    HeaderNavSecdTxt: string;
}

const Header = ({HeaderBnrTopTxt,HeaderBnrBtmTxt,HeaderNavTopTxt,HeaderNavClassName,HeaderNavSecdTxt}:HeaderSecondType)=>{
    return (
        <header id="header">
            <HeaderTop />
            <HeaderAboveLine menuAboveTxt={'Total Engineering Service for Plant 株式会社 テス'} />
            <HeaderMainBnrSecond HeaderBnrImg1={HeaderBnrImg1} spHeaderBnrImg1={spHeaderBnrImg1} HeaderBnrTopTxt={HeaderBnrTopTxt} HeaderBnrBtmTxt={HeaderBnrBtmTxt} />
            <HeaderBtmLine headerBtmTxt={'プラント配管工事・ダクト工事・機械据付・図面制作のプロフェッショナル'} />
            <HeaderSecondNavBack HeaderNavTopTxt={HeaderNavTopTxt} HeaderNavClassName={HeaderNavClassName} HeaderBnrBtmTxt={HeaderBnrBtmTxt} HeaderNavSecdTxt={HeaderNavSecdTxt} />
        </header>
    )
}

export default Header