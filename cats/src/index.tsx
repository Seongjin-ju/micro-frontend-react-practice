import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as serviceWorker from "./serviceWorker";
declare global {
    interface Window {
        renderCats: (containerId: string) => void;
        unmountCats: (containterId: string) => void;
    }
}

window.renderCats = (containerId) => {
    ReactDOM.render(<App />, document.getElementById(containerId));
    serviceWorker.unregister();
};

window.unmountCats = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as HTMLElement);
};

if (!document.getElementById("Cats-container")) {
    ReactDOM.render(<App />, document.getElementById("root"));
    serviceWorker.unregister();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
