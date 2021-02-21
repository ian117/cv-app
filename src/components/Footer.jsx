import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faGithub, faYoutube, faJs} from '@fortawesome/free-brands-svg-icons';



const Footer = () => (
    <div className="FooterDiv">
        <div>
            <p>~Ian Vss</p>
        </div>
        <div>
            <div>
              
                    <a href="#">
                        <FontAwesomeIcon className="icon ICONFacebook" icon={faFacebook} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="icon ICONTwitter" icon={faTwitter} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="icon ICONGithub" icon={faGithub} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="icon ICONYoutube" icon={faYoutube} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="icon ICONJs" icon={faJs} />
                    </a>

            </div>
        </div>

    </div>
)

export default Footer;