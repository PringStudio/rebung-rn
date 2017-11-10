import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducer'

const logger = createLogger({
    colors: false
})

// Disable Logger in production
const middleware = (global.__DEV__) ? [thunk, logger] : [thunk];

export default configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}