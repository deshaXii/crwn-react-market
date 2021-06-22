import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./images/logo.svg";
import { auth } from "../../firebase/utlis";
import { connect } from "react-redux";

import {HeaderContainer, OptionsContainer, LogoContainer, LinkContainer} from './component.styles'

import CartIcon from "../cart-icon/component";
import CartDropdown from "../cart-dropdown/component";
import { selectCurrentUser } from "../../redux/user/selectors";
import { selectCartHidden } from "../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <LinkContainer>
        <Link to="/">Home</Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/shop">Shop</Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/contact">Contact</Link>
      </LinkContainer>
      <LinkContainer>
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
      </LinkContainer>
      <LinkContainer>
        <CartIcon />
      </LinkContainer>
    </OptionsContainer>
    {!hidden ? <CartDropdown /> : ""}
  </HeaderContainer>
);

// if you have multiline you should use
// createStructuredSelector

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
