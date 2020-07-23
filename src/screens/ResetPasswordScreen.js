import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView } from 'react-native'
import { FontText } from '../components/FontText'
import KeyboardListener from 'react-native-keyboard-listener'
const axios = require('axios')

import { showMessage } from "react-native-flash-message";

export default class ResetPasswordScreen extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			color: 'red',

			password: '',
			confirmPassword: ''
		}
	}

	makeSmallLoginButtonsDisappear() {
		this.setState({ color: Colors.appInverseShade })
	}

	makeSmallLoginButtonsAppear() {
		this.setState({ color: 'red' })
	}

	allFieldsAreValid() {
		if(this.state.password.trim().length === 0) return false
		if(this.state.confirmPassword.trim().length === 0) return false
		if(this.state.password !== this.state.confirmPassword) return false

		return true
	}

	showErrorMessageForInvalidFields() {
		if(this.state.password.trim().length === 0) {
			showMessage({
				message: "Error", description: "Password can't be blank.",
				type: "danger", icon: "danger",
			})
			return 
		}
		if(this.state.confirmPassword.trim().length === 0) {
			showMessage({
				message: "Error", description: "Confirm Password can't be blank.",
				type: "danger", icon: "danger",
			})
			return 
		}
		if(this.state.password !== this.state.confirmPassword) {
			showMessage({
				message: "Error", description: "Passwords don't match.",
				type: "danger", icon: "danger",
			})
			return 
		}
	}

	submitDetails() {
		if(!this.allFieldsAreValid()) {
			this.showErrorMessageForInvalidFields()
			return
		}

		let details = this.props.navigation.state.params.details

		let apiUrl = 'http://cnagaraj-001-site1.ftempurl.com/JSonsString.asmx/forgotpwd?JosnString=' + 
					'%5B%7B%22password%22%3A%22' + this.state.password + '%22%2C' + 
					'%22confirmpwd%22%3A%22' + this.state.confirmPassword + '%22%2C' +
					'%22MobileNumber%22%3A%22' + details.mobile + '%22%7D%5D'

		console.log(apiUrl)
		const self = this
		axios.get(apiUrl)
			.then(function (response) {
				if(response.data.includes('200')) {
					self.showResponseMessage(200)
					self.props.navigation.popToTop()
				}
				else if(response.data.includes('#')) self.showResponseMessage(500)
				else self.showResponseMessage(500)
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	showResponseMessage(status) {
		if(status === 200) {
			showMessage({
				message: "Success", description: "You have successfully reset your password!",
				type: "success", icon: "success",
			})
		}
		else if(status === 500) {
			showMessage({
				message: "Sorry!", description: "This number does not exist. Try again.",
				type: "danger", icon: "danger",
			})
		}
	}

	render() {
	
		let { navigate } = this.props.navigation;
	
		return (
	
			<KeyboardAvoidingView style={loginStyles.LoginContainer}>

					<KeyboardListener
						onDidShow={() => this.makeSmallLoginButtonsDisappear()}
						onDidHide={() => this.makeSmallLoginButtonsAppear()}
					/>
				
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={loginStyles.LoginLogo} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={[loginStyles.LoginOptionsContainer, {flex: 0.2}]}>
					<FontText 	title="Hi, Username!"
								fontStyle='light'
								style={[loginStyles.LoginOptions, 
								{width: '86%', color: Colors.appBlueShade, textAlign: 'center', fontSize: 18}]} />
				</View>

				<View style={[loginStyles.LoginFormContainer, {flex: 1}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter Password"
						type="password"
						onChangeText={(text) => this.setState({ password: text })}
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Confirm Password"
						type="password"
						onChangeText={(text) => this.setState({ confirmPassword: text })}
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter OTP"
						type="number"
					/>
				</View>
				
				<View style={[loginStyles.LoginOtherOptions, {flex: 0.4}]}>
					<SmallLoginButton title="Resend OTP" style={{color: this.state.color}} />
				</View>

				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<BreakLine />
					<BreakLine />
					<LoginButton 	title="Continue" buttonStyle="default" style={loginStyles.SubmitButton}
									onPress={() => this.submitDetails() }/>
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}