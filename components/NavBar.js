import React from "react";
import Link from "next/link";
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import { useRouter } from "next/router";
const NavBar = () => {
    // create active nav bar
    const  router = useRouter()
    const isActive = (r) =>{
        if (r === router.pathname){
            return " active";
        }else{
            return " "
        }
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link  className="navbar-brand" href="/">
        Said Shop
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={"nav-link" + isActive('/cart')} href="/cart">
              Cart <FaShoppingCart/>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={"nav-link" + isActive('/signin')}href="/signin">
              Sign in <FaUser/>
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              User Name 
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" href="#">
                Porfile
              </Link>
              <Link className="dropdown-item" href="#">
                Another action
              </Link>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
