import React from 'core-js/library/fn/reflect/es7/metadata'
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps}) => {
        return isLoading? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner
}

export default WithSpinner