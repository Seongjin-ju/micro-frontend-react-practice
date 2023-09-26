import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const { 
    REACT_APP_DOGS_HOST: dogsHost, 
    REACT_APP_CATS_HOST: catsHost 
} = process.env;

function Header() {
    return (
        <div className="banner">
            <h1 className="banner-title">&#128571; Cats and Dogs &#128021;</h1>
            <h4>Random pics of cats and dogs</h4>
        </div>
    );
}

const Dogs = ({ history }: any) => {
    return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
};

const Cats = ({ history }: any) => {
    return <MicroFrontend history={history} host={catsHost} name="Cats" />;
};

const Home = ({ history }: any) => {
    return (
        <div>
            <Header />
            <div className="home">
                <div className="content">
                    <div className="cat">
                        <Cats history={history} />
                    </div>
                    <div className="dog">
                        <Dogs history={history} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const App = ({ history = defaultHistory }) => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact path="/" render={() => <Home history={history} />} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
};

export default App;
