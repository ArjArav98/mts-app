import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView, Text } from 'react-native'

export default class UserVerificationScreen extends Component {

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
							source={require("../../assets/images/logo.png")}
					/>
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={loginStyles.LoginOptionsContainer}>
					<LoginButton 	title="HI, USERNAME!" buttonStyle="default" 
									style={[loginStyles.LoginOptions, {width: '86%'}]} />
				</View>
	
				<View style={loginStyles.LoginFormContainer}>
					<Text style={{fontSize: 18, fontWeight: 'bold'}}>Mobile Number Verification</Text>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter OTP"
						type="number"
					/>
				</View>
	
				<View style={[loginStyles.LoginOtherOptions,{margin: 0}]}>
					<SmallLoginButton 	title="Resend OTP" style={{width: '100%', textAlign: 'center'}} />
				</View>
	
				<View style={loginStyles.SubmitContainer}>
					<LoginButton title="VERIFY" buttonStyle="default" 
						style={loginStyles.SubmitButton} navigate={navigate} navigateScreen={'Login'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}