import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login'
import { loginStyles } from '../styles/styles'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Colors from '../styles/Colors'

import AsyncStorage from '@react-native-community/async-storage';
import KeyboardListener from 'react-native-keyboard-listener'
import { showMessage } from 'react-native-flash-message'

const axios = require('axios')

/*************/
/* LOGINHOME */
/*************/

export default class LoginScreen extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			color: 'red',

			mobileno: '',
			password: ''
		 }
	}

	static navigationOptions = {
        header: null
    }

	async componentDidMount() {
		await AsyncStorage.setItem('cart', '{ "items": [] }')
	}

	makeSmallLoginButtonsDisappear() {
		this.setState({ color: Colors.appInverseShade })
	}

	makeSmallLoginButtonsAppear() {
		this.setState({ color: 'red' })
	}

	/************/
	/* UPDATION */
	/************/

	updateStateProperty(property, value) {
		switch(property) {
			case 'mobileno': this.setState({ mobileno: value }); break;
			case 'password': this.setState({ password: value })
		}
	}

	/**************/
	/* SUBMISSION */
	/**************/

	allFieldsAreFilled() {
		if(this.state.mobileno.trim().length != 10) return false
		if(this.state.password.trim().length == 0) return false

		return true
	}

	submitLoginDetails() {
		if(this.allFieldsAreFilled() !== true) {
			this.showResponseMessage(500)
			return
		}

		let apiUrl = 'http://cnagaraj-001-site1.ftempurl.com/JSonsString.asmx/Login?Josnloginstr=' + 
					'%5B%7B%22mobileno%22%3A%22' + this.state.mobileno + '%22%2C' + 
					'%22password%22%3A%22' + this.state.password + '%22%7D%5D'

		console.log(apiUrl)
		const self = this
		axios.get(apiUrl)
			.then(function (response) {
				if(response.data.includes('200')) {
					self.showResponseMessage(200)
					self.props.navigation.navigate('AppNavigation')
				}
				else if(response.data.includes('Invalid')) self.showResponseMessage(500)
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	showResponseMessage(status) {
		if(status === 200) {
			showMessage({
				message: "Success",
				description: "You have successfully logged in!",
				type: "success",
				icon: "success",
			})
		}
		else if(status === 500) {
			showMessage({
				message: "Sorry!", description: "Incorrect credentials!",
				type: "danger", icon: "danger",
			})
		}
	}

	render() {
	
		let { navigate } = this.props.navigation;
	
		return (
	
			<View style={loginStyles.LoginContainer}>

				<KeyboardListener
						onDidShow={() => this.makeSmallLoginButtonsDisappear()}
						onDidHide={() => this.makeSmallLoginButtonsAppear()}
					/>
	
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={[loginStyles.LoginLogo]} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={loginStyles.LoginOptionsContainer}>
					<LoginButton 	title="Login" buttonStyle="default" style={loginStyles.LoginOptions} />
					<LoginButton 	title="Signup" style={loginStyles.LoginOptions} 
									navigate={navigate} navigateScreen={'Signup'} />
				</View>
	
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.LoginFormContainer, {flex: 0.5}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Mobile Number"
						type="number"
						onChangeText={(text) => this.updateStateProperty('mobileno', text)}
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Password"
						type="password"
						onChangeText={(text) => this.updateStateProperty('password', text)}
					/>
				</View>
	
				<BreakLine />

				<View style={[loginStyles.LoginOtherOptions, {flex: 0.3}]}>
					<SmallLoginButton 	title="Forgot Password" style={[loginStyles.OtherOptions, {fontSize: 15, color: this.state.color}]}
										navigate={navigate} navigateScreen={'ForgotPassword'}  />
					<SmallLoginButton 	title="Login with OTP" style={{fontSize: 15, color: this.state.color}}
										navigate={navigate} navigateScreen={'OTPLogin'} />
				</View>
	
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<LoginButton 	title="Login" buttonStyle="default" 
									style={loginStyles.SubmitButton} 
									onPress={() => this.submitLoginDetails() } />
				</View>
	
			</View>
	
		);
	}

}