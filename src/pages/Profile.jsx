import { useAtom } from "jotai";
import { userAtom } from "../utils/globalState";

const Profile = () => {
  const [user, setUser] = useAtom(userAtom);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <p>{}</p>
      <input
        type="text"
        label="name"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        label="passion"
        name="passion"
        placeholder="passion"
        onChange={handleChange}
      />
    </>
  );
};

export default Profile;
