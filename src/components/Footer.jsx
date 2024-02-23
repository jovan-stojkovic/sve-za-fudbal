import { Link } from "react-router-dom";

const Footer = () => {
    return ( <footer>
        <div className="footer-container">
            <p className="foolow-us">
                Zapratite nas!
            </p>
            <div className="social">
                <Link to="https://www.instagram.com/" target="_blank" className="link-social"><img src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-uc6feurl.png" alt="insta" /></Link>
                <Link to="https://www.facebook.com/" target="_blank" className="link-social"><img src="https://www.iconbolt.com/iconsets/pixelicons-color/facebook.svg" alt="facebook" /></Link>
                <Link to="https://www.twitter.com/" target="_blank" className="link-social"><img src="https://www.iconbolt.com/iconsets/pixelicons-color/twitter.svg" alt="twitter" /></Link>
                <Link to="https://www.youtube.com/" target="_blank" className="link-social"><img src="https://www.iconbolt.com/iconsets/pixelicons-color/youtube.svg" alt="youtube" /></Link>
                <Link to="https://www.linkedin.com/" target="_blank" className="link-social"><img src="https://www.iconbolt.com/iconsets/darkwing-free-social/linkedin.svg" alt="linkedin" /></Link>
                <Link to="https://www.tiktok.com/" target="_blank" className="link-social"><img src="https://www.iconbolt.com/iconsets/darkwing-free-social/tik-tok.svg" alt="tiktok" /></Link>
            </div>
        </div>
    </footer> );
}
 
export default Footer;