import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,

    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className="nav-bar">
        <div className='logo'>
            <div className='logoimg'>
                <Link href="/">
                    <a className='logo'>
                        <Image src={LogoS} alt="logo"></Image>
                        
                    </a>
                </Link>
            </div>

        </div>
        <nav>

            <Link href="/">
                <a>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </Link>



            <Link href="/about">
                <a className="about-link">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </Link>


            <Link target="_blank" href="/portfolio" >
                <a className="contact-link">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </Link>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jorgeortizc06/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/jorgeortizc06">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/crazy1405">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;