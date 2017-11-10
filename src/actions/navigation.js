import { NAVIGATE_SCREEN, NAVIGATION_BACK } from './types'

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