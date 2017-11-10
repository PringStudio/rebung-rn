import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native'

// Actions
import { navigate } from '../actions/navigation'
import { updateMessage } from '../actions/test'

class Home extends React.Component {

    render(){
        return(
            <View>
                <Text>Home</Text>
                <Text>Message: { this.props.message }</Text>
                <TextInput value={ this.props.message } onChangeText={ (text) => this.props.update(text) }/>
                <Button title="Profil" onPress={() => this.props.navigate('Profile')}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)