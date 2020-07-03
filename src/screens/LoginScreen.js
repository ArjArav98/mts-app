import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login'
import { loginStyles } from '../styles/styles'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Colors from '../styles/Colors'
import KeyboardListener from 'react-native-keyboard-listener'

/*************/
/* LOGINHOME */
/*************/

export default class LoginScreen extends Component {

	constructor(props) {
		super(props)
		this.state = { color: 'red' }
	}

	static navigationOptions = {
        header: null
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
	
			<View style={loginStyles.LoginContainer}>

				<KeyboardListener
						onDidShow={() => this.makeSmallLoginButtonsDisappear()}
						onDidHide={() => this.makeSmallLoginButtonsAppear()}
					/>
	
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={[loginStyles.LoginLogo]} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={loginStyles.LoginOptionsContainer}>
					<LoginButton 	title="Login" buttonStyle="default" style={loginStyles.LoginOptions} />
					<LoginButton 	title="Signup" style={loginStyles.LoginOptions} 
									navigate={navigate} navigateScreen={'Signup'} />
				</View>
	
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.LoginFormContainer, {flex: 0.5}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Mobile Number"
						type="number"
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Password"
						type="password"
					/>
				</View>
	
				<BreakLine />

				<View style={[loginStyles.LoginOtherOptions, {flex: 0.3}]}>
					<SmallLoginButton 	title="Forgot Password" style={[loginStyles.OtherOptions, {fontSize: 15, color: this.state.color}]}
										navigate={navigate} navigateScreen={'ForgotPassword'}  />
					<SmallLoginButton 	title="Login with OTP" style={{fontSize: 15, color: this.state.color}}
										navigate={navigate} navigateScreen={'OTPLogin'} />
				</View>
	
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<LoginButton 	title="Login" buttonStyle="default" 
									style={loginStyles.SubmitButton} 
									navigate={navigate} navigateScreen={'AppNavigation'} />
				</View>
	
			</View>
	
		);
	}

}