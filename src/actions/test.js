import { SET_MESSAGE } from './types'

export const navigate = (screen,params) => {
    return {
        type: NAVIGATE_SCREEN,
        screen,
        params
    }
}

export const goBack = () => ({
    type: NAVIGATION_BACK
})

export const updateMessage = (message) => ({
    type: SET_MESSAGE,
    message
})