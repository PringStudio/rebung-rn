import React from 'react'
import { BackHandler } from "react-native"
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

// Screen
import Home from './Home'
import Profile from './Profile'

// Configured Stack Navigator
export const AppNavigator = StackNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile }
    },
    {
        headerMode: 'none',
    }
)

// Navigation Component
class AppWithNavigation extends React.Component {

    render(){
        return(
            <AppNavigator navigation={ addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        )
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, nav } = this.props;

        if (nav.index === 0) {
            return false;
        }

        dispatch(NavigationActions.back());
        
        return true;
    };
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigation)