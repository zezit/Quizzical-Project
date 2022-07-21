import React from "react";
import Selection from "./Selection";
import "./initial.css";

export default function Initial(props) {
    const difficultyElements = [
        {
            id: 0,
            name: "Easy",
        },
        {
            id: 1,
            name: "Medium",
        },
        {
            id: 0,
            name: "Hard",
        },
    ];

    return (
        <div className="initial--screen">
            <span className="initial--title">Quizzical</span>
            <span className="initial--description">
                Choose your options before start!
            </span>
            <div className="initial--all-options">
                <Selection type="Category" options={props.categories} />
                <Selection type="Difficulty" options={difficultyElements} />
            </div>
            <div className="initial--button">
                <button onClick={props.setInit}>Start quiz</button>
            </div>
        </div>
    );
}
