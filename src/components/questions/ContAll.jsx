import React from "react";

export default function ContAll(props) {
    const [isActive, setActive] = React.useState(false);

    const respostas = props.respostas.map((element, index) => (
        <span
            onClick={() => setActive((prev) => !prev)}
            className={
                isActive ? "Questions--reposta-selected" : "Questions--reposta"
            }
            key={index}
            name="reposta"
        >
            {element}
        </span>
    ));

    return (
        <div className="Questions--container">
            <span className="Questions--pergunta">{props.pergunta}</span>
            <div className="Questions--opções">{respostas}</div>
        </div>
    );
}
