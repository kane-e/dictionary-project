import ME from "./ME.jpg";
import './App.css';
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <header className="container">
       <img src={ME} className="App-logo img-fluid rounded" alt="logo" />
        Dictionary App
        <Search />
      </header>
    </div>
  );
}

