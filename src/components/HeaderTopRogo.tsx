type HeaderimgType = {
    HeaderTopRogoImg: string;
    HeaderTopPlant: string;
}

const HeaderTopRogo = ({HeaderTopRogoImg,HeaderTopPlant}:HeaderimgType)=>{
    return (
        <ul className='header-top__rogo-elem'>
            <li className='header-top__rogo'>
                <img src={HeaderTopRogoImg} alt='header-rogo' className='header-top__rogo-img images' />
            </li>
            <li className='header-top__plant'>
                <img src={HeaderTopPlant} alt='header-plant' className='header-top__plant-img images' />
            </li>
        </ul>
    )
}

export default HeaderTopRogo