import React, {useState} from "react";
import "./Search.css"

export default function Search (){
    const [word, setWord] = useState("");

    function handleSubmit(event){
      event.preventDefault();
      return word;
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
          <h1>{word}</h1>
      </div>
    )
}
