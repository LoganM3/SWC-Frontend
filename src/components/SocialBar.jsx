import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube,faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../styles/Footer.css"


export default function SocialBar(){

    return (
        <div className="social-bar">
            <h3>Follow us</h3>
            <a className="youtube" href ="https://www.youtube.com/channel/UC6XiXQoiuhbb-R0_TAeB-tA">
            <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
            <a className="Insta" href ="https://www.instagram.com/sundaywakecrew/">
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a className="LinkedIn" href ="https://www.linkedin.com/in/logan-mccalley-90607010b/">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a className="github" href ="https://www.github.com/LoganM3">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>

        </div>
    )
}