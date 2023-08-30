import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <div id="navbar">
        <Link to={"/"}>home</Link>
        <Link to={"/newPlayerForm"}>New Player Form</Link>
        <Link to={"/playerSearch"}>Player Search</Link>
      </div>
    );
  }