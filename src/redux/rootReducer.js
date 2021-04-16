import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart.reducer'

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [cartReducer, cartReducer1]
}

const rootReducer = combineReducers({
    cart: cartReducer
})

// export default rootReducer
export default persistReducer(persistConfig, rootReducer)