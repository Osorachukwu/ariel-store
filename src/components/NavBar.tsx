import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, UserRound } from "lucide-react";
import Singin from "./Singin";
import SingUp from "./SingUp";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
    // if(toggle === false) {
    //     setToggle(true)
    // } else if (toggle === true) {
    //     setToggle(false)
    // }
  }
  return (
    <div>
      <div className="ourBreakPoint:hidden">
        <div onClick={handleToggle}>
          {toggle ? <Menu /> : <X color="red" />}
        </div>

        {toggle ? null : (
          <div>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>
        )}
      </div>
      {/* the stuff that appears when the screen is at the breakpoint */}
      <div className="hidden ourBreakPoint:block">
        <div className="flex">
          <div className="border-red-400 border flex">
            <form action="">
              <input type="text" placeholder="Search..." className="outline-none h-full pl-1" />
            </form>
            <div className="bg-red-400 p-2">
              <Search />
            </div>
          </div>

          {/* second half */}
          <div className="flex">
            <ShoppingCart />
            <UserRound />
          </div>

          {/* Welcome sign In nd Up */}
          <div>
            <p>Welcome</p>
            <div>
              <Link to="sign-up">Sign -Up</Link>
              |
              <Link to="sign-in">Sign In</Link>
            </div>
          </div>

          {/* The other nav */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
