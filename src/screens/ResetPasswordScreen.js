import React, { Component } from "react";
import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import { View, Image, KeyboardAvoidingView } from 'react-native'
import { FontText } from '../components/FontText'
import KeyboardListener from 'react-native-keyboard-listener'

export default class ResetPasswordScreen extends Component {

	constructor(props) {
		super(props)
		this.state = { color: 'red' }
	}

	makeSmallLoginButtonsDisappear() {
		this.setState({ color: Colors.appInverseShade })
	}

	makeSmallLoginButtonsAppear() {
		this.setState({ color: 'red' })
	}

	render() {
	
		let { navigate } = this.props.navigation;
	
		return (
	
			<KeyboardAvoidingView style={loginStyles.LoginContainer}>

					<KeyboardListener
						onDidShow={() => this.makeSmallLoginButtonsDisappear()}
						onDidHide={() => this.makeSmallLoginButtonsAppear()}
					/>
				
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
								fontStyle='light'
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
				
				<View style={[loginStyles.LoginOtherOptions, {flex: 0.4}]}>
					<SmallLoginButton title="Resend OTP" style={{color: this.state.color}} />
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