import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="container px-4 mx-auto flex justify-between">
      {/*👇 Logo */}
      <div>
        <p>Osora</p>
        <p>..powered nby fake-store</p>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
