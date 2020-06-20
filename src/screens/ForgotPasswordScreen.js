import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView, Text } from 'react-native'

export default class ForgotPasswordScreen extends Component {

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
					<LoginButton 	title="FORGOT PASSWORD" buttonStyle="default"
									style={[loginStyles.LoginOptions, {width: '86%'}]} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 0.5}]}>
					<Text style={{fontSize: 18, fontWeight: 'bold'}}>Password Reset</Text>
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
					<SmallLoginButton 	title="Login with OTP" 
										navigate={navigate} navigateScreen={'OTPLogin'} />
				</View>
	
				<View style={loginStyles.SubmitContainer}>
					<LoginButton 	title="RESET PASSWORD" buttonStyle="default" style={loginStyles.SubmitButton}
									navigate={navigate} navigateScreen={'ResetPassword'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}