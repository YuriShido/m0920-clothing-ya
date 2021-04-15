import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Logo from '../../assets/ClothingYa.png'
import {auth} from '../../firebase/firebase.util'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from "../cart-icon/cart-icon.component"

import './header.styles.scss'

const Header = ({ currentUser, hiddenProps}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
  
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
              Sign Out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        )}
        <CartIcon /> 
        {
            !hiddenProps ? null : <CartDropdown />
        }
        {/* <CartDropdown />  */}
      </div>
    </div>
  )


const mapStateToProps = (state) => ({
    // property: value
    hiddenProps: state.cart.hidden

})
// const mapStateToProps = ({cart: {hidden}}) => ({
//     // property: value
//     hiddenProps: cart.hidden

// })

// const mapStateToProps = (state) => {
//     console.log(state.cart.cartItem)
//     return state
// }
export default connect(mapStateToProps)(Header)