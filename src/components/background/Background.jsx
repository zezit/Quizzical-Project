import React from "react";
import "./background.css";
import yellow from "../../images/blob 5.png";
import violet from "../../images/blobs.png";

export default function Background() {
    return (
        <div className="background">
            <img className="back--yellow" src={yellow} alt="back blob y" />
            <img className="back--violet" src={violet} alt="back blob v" />
        </div>
    );
}
