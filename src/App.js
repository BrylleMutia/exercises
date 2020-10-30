import React from "react";
import { app } from "./App.module.css";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExerciseTwo from "./components/exerciseTwo/ExerciseTwo";
import ExerciseThree from "./components/exerciseThree/ExerciseThree";

const App = () => {
    return (
        <div className={app}>
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/two" component={ExerciseTwo} />
                    <Route exact path="/three" component={ExerciseThree} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
