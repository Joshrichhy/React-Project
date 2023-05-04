import React from "react";
import cardImg from '../../../assets/image/cardgirl.svg'
import '../styles/CardDetailsComponent.css'
import {useSelector, useDispatch} from "react-redux";
import {addFirstName, addLastName, addMaidenName} from "../../../store/CardDetails";

function CardDetailsComponent(){
    const firstName = useSelector((state)=> state.cardDetails.firstName)
    const lastName = useSelector((state)=> state.cardDetails.lastName)
    const maidenName = useSelector((state)=> state.cardDetails.maidenName)
    const id = useSelector((state)=> state.cardDetails.id)
    const username = useSelector((state)=> state.cardDetails.username)
    const password = useSelector((state)=> state.cardDetails.password)
    const gender = useSelector((state)=> state.cardDetails.gender)
    const email = useSelector((state)=> state.cardDetails.email)
    const phoneNumber = useSelector((state)=> state.cardDetails.phoneNumber)
    const age = useSelector((state)=> state.cardDetails.age)
    const dispatch = useDispatch()



    return(
        <div className="MainContainer">
        <div className="container">


                <img src={cardImg} alt="pic"/>


            <div className="details">
            <label htmlFor="id">
                Id: <input type="text" id="id" value={id}/>
            </label>
            <label htmlFor="firstName">
                FirstName: <input type="text" id="firstName" value={firstName}/>
            </label>
            <label htmlFor="lastName">
                LastName: <input type="text" id="lastName" onClick={()=> dispatch(addLastName("Oluwakuse"))} value={lastName}/>
            </label>
            <label htmlFor="maidenName">
                Maiden Name: <input type="text" id="maidenName" onClick={()=> dispatch(addMaidenName("Oluwatosin"))} value={maidenName} />
            </label>
            <label htmlFor="age">
                Age: <input type="text" id="age" value={age}/>
            </label>
            <label htmlFor="gender">
                Gender: <input type="text" id="gender" value={gender}/>
            </label>
            <label htmlFor="email">
                Email: <input type="text" id="email" value={email}/>
            </label>
            <label htmlFor="phoneNumber">
                Phone Number: <input type="text" id="phoneNumber" value={phoneNumber}/>
            </label>
            <label htmlFor="username">
                Username: <input type="text" id="username" value={username}/>
            </label>
            <label htmlFor="password">
                Password: <input type="text" id="password" value={password} />
            </label>
                <button>Update</button>
            </div>

        </div>
        </div>
    )
}

export default CardDetailsComponent