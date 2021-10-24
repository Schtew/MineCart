import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
// import Route from 'react-router-dom';

import '../styles/MainPage.css';

import Header from '../components/Header';

class QuestsScreen extends React.Component {


    constructor(props) {
        super(props);
        // this.state = {progress: 0};
        // this.handler = this.handler.bind(this);
        this.state = {userID: '', progress: 0};
    }



    render() {
        // const [data, setData] = React.useState(null);
        const progress = this.props.progress;

        const handler = (progress) => {
            console.log("caling handler",progress);
            this.setState({
                progress: progress
            })
        }


        // handleChange(e) {
        //     this.props.onProgressChange(e.target.value);
        //   };

        // React.useEffect(() => {
        //     fetch("/")
        //       .then((res) => res.json())
        //       .then((data) => setData(data.message));
        // }, []);

        return (
            <div>
                <Header handler ={handler}/>
                <h1 className="Words">Quests</h1>
                <div className="ProgressBar" >
                  <h1 className="Words">Kill 10 Zombies</h1>
                  <ProgressBar completed={this.state.progress >= 10 ? 100 : (this.state.progress / 10) * 100} bgColor="green" />
                </div>
                {/*<button> Add Quest </button>*/}
            </div>
          );
    }

}

export default QuestsScreen;
