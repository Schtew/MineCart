import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
// import Route from 'react-router-dom';

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
            <h1 className="Words">Quests</h1>
            <div className="ProgressBar" >
              <h1 className="Words">Kill 5 mobs</h1>
              <ProgressBar completed={40} bgColor="green" />
            </div>
            {/*<button> Add Quest </button>*/}
            <Link to="/shopping" className="Words">GOTOOTHERSCREEN</Link>
        </div>
      );

}

export default QuestsScreen;
