import React from "react";
import { deleteItem } from "../../redux/cart/actions";
import {connect} from 'react-redux'
import './style.scss'

const CartItem = ({item, deleteItem }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt={item.name} />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        {item.quantity} x $ {item.price}
      </span>
    </div>
    <span onClick={() => deleteItem(item)}>&#10005;</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);
