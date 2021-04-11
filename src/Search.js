import React, {useState} from "react";
import "./Search.css"
import axios from "axios";
import Result from "./Result.js";

export default function Search (){
    const [word, setWord] = useState("");


    function handleResponse(response){
      setWord(response.data[0].word);
   
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
          <form onSubmit={handleSubmit}>
              <input type="search" onChange={updateSearch} autoFocus={true} placeholder="Type a word"/>
              <input type="submit" value="Search" id="submit-button" style={{backgroundColor:"pink", borderRadius: "5px"}} />
          </form>
         <Result word={word}/>
      </div>
    )
}
