import Navbar from "./components/Navbar";
import SearchMovie from "./pages/SearchMovie";
import Trending from "./pages/Trending";
import MovieEditor from "./pages/MovieEditor";
import ClassComponent from "./pages/ClassComponent";
import Profile from "./pages/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as JotaiProvider }  from "jotai";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Router>
        <Provider store={store}>
        <JotaiProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/search_movie" element={<SearchMovie />} />
            <Route path="/movie_editor" element={<MovieEditor />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/class_component"
              element={<ClassComponent />}
            />
          </Routes>
          </JotaiProvider>
        </Provider>
      </Router>
    </div>
  );
};

export default App;
