import React from "react";
import "./Meaning.css";

export default function Meaning(props){
    return(
    <div className ="Meaning">
    <div className="container">
      
    <h2 style={{ textTransform: 'capitalize'}}>{props.meaning.partOfSpeech}</h2>

       {props.meaning.definitions.map(function(definition, index){
                    return(
                        <div key = {index}>
                          <div>
                           {definition.definition}
                           </div>
                           <p>
                             {definition.example}
                           </p>
                        </div>
                    );
                })}
               
         </div> 
         </div>
    )       
        }
   
