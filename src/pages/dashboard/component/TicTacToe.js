import React, {useState} from "react";
import '../styles/TicTacToe.css'
import Video from '../styles/videoplayback.mp4'

function TicTacToe() {


    function positionPlayerOne(input){
        let box = document.getElementById(input)
        box.innerHTML = "tic"}

    function positionPlayerTwo(input){
        let box = document.getElementById(input)
        box.innerHTML = "tac"}

    function checkBoxForPlayerPosition(input){
        const check = document.getElementById(input)
        if (check.innerHTML == "tic" || check.innerHTML == "tac" ){
        alert("Input taken")
        return true}return false;}


    function resetGame(){
        let resetBoard = document.querySelector(".border")
        resetBoard.innerText = " "

    }


    function checkWinning(){
            if(document.getElementById("1").innerHTML == "tic" && document.getElementById("2").innerHTML == "tic"
                && document.getElementById("3").innerHTML == "tic"){
                alert("Congratulations, player One took the TOE")}

            else if(document.getElementById("1").innerHTML == "tac" && document.getElementById("2").innerHTML == "tac"
            && document.getElementById("3").innerHTML == "tac"){
                alert("Congratulations, player Two took the TOE")}

            else if(document.getElementById("4").innerHTML == "tic" && document.getElementById("5").innerHTML == "tic"
            && document.getElementById("6").innerHTML == "tic"){
                alert("Congratulations, player One took the TOE")}

            else if(document.getElementById("4").innerHTML == "tac" && document.getElementById("5").innerHTML == "tac"
            && document.getElementById("6").innerHTML == "tac"){
                alert("Congratulations, player Two took the TOE")}

            else if(document.getElementById("7").innerHTML == "tic" && document.getElementById("8").innerHTML == "tic"
            && document.getElementById("9").innerHTML == "tic"){
                alert("Congratulations, player One took the TOE")}

            else if(document.getElementById("7").innerHTML == "tac" && document.getElementById("8").innerHTML == "tac"
                && document.getElementById("9").innerHTML == "tac"){
                alert("Congratulations, player Two took the TOE")}

            else if(document.getElementById("1").innerHTML == "tic" && document.getElementById("4").innerHTML == "tic"
            && document.getElementById("7").innerHTML == "tic"){
                alert("Congratulations, player One took the TOE")}

            else if(document.getElementById("1").innerHTML == "tac" && document.getElementById("4").innerHTML == "tac"
            && document.getElementById("7").innerHTML == "tac"){
                alert("Congratulations, player Two took the TOE")}

            else if(document.getElementById("2").innerHTML == "tic" && document.getElementById("5").innerHTML == "tic"
            && document.getElementById("8").innerHTML == "tic"){
                alert("Congratulations, player One took the TOE")}

            else if(document.getElementById("2").innerHTML == "tac" && document.getElementById("5").innerHTML == "tac"
            && document.getElementById("8").innerHTML == "tac"){
                alert("Congratulations, player Two took the TOE")}

            else if(document.getElementById("3").innerHTML == "tic" && document.getElementById("6").innerHTML == "tic"
            && document.getElementById("9").innerHTML == "tic"){
                alert("Congratulations, player One took the TOE")}

            else if(document.getElementById("3").innerHTML == "tac" && document.getElementById("6").innerHTML == "tac"
            && document.getElementById("9").innerHTML == "tac"){
                alert("Congratulations, player Two took the TOE")}

        else if(document.getElementById("1").innerHTML == "tic" && document.getElementById("5").innerHTML == "tic"
            && document.getElementById("9").innerHTML == "tic"){
                alert("Congratulations, player One took the TOE")}

        else if(document.getElementById("1").innerHTML == "tac" && document.getElementById("5").innerHTML == "tac"
            && document.getElementById("9").innerHTML == "tac"){
                alert("Congratulations, player Two took the TOE")}

        else if(document.getElementById("3").innerHTML == "tic" && document.getElementById("5").innerHTML == "tic"
            && document.getElementById("7").innerHTML == "tic"){
                alert("Congratulations, player One took the TOE")}

        else if(document.getElementById("3").innerHTML == "tac" && document.getElementById("5").innerHTML == "tac"
            && document.getElementById("7").innerHTML == "tac"){
                alert("Congratulations, player Two took the TOE")}

    }


    var count = 0
    function playerOnePlays(event){

        if(event.target.id === 'playerOne'){
            if(count == 0){
                count++;
            let num = document.getElementById('number').value
            if(!checkBoxForPlayerPosition(num)){positionPlayerOne(num)}}
            else if(count == 1){

                let num = document.getElementById('number').value
                if(!checkBoxForPlayerPosition(num)){
                    positionPlayerTwo(num)} count = 0}
        checkWinning()}


    }


    return(
        <div className="Main">

        <div className= "board">
            <div className= "border" id= "1">X</div>
            <div className= "border" id= "2">O</div>
            <div className= "border" id= "3">O</div>
            <div className= "border" id= "4">X</div>
            <div className= "border" id= "5">O</div>
            <div className= "border" id= "6">X</div>
            <div className= "border" id= "7">O</div>
            <div className= "border" id= "8">X</div>
            <div className= "border" id= "9">X</div>
        </div>


            <div className="video">
                <video src={Video} autoPlay="true" controls="controls" ></video>

                <div className="buttonBorder">
                    <label className= "button">
                        Player ONE:   <input id = "number"></input>
                        <button id= "playerOne" onClick={playerOnePlays}>Play</button>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default TicTacToe;

