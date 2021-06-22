import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./images/logo.svg";
import { auth } from "../../firebase/utlis";
import { connect } from "react-redux";

import "./style.scss";
import CartIcon from "../cart-icon/component";
import CartDropdown from "../cart-dropdown/component";
import { selectCurrentUser } from "../../redux/user/selectors";
import { selectCartHidden } from "../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <header className="header">
    <div className="logo-container">
      <Logo />
    </div>
    <ul className="links-list">
      <li className="link-item">
        <Link to="/">Home</Link>
      </li>
      <li className="link-item">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="link-item">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="link-item">
        {currentUser ? (
          <button
            type="click"
            onClick={() =>
              auth.signOut().then((res) => {
                console.log(res);
              })
            }
          >
            Sign Out
          </button>
        ) : (
          <Link to="/signin">Sign in</Link>
        )}
      </li>
      <li className="link-item">
        <CartIcon />
      </li>
    </ul>
    {!hidden ? <CartDropdown /> : ""}
  </header>
);

// if you have multiline you should use
// createStructuredSelector

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
