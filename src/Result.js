import React from "react";
import "./Result.css";

export default function Result(props){

    return(
        <div className="Result">
            <h1>
                {props.word}
            </h1>
        </div>
    )
}
