import './App.css';
import Navbar from "./components/Navbar";
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./components/Top";
import Latest from "./components/Latest";
import Jobs from "./components/Jobs";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/"
                        component={Top}
                        exact></Route>
                    <Route path="/top"
                        component={Top}
                        exact></Route>
                    <Route path="/jobs"
                        component={Jobs}
                        exact></Route>
                    <Route path="/latest"
                        component={Latest}
                        exact></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
