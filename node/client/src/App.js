import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import logo from './logo.svg';

import './App.css';
import './styles/MainPage.css';

import Header from './components/Header';
import QuestsScreen from './screens/QuestsScreen';
import ShoppingScreen from './screens/ShoppingScreen';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // function clickAddQuest = () =>

  return (
    <div className="App">
        {/*<Header/>
        <h1>Quests</h1>
        <div className="ProgressBar" >
          <h1>Kill 5 mobs</h1>
          <ProgressBar completed={40} bgColor="green" />
        </div>
        <button> Add Quest </button>*/}
        {/*<QuestsScreen/>*/}
        <ShoppingScreen/>
        {/*<p>{!data ? "Loading..." : data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
    </div>
  );
}

export default App;
