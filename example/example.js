import React from "react";
import ReactDOM from "react-dom";
import { Provider, Embed } from "../src";


function App() {

    return <Provider>

        <h3>This is a Squatch.js component</h3>

        <Embed />
    </Provider>
}

export default function () {
    ReactDOM.render(<App />, document.getElementById("root"))
}