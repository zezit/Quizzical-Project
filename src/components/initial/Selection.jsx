import React from "react";
import "./selection.css"

const Selection = (props) => {
    return (
        <div className="Selection">
            <label for="options">{`${props.type}:`}</label>

            <select name="options" className="options">
                <option className="option" value="volvo">{`Any ${props.type}`}</option>
                <option className="option" value="saab">Saab</option>
                <option className="option" value="mercedes">Mercedes</option>
                <option className="option" value="audi">Audi</option>
            </select>
        </div>
    );
};

export default Selection;
