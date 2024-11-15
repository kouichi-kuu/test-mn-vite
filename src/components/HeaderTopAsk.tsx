const HeaderTopAsk = ({menuAsk}:{menuAsk:string})=>{
    return (
        <div className="menu-ask">
            <div className="menu-ask__mail">
                <a href={`mailto:${menuAsk}`} className="links">お問い合わせ</a>
            </div>
        </div>
    )
}

export default HeaderTopAsk