import React from 'react'
import { connect, createDispatchHook} from "react-redux"
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.action'

const CollectionItem = ({ item, addItemProps}) => {
    const  {id, name, price, imageUrl} = item
    return(
    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addItemProps(item)}>Add to Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    addItemProps: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)