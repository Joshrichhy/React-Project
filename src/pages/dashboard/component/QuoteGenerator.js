import React from "react";
import '../styles/QuoteGenerator.css'

function QuoteGenerator(){



    function randomQuote() {
        var number = Math.floor(Math.random() * 10) + 1

        let dailyQuotes = [{
            1: "Be yourself; everyone else is already taken " +
                "__Oscar Wilde"
        },

            {
                2: "I'm selfish, impatient and a little insecure. I make mistakes, " +
                    "I am out of control and at times hard to handle. But if you can't handle me at my worst, " +
                    "" +
                    "then you sure as hell don't deserve me at my best __" +
                    "Marilyn Monroe"
            },
            {
                3: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe___Albert Einstein"
            },
            {
                4:"To live is the rarest thing in the world. Most people exist, that is all___Oscar Wilde" },
            {
                5: "Friendship ... is born at the moment when one man says to another What! You too? " +
                    "I thought that no one but myself . . .___" +
                    " C.S. Lewis, The Four Loves" },
            {
                6: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not " +
                    "lead Walk beside me… just be my friend ___Albert Camus" },
            {
                7: "If you want to know what a man's like, take a good look at how he treats his inferiors, " +
                    "not his equals____J.K. Rowling, Harry Potter and the Goblet of Fire" },
            {
                8: "In three words I can sum up everything I've learned about life: it goes on.___ Robert Frost"  },
            {
                9: "You only live once, but if you do it right, once is enough___Mae West"},
            {
                10: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind___" +
                    "Bernard M. Baruch" },
            {
                11: "Puff Puff Hits the Soul.---Damian"
            },

        ]


        var quote = document.getElementById("quote")
        for (let i = 0; i < dailyQuotes.length; i++) {
            if(number === i+1){
            const quoteObj = dailyQuotes[i];
            const key = Object.keys(quoteObj)[0];
            const value = quoteObj[key];
            quote.innerText = value
            }
        }

    }



    function handle(event){
        if(event.target.id === "welcome"){

            var delayInMilliseconds = 500; //1 second

            setTimeout(function() {
                randomQuote()
            }, delayInMilliseconds);

        }
    }



    return(
        <div className="welcome" id="welcome" onMouseOver={handle}>JOSH'S DAILY QUOTE
        <p id="quote">Yello</p></div>
    )
}
export default QuoteGenerator