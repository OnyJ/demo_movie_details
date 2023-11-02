import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { userAtom } from "../utils/globalState";

const Navbar = () => {
  const [user] = useAtom(userAtom);

  return (
    <nav>
      <Link to={"/"}>Trending</Link>
      {" | "}
      <Link to={"/search_movie"}>Recherche</Link>
      {" | "}
      <Link to={"/movie_editor"}>Éditeur de films</Link>
      {" | "}
      <span>
        {user.name} : {user.passion}
      </span>
    </nav>
  );
};

export default Navbar;
