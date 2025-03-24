//import
import dcComicsLinks from "../data/DcComicsFooter"
import shopLinks from "../data/ShopDcFooter";
import legalData from "../data/LegalDataFooter";
import partners from "../data/Partners";

export default function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="list_container">
                    <div className="row">

                        <div className="col">
                            <ul>
                                <h3>DC COMICS</h3>
                                {dcComicsLinks.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>

                            <ul>
                                <h3>SHOP</h3>
                                {shopLinks.map((link, index) =>
                                    <li key={index}>{link}</li>
                                )}
                            </ul>
                        </div>
                        <div className="col">
                            <ul>

                                <h3>DC</h3>
                                {legalData.map((link, index) =>
                                    <li key={index}>{link}</li>
                                )}
                            </ul>

                        </div>
                        <div className="col">
                            <ul>
                                <h3>SITES</h3>
                                {partners.map((link, index) =>
                                    <li key={index}>{link}</li>
                                )}
                            </ul>
                        </div>


                    </div>

                </div>
                <img className="footer-logo" src="/img/dc-logo-bg.png" alt="" />
            </div >
            <div className="media_container">
                <button className="signup_btn" type="button">SIGN-UP NOW!</button>
                <div className="Socialmedia_box">
                    <h3>FOLLOW US</h3>
                    <img src="/img/footer-facebook.png" alt="" />
                    <img src="/img/footer-twitter.png" alt="" />
                    <img src="/img/footer-youtube.png" alt="" />
                    <img src="/img/footer-pinterest.png" alt="" />
                    <img src="/img/footer-periscope.png" alt="" />

                </div>
            </div>



        </>
    )

}