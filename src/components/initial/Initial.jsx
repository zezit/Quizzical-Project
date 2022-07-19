import React from "react";
import Selection from "./Selection"
import "./initial.css";

export default function Initial() {
    return (
        <div className="initial--screen">
            <span className="initial--title">Quizzical</span>
            <span className="initial--description">
                Choose your options before start!
            </span>
            <div className="initial--all-options">
                <Selection
                type="Category"/>
                <Selection
                type="Difficulty"/>
                <Selection
                type="Type"/>
            </div>
            <div className="initial--button">
                <button>Start quiz</button>
            </div>
        </div>
    );
}
