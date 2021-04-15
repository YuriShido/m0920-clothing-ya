import React from 'react'
// import CustomButton from '../custom-button/custom-button.component'
import './cart-item.styles.scss'


const CartItem = ({item: {imageUrl,price, name, quantity}}) => (
    <div className="cart-item">
        <img src= "" alt=""/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} X ${price}</span>

        </div>
    </div>
)

export default CartItem