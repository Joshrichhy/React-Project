import React from "react";
import '../styles/TopNav.css'
import LoginSvg from '../../../assets/image/login.svg'
class TopNav extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div className="topNav">
                <div className="ptag">
                    <p className="logo">REGNOZITE</p>
                </div>
                <nav>
                    <li>
                        <a href="https://google.com" className="names1">Features</a>
                    </li>
                    <li>
                        <a href="" className="names2">Integration</a>
                    </li>
                    <li>
                        <a href="" className="names3">Pricing</a>
                    </li>
                    <li>
                        <a href="" className="names4">Company</a>
                    </li>
                    <li>
                        <a href="" className="names5">Blog</a>
                    </li>
                    <div className="getDemo">
                        <p className="demo">Get Demo</p>
                    </div>
                    <div className="login">
                        <img src={LoginSvg} alt="fav"/>
                            <p className="ptag_login">Login</p>
                    </div>

                </nav>
            </div>
    )

    }
}
export default TopNav

