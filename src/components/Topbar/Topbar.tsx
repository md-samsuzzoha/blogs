import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import SearchBar from "./components/SearchBar/SearchBar";
import "./Topbar.scss";

const Topbar = (): JSX.Element => {
  return (
    <header className="topbar-header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar />
    </header>
  );
};

export default Topbar;
