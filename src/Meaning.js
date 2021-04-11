import React from "react";


export default function Meaning(props){
    return(
    <div className ="Meaning">
    <h2>{props.meaning.partOfSpeech}</h2>

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
    )       
        }
   
