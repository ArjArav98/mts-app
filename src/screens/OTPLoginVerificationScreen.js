import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView } from 'react-native'
import { FontText } from "../components/FontText";

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
					<LoginButton 	title="Login with OTP"
									style={[loginStyles.LoginOptions, {width: '86%'}]} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 0.5}]}>
					<FontText 	title="Please check the OTP sent to your mobile."
								style={[{width: '90%', fontSize: 18, textAlign: 'center', marginBottom: '2%'}]}
								fontStyle='light' />
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
					<LoginButton 	title="Login" buttonStyle="default" style={loginStyles.SubmitButton}
									navigate={navigate} navigateScreen={'AppNavigation'} />
					<BreakLine />
					<LoginButton 	title="Back" buttonStyle="default" style={loginStyles.SubmitButton}
									navigate={navigate} navigateScreen={'OTPLogin'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}