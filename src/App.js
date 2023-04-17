// import logo from './logo.svg';
import './App.css';
import TopNav from "./pages/dashboard/component/TopNav";
import Footer from "./pages/authentication/component/login/component/Footer";
import {FooterTwo, FooterThree} from "./pages/authentication/component/login/component/Footer";
import FooterState from "./pages/dashboard/component/FooterState";
import FunctionalComponentUsingUseCase from "./pages/dashboard/component/FunctionalComponentUsingUseCase";
import ButtonManipulation from "./pages/dashboard/component/ButtonManipulation";
import TicTacToe from "./pages/dashboard/component/TicTacToe";
import QuoteGenerator from "./pages/dashboard/component/QuoteGenerator";

function App() {
  return (
    <div className="App">
        {/*<TopNav />*/}
        <TicTacToe/>
        {/*<QuoteGenerator/>*/}

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
