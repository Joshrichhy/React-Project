// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TopNav from "./pages/dashboard/component/TopNav";
import Footer from "./pages/authentication/component/login/component/Footer";
import {FooterTwo, FooterThree} from "./pages/authentication/component/login/component/Footer";
import FooterState from "./pages/dashboard/component/FooterState";
import FunctionalComponentUsingUseCase from "./pages/dashboard/component/FunctionalComponentUsingUseCase";
import ButtonManipulation from "./pages/dashboard/component/ButtonManipulation";
import TicTacToe from "./pages/dashboard/component/TicTacToe";
import QuoteGenerator from "./pages/dashboard/component/QuoteGenerator";

import MenstrualCycle from "./pages/dashboard/component/MenstrualCycle";
import TodoList from "./pages/dashboard/component/TodoList";
import Store from "./store/Store";
import CounterComponent from "./pages/dashboard/component/CounterComponent";
import CardDetails from "./store/CardDetails";
import CardDetailsComponent from "./pages/dashboard/component/CardDetailsComponent";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<TopNav />}/>
                <Route path='/TicTacToe' element={<TicTacToe/>}/>
                <Route path='/quoteGenerator' element={<QuoteGenerator/>}/>
                <Route path='/counter' element={<CounterComponent/>}/>
                <Route path='/cardDetails' element={<CardDetailsComponent/>}/>
            </Routes>
        </Router>
        {/*<MenstrualCycle/><TodoList/>*/}





        {/*<Footer/>*/}
        {/*<FooterTwo/>*/}
        {/*<FooterThree/>*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
