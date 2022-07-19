import React from "react";

import { Background, Initial, Questions } from "./components";

import "./style/App.css";

export default function App() {
    // Indica se está no estado inicial ou não
    const [init, setInit] = React.useState(true);

    return (
        <div className="App">
            <Background />
            {init ? <Initial /> : <Questions />}
        </div>
    );
}
