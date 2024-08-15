import CoverImage from "../images/cover-image.jpg"
import ProfileImage from "../images/profile-image.jpg"
import { FaTwitter, FaGithub } from "react-icons/fa"

export function Header() {
    return (
        <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="display-table">
                    <div className="display-table-contents">
                        <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                        <h1 className="title-text">上田 周</h1>
                        <h3 className="title-text">Engineer</h3>
                        <h1 className="social-icons">
                            <li className="icon-link">
                                <a href="https://x.com/basrossDev">
                                <FaTwitter color="white" size="2rem"/>
                                </a>
                            </li>
                            <li className="icon-link">
                                <a href="https://github.com/shu-amane">
                                    <FaGithub color="white" size="2rem"/>
                                </a>
                            </li>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}