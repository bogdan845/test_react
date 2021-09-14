import React from 'react';
import './App.scss';
import {BrowserRouter as Router} from "react-router-dom";
import {MainScreen} from "./screens/MainScreen";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <MainScreen/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;