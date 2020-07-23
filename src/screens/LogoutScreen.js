import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { showMessage } from 'react-native-flash-message'

/*************/
/* LOGINHOME */
/*************/

export default class LogoutScreen extends Component {

	render() {
        this.props.navigation.popToTop()
		return (<View></View>)
	}

}