import HeaderTop from "./HeaderTop"
import HeaderAboveLine from "./HeaderAboveLine"
import HeaderMainBnr from "./HeaderMainBnr"
import HeaderBtmLine from "./HeaderBtmLine"

import HeaderBnrImg1 from '../assets/images/bnr_img1.jpg'
import spHeaderBnrImg1 from '../assets/images/sp_bnr_img1.jpg'
import HeaderBnrWhiteRogo from '../assets/images/white_tes_rogo1.png'

const Header = ()=>{
    return (
        <header id="header">
            <HeaderTop />
            <HeaderAboveLine menuAboveTxt={'Total Engineering Service for Plant 株式会社 テス'} />
            <HeaderMainBnr HeaderBnrImg1={HeaderBnrImg1} spHeaderBnrImg1={spHeaderBnrImg1} HeaderBnrWhiteRogo={HeaderBnrWhiteRogo} HeaderBnrTxt={'生活にかかせない生産設備を支える仕事'} />
            <HeaderBtmLine headerBtmTxt={'プラント配管工事・ダクト工事・機械据付・図面制作のプロフェッショナル'} />
        </header>
    )
}

export default Header