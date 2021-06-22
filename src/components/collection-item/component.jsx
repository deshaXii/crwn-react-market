import React from 'react'
import {Button} from '../button/component'

import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/actions'

import './style.scss'

const CollectionItem = ({item, addItem}) => {
    const { name, imageUrl, price} = item
    return (
    <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button onClick={() => addItem(item) } inverted>Add To Cart</Button>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)