import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList'

const App = () => {
  const moviesArray = ["Fast and furious", "Barbie", "Nemo"]
  
  return (
    <div className="App">
      <MoviesList movies={moviesArray} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
