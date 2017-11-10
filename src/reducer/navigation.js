import { AppNavigator } from '../screen/Navigator'
import { NavigationActions } from 'react-navigation'
import { NAVIGATE_SCREEN } from '../actions/types'

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Home')
)

export const nav = (state=initialState,action) => {
    let nextState

    switch(action.type){
        case NAVIGATE_SCREEN:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: action.screen, params: action.params }),
                state
            )
            break
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break
    }

    return nextState || state
}