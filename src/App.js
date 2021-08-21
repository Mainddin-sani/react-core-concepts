import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: "Mianuddin Sani",
    job: "Front-End Developer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello, {person.name +" "+ person.job} 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p></p>
      </header>
    </div>
  );
}

export default App;
