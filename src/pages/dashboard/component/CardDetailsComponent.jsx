import React from "react";
import cardImg from '../../../assets/image/cardgirl.svg'
import '../styles/CardDetailsComponent.css'

function CardDetailsComponent(){
    return(
        <div className="container">
            <div>
                <img src={cardImg} alt="pic"/>
            </div>
            <label htmlFor="id">
                Id: <input type="text" id="id"/>
            </label>
            <label htmlFor="firstName">
                FirstName: <input type="text" id="firstName"/>
            </label>
            <label htmlFor="lastName">
                LastName: <input type="text" id="lastName"/>
            </label>
            <label htmlFor="maidenName">
                Maiden Name: <input type="text" id="maidenName" />
            </label>
            <label htmlFor="age">
                Age: <input type="text" id="age"/>
            </label>
            <label htmlFor="gender">
                Gender: <input type="text" id="gender" />
            </label>
            <label htmlFor="email">
                Email: <input type="text" id="email"/>
            </label>
            <label htmlFor="phoneNumber">
                Phone Number: <input type="text" id="phoneNumber" />
            </label>
            <label htmlFor="username">
                Username: <input type="text" id="username"/>
            </label>
            <label htmlFor="password">
                Password: <input type="text" id="password" />
            </label>

        </div>
    )
}

export default CardDetailsComponent