import React, {useState} from "react";
import '../styles/MenstrualCycle.css'

function MenstrualCycle(){

    // let initialState = {
    //     StartDateOfMenstrualCycle: 0,
    //     OvulationPeriod: [],
    //     SafePeriods: [],
    //     NextMenstrualDate: " ",
    // }
    // const [data, setData] = useState(initialState)

    const [StartDateOfMenstrualCycle, setStartDateOfMenstrualCycle] = useState(new Date());
    const [OvulationPeriod, addOvulationPeriod] = useState(new Date());
    const [SafePeriods, setSafePeriods] = useState([]);
    const [NextMenstrualDate, setNextMenstrualDate] = useState(0);
    function convertStringToDate(event){
        if(event.target.id === "dateEntered"){
            const stringDate =  document.getElementById("date").value;
            setStartDateOfMenstrualCycle(new Date(stringDate))


            let ovulationPeak = 0;
            ovulationPeak = StartDateOfMenstrualCycle/2;
            var count = 2
            for (let i = 0; i < 4 ; i++) {
                addOvulationPeriod(StartDateOfMenstrualCycle.setDate(count))
                addOvulationPeriod(OvulationPeriod.push(StartDateOfMenstrualCycle.setDate(count)));
                count--;
                console.log("Yoo", OvulationPeriod)

            }

            console.log("New date", StartDateOfMenstrualCycle)
        }
    }


    return(
        <div className= "mainContainer">
            <div>
                <div className="topNav">
                    <li>About</li>
                    <li>Learn</li>
                    <li>Drip me</li>
                    <li>Yoooo</li>
                </div>

                <h1>
                    McLady
                </h1>
                <p>
                    Hi Pretty, <br/>
                    Track Your Period & Be Smart
                </p>
            </div>
            <div>
                Did You Know?
                As horrible and Painful that Period is, It is a beautiful thing, <br/>
                because when missed on purpose, you are good to be a mother, <br/>
                else Kasala don burst
            </div>

        </div>
    )
}
export default MenstrualCycle