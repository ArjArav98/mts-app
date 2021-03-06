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
					<BreakLine />
					<BreakLine />
					<BreakLine />
					<BreakLine />
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={[loginStyles.LoginOptionsContainer, {flex: 0.4}]}>
				<FontText 	title="Login with OTP"
							fontStyle='light'
							style={[loginStyles.LoginOptions, 
							{width: '86%', color: Colors.appBlueShade, textAlign: 'center', fontSize: 18}]} />
				</View>
				
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.LoginFormContainer, {flex: 0.4}]}>
					<FontText 	title="Please check the OTP sent to your mobile."
								fontStyle='light'
								style={[{width: '100%', fontSize: 18, textAlign: 'center', marginBottom: '2%'}]}
								fontStyle='light' />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter OTP"
						type="number"
					/>
				</View>
	
				<View style={[loginStyles.LoginOtherOptions, {flex: 0.3}]}>
					<SmallLoginButton 	title="Resend OTP" />
				</View>

				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<BreakLine />
					<BreakLine />
					<LoginButton 	title="Login" buttonStyle="default" style={loginStyles.SubmitButton}
									navigate={navigate} navigateScreen={'AppNavigation'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}