import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView, Text } from 'react-native'
import { FontText } from '../components/FontText'
import Colors from '../styles/Colors'

import { showMessage } from "react-native-flash-message";
import KeyboardListener from 'react-native-keyboard-listener'
const axios = require('axios')

export default class UserVerificationScreen extends Component {

	constructor(props) {
		super(props)
		this.state = { color: 'red' }
	}

	makeSmallLoginButtonsDisappear() {
		this.setState({ color: Colors.appInverseShade })
	}

	makeSmallLoginButtonsAppear() {
		this.setState({ color: 'red' })
	}

	/**************/
	/* SUBMISSION */
	/**************/

	submitDetails() {
		let details = this.props.navigation.state.params.details

		let apiUrl = 'http://cnagaraj-001-site1.ftempurl.com/JSonsString.asmx/SignUp?JosnRegistration=' + 
					'%5B%7B%22Title%22%3A%22' + details.title + '%22%2C' + 
					'%22UserName%22%3A%22' + details.name + '%22%2C' +
					'%22MobileNumber%22%3A%22' + details.mobile + '%22%2C' +
					'%22Address%22%3A%22' + details.address + '%22%2C' +
					'%22Pincode%22%3A%22' + details.pincode + '%22%2C' +
					'%22Password%22%3A%22' + details.password + '%22%7D%5D'

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
				message: "Success", description: "You have successfully signed up!",
				type: "success", icon: "success",
			})
		}
		else if(status === 500) {
			showMessage({
				message: "Sorry!", description: "An account with this number already exists. Try again.",
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
				</View>
	
				<View style={[loginStyles.LoginOptionsContainer,{flex: 1, flexDirection: 'column'}]}>
					<FontText 	title={'Hi, ' + this.props.navigation.state.params.details.name + '!'}
								fontStyle='light'
								style={	[loginStyles.LoginOptions, 
										{width: '86%', textAlign: 'center', fontSize: 18, color: Colors.appBlueShade}]} />
					<Image 	resizeMode="cover" 
							style={{height: 50, width: 50, marginTop: '7%'}}
							source={require("../../assets/images/user-otp.png")} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 0.3}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter OTP"
						type="number"
						onFocus={() => this.makeSmallLoginButtonsDisappear()}
						onBlur={() => this.makeSmallLoginButtonsAppear()}
					/>
				</View>
	
				<View style={loginStyles.LoginOtherOptions}>
					<SmallLoginButton 	title="Resend OTP" style={{width: '100%', textAlign: 'center', color: this.state.color}} />
				</View>
	
				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<BreakLine />
					<LoginButton 	title="Verify" buttonStyle="default" style={loginStyles.SubmitButton}
									onPress={() => this.submitDetails()}
						 />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}