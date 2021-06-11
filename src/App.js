import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Top from "./components/Top";
import Best from "./components/Best";
import News from "./components/News";
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
                    <Route path="/news"
                        component={News}
                        exact></Route>
                    <Route path="/best"
                        component={Best}
                        exact></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
