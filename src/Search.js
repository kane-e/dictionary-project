import React, {useState} from "react";
import "./Search.css"
import axios from "axios";
import Result from "./Result.js";

export default function Search (){
    const [word, setWord] = useState("");
    const [result, setResult] = useState (null);


    function handleResponse(response){
      setResult(response.data[0]); 
      console.log(response.data[0]);
      console.log(response.data);
    }

    function handleSubmit(event){
      event.preventDefault();
      let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
      axios.get(apiURL).then(handleResponse);
    }

    function updateSearch(event){
      event.preventDefault();
      setWord(event.target.value);
    }
   

    return(
      <div className="Search">
        <div className="container">
          <div className= "input">
          <small>What does Jasper know?</small>
          <form onSubmit={handleSubmit}>
              <input type="search" onChange={updateSearch} autoFocus={true} placeholder="Type a word"/>
              <input type="submit" value="Search" id="submit-button" style={{backgroundColor:"pink", borderRadius: "5px"}} />
          </form>
          </div>
         <Result result={result}/>
      </div>
      </div>
    )
}
