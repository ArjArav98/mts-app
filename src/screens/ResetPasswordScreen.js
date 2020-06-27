import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView } from 'react-native'
import { FontText } from '../components/FontText'


export default class ResetPasswordScreen extends Component {

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
	
				<View style={[loginStyles.LoginOptionsContainer, {flex: 0.2}]}>
				<FontText 	title="Hi, Username!"
								style={[loginStyles.LoginOptions, 
								{width: '86%', color: Colors.appBlueShade, textAlign: 'center', fontSize: 18}]} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 1}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter Password"
						type="password"
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Confirm Password"
						type="password"
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter OTP"
						type="number"
					/>
				</View>
	
				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<BreakLine />
					<BreakLine />
					<LoginButton title="Continue" buttonStyle="default" 
						style={loginStyles.SubmitButton} navigate={navigate} navigateScreen={'Login'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}