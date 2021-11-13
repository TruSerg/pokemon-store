import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";
import { startCase } from "lodash";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Header;
