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

    // pega as opções selecionadas, faz o request e inicia o jogo
    const initGame = (category, difficulty) => {
        let request = "https://opentdb.com/api.php?amount=5";
        if (category != 0) {
            request = `${request}&category=${category}`;
        }
        if (difficulty != 0) {
            request = `${request}&difficulty=${difficulty}`;
        }

        request.concat("&type=multiple");

        fetch(request)
            .then((res) => res.json())
            .then((data) => setOptions(data.trivia_categories));
        setInit(() => false);

        console.log(request);
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
