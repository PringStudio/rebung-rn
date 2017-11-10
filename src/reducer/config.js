import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducer'
import { Keyboard } from 'react-native'

const logger = createLogger({
    colors: false
})

// Hide keyboard middleware
const keyboardMiddleware = store => next => action => {

    // If action is navigate screen
    if(action.type == 'NAVIGATE_SCREEN'){
        Keyboard.dismiss()
    }

    return next(action)
}

// Disable Logger in production
const middleware = (global.__DEV__) ? [thunk, logger] : [thunk];

export default configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware,keyboardMiddleware)
    )
}