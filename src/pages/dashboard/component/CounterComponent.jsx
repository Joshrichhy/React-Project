import React, {useReducer, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {decrementByOne, decrementByValue, incrementByOne, incrementByValue} from "../../../store/Counter";


function CounterComponent(){
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch()


    return(
        <div>
        <p>
            Count: {count}
        </p>
            <button onClick={() => dispatch(incrementByOne())}>Increment By One</button>
            <button onClick={() => dispatch(decrementByOne())}>Decrement By One</button>
            <input id="number" type="number"/>
            <button onClick={() => dispatch(decrementByValue(document.getElementById("number").valueAsNumber))}>Decrement By Value</button>
            <button onClick={() => dispatch(incrementByValue(document.getElementById("number").valueAsNumber))}>Increment By Value</button>
        </div>
    )

}

export default CounterComponent