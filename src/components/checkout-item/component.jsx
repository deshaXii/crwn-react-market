import React from "react";
import { connect } from "react-redux";
import { addItem, deleteItem, removeItem } from "../../redux/cart/actions";

import "./style.scss";

const CheckoutItem = ({ cartItem, deleteItem, removeItem, addItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt={cartItem.name} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItem)}>
        &#10094;
      </div>
      <span className="value">{cartItem.quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>
        &#10095;
      </div>
    </span>
    <span className="price">{cartItem.price}</span>
    <div className="remove-button" onClick={() => deleteItem(cartItem)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
