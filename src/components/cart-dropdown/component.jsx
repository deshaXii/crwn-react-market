import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/selectors";
import { withRouter } from "react-router-dom";
import { Button } from "../button/component";
import CartItem from "../cart-item/component";

import { removeAllItems } from "../../redux/cart/actions";

import "./style.scss";
import { toggleCartHidden } from "../../redux/cart/actions";

const CartDropdown = ({
  cartItems,
  match,
  history,
  toggleCartHidden,
  removeCartItems,
}) => (
  <div className="cart-dropdown">
    <Button onClick={() => removeCartItems(cartItems)}>clear All Items</Button>
    <br />
    <div className="cart-items">
      {cartItems.length
        ? cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        : "no Items in your cart."}
    </div>
    {cartItems.length && history.location.pathname !== '/checkout' ? (
      <Button
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        Go To Checkout
      </Button>
    ) : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeCartItems: (items) => dispatch(removeAllItems(items)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
