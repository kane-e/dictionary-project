import ME from "./ME.jpg";
import './App.css';
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <header className="container">
         <h3>Ask Jasper</h3>
       <img src={ME} className="App-logo img-fluid rounded" alt="logo" />
       
        <Search />
      </header>
    </div>
  );
}

