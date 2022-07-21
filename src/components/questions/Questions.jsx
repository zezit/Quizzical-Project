import React from "react";
import ContAll from "./ContAll"
import "./questions.css";

export default function Questions(props) {
    // Separa todas perguntas
    const allQuestions = [];
    props.data.map((element) => {
        const all = element.question;
        allQuestions.push(all);
    });
    console.log(allQuestions);

    // Separa todas respostas
    const allAnswers = [];
    props.data.map((element) => {
        const all = element.incorrect_answers.map((inco) => inco);
        all.push(element.correct_answer);
        allAnswers.push(all);
    });

    return (
        <div className="questions--screen">
            <ContAll pergunta={allQuestions[0]} respostas={allAnswers[0]} />
            <ContAll pergunta={allQuestions[1]} respostas={allAnswers[1]} />
            <ContAll pergunta={allQuestions[2]} respostas={allAnswers[2]} />
            <ContAll pergunta={allQuestions[3]} respostas={allAnswers[3]} />
            <ContAll pergunta={allQuestions[4]} respostas={allAnswers[4]} />
        </div>
    );
}
