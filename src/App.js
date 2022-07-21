import React from "react";
import { Background, Initial, Questions } from "./components";
import "./style/App.css";

export default function App() {
    // Indica se está no estado inicial ou não
    const [init, setInit] = React.useState(true);
    const [options, setOptions] = React.useState([]);

    // Get categories
    React.useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
            .then((res) => res.json())
            .then((data) => setOptions(data.trivia_categories));
    }, []);

    const initGame = () => {
        fetch("https://opentdb.com/api_category.php")
            .then((res) => res.json())
            .then((data) => setOptions(data.trivia_categories));
        setInit(() => false);
    };

    return (
        <div className="App">
            <Background />
            {init ? (
                <Initial categories={options} setInit={initGame} />
            ) : (
                <Questions />
            )}
        </div>
    );
}
