import MoviesList from "./components/MoviesList";
import SearchMovie from "./pages/SearchMovie";
import Trending from "./pages/Trending";

const App = () => {
  return (
    <div className="App">
      <SearchMovie />
      <Trending />
    </div>
  );
};

export default App;
