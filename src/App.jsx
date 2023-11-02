import Navbar from "./components/Navbar";
import SearchMovie from "./pages/SearchMovie";
import Trending from "./pages/Trending";
import ClassComponent from "./pages/ClassComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/search_movie" element={<SearchMovie />} />
          <Route path="/class_component" element={<ClassComponent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
