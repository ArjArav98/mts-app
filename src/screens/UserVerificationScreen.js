import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView, Text } from 'react-native'
import { FontText } from '../components/FontText'
import Colors from '../styles/Colors'

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
	
				<View style={[loginStyles.LoginOptionsContainer,{flex: 1, flexDirection: 'column'}]}>
					<FontText 	title="Hi, Username!"
								fontStyle='light'
								style={	[loginStyles.LoginOptions, 
										{width: '86%', textAlign: 'center', fontSize: 18, color: Colors.appBlueShade}]} />
					<Image 	resizeMode="cover" 
							style={{height: 50, width: 50, marginTop: '7%'}}
							source={require("../../assets/images/user.png")} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, {flex: 0.3}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Enter OTP"
						type="number"
					/>
				</View>
	
				<View style={loginStyles.LoginOtherOptions}>
					<SmallLoginButton 	title="Resend OTP" style={{width: '100%', textAlign: 'center'}} />
				</View>
	
				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<BreakLine />
					<LoginButton title="Verify" buttonStyle="default" 
						style={loginStyles.SubmitButton} navigate={navigate} navigateScreen={'Login'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}