import React from 'react'
import { Provider } from 'react-redux'

import Navigator from './src/screen/Navigator'
import configureStore from './src/reducer/config'

// Redux Store
const store = configureStore()

// Create screen with redux and react-navigation
class Main extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Navigator/>
            </Provider>
        )
    }
}

export default Main