import React, {useState} from "react";

function ButtonManipulation() {

    const [number, setNumber] = useState(0);

    function handleChange(event){
        if(event.target.name === 'plusValue'){
            setNumber(document.getElementById("eMail").valueAsNumber + number)
        }
        else if(event.target.name === 'minusValue'){
            setNumber(number - document.getElementById("Age").valueAsNumber)
        }

    }

    function decrement(){
        setNumber(number-1)
    }
    function increment(){
        setNumber(number+1)
    }

    return(
        <React.Fragment>
            <div>Number: {number}</div>
            <button onClick={increment}>Press Me</button>
            <br/><br/>
            <button onClick={decrement}>Press Me</button>
            <br/><br/>

            <label htmlFor="eMail">
                Increment By value: <input type="number" id="eMail"/>
            </label>
            <button name="plusValue" onClick={handleChange}>Press Me</button>
            <br/><br/>

            <label htmlFor="Age">
                Decrement By vale: <input type="number" id="Age"/>
            </label>
            <button name="minusValue" onClick={handleChange}>Press Me</button>
            <br/><br/>
        </React.Fragment>
    )
}

export default ButtonManipulation