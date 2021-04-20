import { convertCollectionSnapShotToMap, firestore } from '../../firebase/firebase.util'

export const updateCollection = collectionMap => ({
    type: "UPDATE_COLLECTIONS",
    payload: collectionMap
})
export const fetchCollectionsStart = () => ({
    type: "FETCH_COLLECTION_START"
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection')

        dispatch(fetchCollectionStart())
        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionSnapShotToMap(snapShot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(err.errorMessage)))
    }
}
export const fetchCollectionsSuccess = (collectionMap) => ({
    type: "FETCH_COLLECTION_SUCCESS",
    payload: collectionMap
})
export const fetchCollectionsFailure = (collectionMap) => ({
    type: "FETCH_COLLECTION_Failure",
    payload: errorMessage
})

