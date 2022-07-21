import React from "react";
import "./selection.css";

const Selection = (props) => {
    // Elementos de categorias
    const categoryElements = props.options.map((element) => (
        <option key={element.id} className="option" value={element.id}>
            {element.name}
        </option>
    ));

    const handleSelection = (event)=>{
        props.actualSelected(event.target.value)
    }

    return (
        <div className="Selection">
            <label for="options">{`${props.type}:`}</label>

            <select name="options" className="options" onChange={handleSelection}>
                <option
                    className="option"
                    value={0}
                >{`Any ${props.type}`}</option>
                {categoryElements}
            </select>
        </div>
    );
};

export default Selection;
