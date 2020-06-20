import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView } from 'react-native'

export default class OTPLoginVerificationScreen extends Component {

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
				</View>
	
				<View style={[loginStyles.LoginOptionsContainer, {flex: 0.7}]}>
					<LoginButton 	title="LOGIN VIA OTP" buttonStyle="default"
									style={[loginStyles.LoginOptions, {width: '86%'}]} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 0.2}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter OTP"
						type="number"
					/>
				</View>
	
				<View style={[loginStyles.LoginOtherOptions]}>
					<SmallLoginButton 	title="Login" style={loginStyles.OtherOptions}
										navigate={navigate} navigateScreen={'Login'}  />
					<SmallLoginButton title="Signup" navigate={navigate} navigateScreen={'Signup'}/>
				</View>
	
				<View style={loginStyles.SubmitContainer}>
					<LoginButton 	title="LOGIN" buttonStyle="default" style={loginStyles.SubmitButton}
									navigate={navigate} navigateScreen={'AppHome'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}