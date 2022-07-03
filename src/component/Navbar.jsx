import { Link } from "react-router-dom";
import { Onglet } from "../style/style";
import { Onglets } from "../style/style";

const NavBar = () => {
  return (
    <Onglet>
      <Onglets>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <span style={{ display: "block" }}> Home</span>
        </Link>
      </Onglets>
      <Onglets>
        <Link style={{ textDecoration: "none", color: "black" }} to="/Skills">
          <span style={{ display: "block" }}> Formation et compétences</span>
        </Link>
      </Onglets>

      <Onglets>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/Portfolio"
        >
          <span style={{ display: "block" }}> Portefolio</span>
        </Link>
      </Onglets>
      <Onglets>
        {" "}
        <Link style={{ textDecoration: "none", color: "black" }} to="/Contact">
          <span style={{ display: "block" }}> Contact</span>
        </Link>
      </Onglets>
    </Onglet>
  );
};

export default NavBar;
