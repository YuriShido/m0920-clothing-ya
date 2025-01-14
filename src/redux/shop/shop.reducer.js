// import { addCollectionAndDocuments } from '../../firebase/firebase.util'
import SHOP_DATA from '../../pages/shop/shop.data'

const INITIAL_STATE = {
    collections: null, 
    isFetching: false,
    errorMessage: undefined,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'UPDATE_COLLECTIONS':
            return {
                ...state,
                collections: action.payload
            }

        case 'FETCH_COLLECTION_STSART':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_COLLECTION_SUCCESS':
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case 'FETCH_COLLECTION_FAILURE':
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: 
            return state;
    }
}

export default shopReducer