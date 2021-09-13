import React from 'react';
import './App.scss';
import './assets/scss/index.scss';
import {BrowserRouter as Router} from "react-router-dom";
import {MainScreen} from "./screens/MainScreen";


function App() {
    return (
        <Router>
            <div className="App">
                <MainScreen/>
            </div>
        </Router>
    );
}

export default App;