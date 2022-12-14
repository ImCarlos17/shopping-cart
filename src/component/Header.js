import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = ({ setVisible }) => {
  return (
    <div className="header sticky top-0">
      <Link to="/">
        <h1 className="text-4xl font-semibold text-green-600">
          Dog Clothes Store
        </h1>
      </Link>
      <NavBar setVisible={setVisible} />
    </div>
  );
};

export default Header;
