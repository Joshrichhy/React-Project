import React from "react";
import '../styles/Footer.css'
import LoginSvg from '../../../assets/image/login.svg'
import handShakeSvg from '../../../assets/image/handshake.svg'
import climbImg from '../../../assets/image/climbImg.svg'
import allInOne from '../../../assets/image/allInOne.svg'
import search from '../../../assets/image/search.svg'
import grow from '../../../assets/image/grow.svg'
import steth from '../../../assets/image/steth.svg'
import vendor from '../../../assets/image/vendor.svg'
import pilot from '../../../assets/image/pilot.svg'
import channel from '../../../assets/image/channel.svg'
import playbook from '../../../assets/image/playbook.svg'


class FooterState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: 0
        }
    }


  handleFirstName= (event)=>{
        this.setState({
            firstName: event.target.value
        })

}

    handleChange= (event)=>{
        this.setState({
            ...this.state,[event.target.name]: event.target.value
        })

    }

    handleLastName= (event)=>{
        this.setState({
            lastName: event.target.value
        })

    }

    handleAge= (event)=>{
        this.setState({
            age: event.target.value
        })

    }

    render() {
        return(
            <div>

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
        <div className="SecondBigcontainer">

            <div className="second-Container">
                <h3 className="findTheRightPartners">Find the right partners to <br/> fuel your business
                    growth </h3>
                <p className="join">Join the vibrant community of MSPs to forge long lasting relationship with partners
                    <br/>that help you create excellent customer experience </p>
                <div className="register">
                    <button>Register today</button>
                </div>
            </div>

            <div className="handshake">
                <img src={handShakeSvg} alt="handshake"/>
            </div>
            <div className="climbImg">
                <img src={climbImg} alt="Climb"/>
            </div>

            <div className="third-Container">

                <h2 className="List">List. Sell. Grow</h2>
                <div className="InsideContainer">
                    <div className="fourthContainer">
                        <img src={allInOne} alt="allInOne"/>
                            <p>Be a part of the only All-in-One <br/>
                                platform for IT services</p>

                            <img src={search} alt="search"/>
                                <p>Come closer to finding your<br/>
                                    next customer</p>
                                <img src={grow} alt="grow"/>
                                    <p>Grow your business with a<br/>
                                        single click</p>

                    </div>
                </div>


                <div className="thirdBigContainer">
                    <div className="firstInnerContainer">
                        <h2>Your channel program <br/>
                            on steroids</h2>
                        <p>Tired of finding MSPs that can help you boost your <br/>
                            channel sales? You're in luck, because they are all here</p>
                    </div>

                    <div className="images">
                        <img src={steth} alt="scope"/>
                    </div>

                    <div className="images">
                        <img src={vendor} alt="vendor"/>
                    </div>
                    <div>
                        <h2>Become the vendor <br/>
                            everyone wants to buy from</h2>
                        <p>Gain brand authority and visibility with the help of the <br/>
                            largest IT service ecosystem. Find customer who are <br/>
                            looking for your solution right now!</p>
                        <p>sign up now --> </p>
                    </div>
                    <div className="thirdInnerContainer">
                        <h2>It's like having Your best<br/>
                            Salesman on autopilot</h2>
                        <p>Share collaterals and documents that are <br/>
                            automatically branded. Leverage a rich partner <br/>
                            network that sells your solution exactly the way <br/>
                            your best salesman would</p>
                        <p>sign up now --> </p>

                    </div>
                    <div className="images">
                        <img src={pilot} alt="pilot"/>
                    </div>
                    <div className="images"/>
                        <img src={channel} alt="channel"/>
                    </div>
                    <div>

                        <h2>Track your channel <br/>
                            performance</h2>
                        <p>Monitor the health and revenue of your channel<br/>
                            program and streamline your campaign to win more <br/>
                            customers within Zomentum</p>
                        <p>sign up now --> </p>
                    </div>
                    <div>
                        <h2>Get The best version of <br/>
                            Your sales playbook</h2>
                        <p>Gather insights about top channel sellers and find<br/>
                            out what pitch and collaterals ensure maximum <br/>
                            profitability. Win happy customers with an <br/>
                            optimized sales playbook.</p>
                        <p>sign up now --> </p>

                    </div>
                    <div className="images">
                        <img src={playbook} alt="playbook"/>
                    </div>

                </div>
                <div className="footer">
                    <div className="footerOne">
                        <div>
                            <h1>Product</h1>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Integration</p>
                            <p>Product</p>
                        </div>
                        <div>
                            <h1>Company</h1>
                            <p>About us</p>
                            <p>Contact us</p>
                            <p>Submit a ticket</p>
                            <p>Privacy policy</p>
                            <p>Terms & conditions</p>
                        </div>
                        <div>
                            <h1>Users
                                <br/>

                                    <label htmlFor="firstName">
                                        FirstName:  <input type="text" name="firstName" id="firstName"
                                                           placeholder={"Enter your firstName"}
                                                           value={this.state.firstName} onChange={this.handleFirstName}/>
                                    </label>  <br/><br/>
                                    <label htmlFor="lastName">
                                        LastName:  <input type="text" name="lastName" id="lastName"
                                                          value={this.state.lastName} onChange={this.handleLastName}/>
                                    </label> <br/><br/>
                                    <label htmlFor="age">
                                        Age:  <input type="text" name="age" id="age"
                                                     value={this.state.age} onChange={this.handleAge}/>
                                    </label>
                                    <div/>
                            </h1>

                        </div>
                        <div>
                            <h1>Guides</h1>
                            <p>MSP</p>
                            <p>MSP Sales</p>

                        </div>
                        <div>
                            <h1>Contact Us</h1>
                            <p>Address</p>

                        </div>
                    </div>
                    <div className="footerTwo">
                        <div>2020 Pactora Inc. All rights reserved</div>
                        <div>Follow us on social</div>
                    </div>
                </div>

            </div>
            </div>


        )



    }
}
export default FooterState
