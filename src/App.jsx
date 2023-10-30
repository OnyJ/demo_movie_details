import MoviesList from './components/MoviesList'

const App = () => {
  const moviesArray = ["Fast and furious", "Barbie", "Nemo"]

  return (
    <div className="App">
      <MoviesList movies={moviesArray} />
    </div>
  );
}

export default App;
