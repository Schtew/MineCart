import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import '../styles/MainPage.css';

import Header from '../components/Header';

function QuestsScreen() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/test")
          .then((res) => res.json())
          .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <Header/>
            <h1>Quests</h1>
            <div className="ProgressBar" >
              <h1>Kill 5 mobs</h1>
              <ProgressBar completed={40} bgColor="green" />
            </div>
            <button> Add Quest </button>
        </div>
      );

}

export default QuestsScreen;
