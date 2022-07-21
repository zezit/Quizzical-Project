import React from "react";
import Selection from "./Selection";
import "./initial.css";

export default function Initial(props) {
    const difficultyElements = [
        {
            id: "easy",
            name: "Easy",
        },
        {
            id: "medium",
            name: "Medium",
        },
        {
            id: "hard",
            name: "Hard",
        },
    ];

    let category = 0;
    const setCategory = (actual) =>{
        category = actual
    }

    let difficulty = "";
    const setDifficulty = (actual) =>{
        difficulty = actual
    }

    const initGame = () => {
        props.setInit(category,difficulty)
    };

    return (
        <div className="initial--screen">
            <span className="initial--title">Quizzical</span>
            <span className="initial--description">
                Choose your options before start!
            </span>
            <div className="initial--all-options">
                <Selection type="Category" 
                options={props.categories} 
                actualSelected={setCategory}
                />
                <Selection type="Difficulty" 
                options={difficultyElements}
                actualSelected={setDifficulty}
                />
            </div>
            <div className="initial--button">
                <button onClick={initGame}>Start quiz</button>
            </div>
        </div>
    );
}
