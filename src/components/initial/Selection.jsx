import React from "react";
import "./selection.css";

const Selection = (props) => {
    // Elementos de categorias
    const categoryElements = props.options.map((element) => (
        <option className="option" value={element.id}>
            {element.name}
        </option>
    ));

    return (
        <div className="Selection">
            <label for="options">{`${props.type}:`}</label>

            <select name="options" className="options">
                <option
                    className="option"
                    value="volvo"
                >{`Any ${props.type}`}</option>
                {categoryElements}
            </select>
        </div>
    );
};

export default Selection;
