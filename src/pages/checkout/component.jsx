import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/component";
import StribePayButton from "../../components/stripe-pay-button/component";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/selectors";
import "./style.scss";

const CheckoutPage = ({ cartItems, cartTotalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}

    <div className="total">
      <span>
        Total:
        {cartTotalPrice}
      </span>
    </div>

      <div className="test-warning">
        *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/2022 - CVV: 123
      </div>
    <StribePayButton price={cartTotalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
