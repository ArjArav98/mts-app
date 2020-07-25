import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView, Text } from 'react-native'
import { FontText } from '../components/FontText'

import { showMessage } from "react-native-flash-message";

export default class ForgotPasswordScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			mobile: ''
		}
	}

	submitDetails() {
		if(this.state.mobile.trim().length != 10) {
			showMessage({
				message: "Error", description: "Mobile# should be 10 characters.",
				type: "danger", icon: "danger",
			})
			return 
		}

		this.props.navigation.navigate('ResetPassword', { details: this.state })
	}

	render() {

		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;
	
		return (
	
			<KeyboardAvoidingView style={loginStyles.LoginContainer}>
				
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={loginStyles.LoginLogo} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
					<BreakLine />
					<BreakLine />
					<BreakLine />
					<BreakLine />
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={[loginStyles.LoginOptionsContainer, {flex: 0.2}]}>
					<FontText 	title="Forgot Password"
								fontStyle='light'
								style={[loginStyles.LoginOptions, 
								{width: '86%', color: Colors.appBlueShade, textAlign: 'center', fontSize: 18}]} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 0.4}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter Mobile Number"
						type="number"
						onChangeText={(text) => this.setState({ mobile: text })}
					/>
				</View>
	
				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<BreakLine />
					<LoginButton 	title="Reset Password" buttonStyle="default" style={loginStyles.SubmitButton}
									onPress={() => this.submitDetails()} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}