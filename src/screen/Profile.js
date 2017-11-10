import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text
} from 'react-native'

class Profile extends React.Component {

    render(){
        return(
            <View>
                <Text>Profile</Text>
                <Text>Message from Above: { this.props.message }</Text>
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        message: state.test.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (screen,params) => dispatch(navigate(screen,params)),
        update: (message) => dispatch(updateMessage(message))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)