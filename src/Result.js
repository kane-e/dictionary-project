import React from "react";
import "./Result.css";
import Meaning from "./Meaning";


export default function Result(props){
  console.log(props.result)
if(props.result){
    return(
        <div className="Result">
          <div className="container">
            <div className="word-wrapper w-25">
            <h1 className="word" style={{ textTransform: 'uppercase'}}>
                {props.result.word}
            </h1>
            
            <div>{props.result.phonetics[0].text}</div>
            <a href={props.result.phonetics[0].audio} target="_blank">audio</a>
            </div>
                {props.result.meanings.map(function(meaning, index){
                    return(
                        <div key = {index}>
                            <Meaning meaning = {meaning}/>
                        </div>
                    );
                })} 
        
        </div>
        </div>
    )
} else {
  return null;
}
}
