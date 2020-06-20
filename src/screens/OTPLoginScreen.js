import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView } from 'react-native'

export default class OTPLoginScreen extends Component {

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
	
				<View style={[loginStyles.LoginOptionsContainer, {flex: 0.5}]}>
					<LoginButton 	title="LOGIN VIA OTP" buttonStyle="default"
									style={[loginStyles.LoginOptions, {width: '86%'}]} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 0.5}]}>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter Mobile Number"
						type="number"
					/>
				</View>
	
				<View style={[loginStyles.LoginOtherOptions]}>
					<SmallLoginButton 	title="Login" style={loginStyles.OtherOptions}
										navigate={navigate} navigateScreen={'Login'}  />
					<SmallLoginButton title="Signup" navigate={navigate} navigateScreen={'Signup'} />
				</View>
	
				<View style={loginStyles.SubmitContainer}>
					<LoginButton 	title="CONTINUE" buttonStyle="default" style={loginStyles.SubmitButton}
									navigate={navigate} navigateScreen={'OTPLoginVerification'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}