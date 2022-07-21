import React from "react";
import { Background, Initial, Questions } from "./components";
import "./style/App.css";

export default function App() {
    // Indica se está no estado inicial ou não
    const [init, setInit] = React.useState(true);
    const [options, setOptions] = React.useState([]);
    const [questions, setQuestions] = React.useState([]);

    let request = " ";
    let allComps = [];

    // Get categories
    React.useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
            .then((res) => res.json())
            .then((data) => setOptions(data.trivia_categories));
    }, []);

    // Get questions
    const getQuestions = () => {
        async function getData() {
            const response = await fetch(request);
            const json = await response.json();
            setQuestions(json.results);
            setInit(() => false);
        }
        getData();
    };

    // pega as opções selecionadas, faz o request e inicia o jogo
    const initGame = (category, difficulty) => {
        request = "https://opentdb.com/api.php?amount=5&type=multiple";

        if (category != 0) {
            request = `${request}&category=${category}`;
        }
        if (difficulty != 0) {
            request = `${request}&difficulty=${difficulty}`;
        }

        getQuestions();
    };

    return (
        <div className="App">
            <Background />
            {init ? (
                <Initial categories={options} setInit={initGame} />
            ) : (
                <Questions data={questions} />
            )}
        </div>
    );
}
