const FooterTopContact = ({footerAsk}:{footerAsk:string})=>{
    return (
        <div id="contact-wrap">
            <div className="contact-wrap__heading">
                <p className="contact-wrap__top-headtxt">CONTACT</p>
                <p className="contact-wrap__sub-headtxt">お問い合わせ</p>
            </div>
            <div className="contact-wrap__info">
                <p className="contact-wrap__text">お問い合わせはメールにてご連絡ください。</p>
                <div className="contact-wrap__mail">
                    <a href={`mailto:${footerAsk}`} className="contact-wrap__mail-link links">お問い合わせ</a>
                </div>
            </div>
        </div>
    )
}

export default FooterTopContact