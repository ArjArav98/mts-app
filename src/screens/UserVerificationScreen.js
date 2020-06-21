import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView, Text } from 'react-native'
import { FontText } from '../components/FontText'

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
							source={require("../../assets/images/logo.jpg")}
					/>
				</View>
	
				<View style={[loginStyles.LoginOptionsContainer,{flex: 0.8}]}>
					<LoginButton 	title="Hi, Username!"
									style={[loginStyles.LoginOptions, {width: '86%'}]} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 0.4}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter OTP"
						type="number"
					/>
				</View>
	
				<View style={loginStyles.LoginOtherOptions}>
					<SmallLoginButton 	title="Resend OTP" style={{width: '100%', textAlign: 'center'}} />
				</View>
	
				<View style={loginStyles.SubmitContainer}>
					<BreakLine />
					<BreakLine />
					<LoginButton title="Verify" buttonStyle="default" 
						style={loginStyles.SubmitButton} navigate={navigate} navigateScreen={'Login'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}