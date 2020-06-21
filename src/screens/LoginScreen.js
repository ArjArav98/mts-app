import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import React, { Component } from 'react'
import { View, Image } from 'react-native'

/*************/
/* LOGINHOME */
/*************/

export default class LoginScreen extends Component {

	render() {
		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;
	
		return (
	
			<View style={loginStyles.LoginContainer}>
	
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={[loginStyles.LoginLogo]} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={loginStyles.LoginOptionsContainer}>
					<LoginButton title="Login" buttonStyle="default" style={loginStyles.LoginOptions} />
					<LoginButton title="Signup" style={loginStyles.LoginOptions} 
								navigate={navigate} navigateScreen={'Signup'} />
				</View>
	
				<View style={loginStyles.LoginFormContainer}>
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
	
				<View style={loginStyles.LoginOtherOptions}>
					<SmallLoginButton 	title="Forgot Password" style={loginStyles.OtherOptions}
										navigate={navigate} navigateScreen={'ForgotPassword'}  />
					<SmallLoginButton title="Login with OTP" navigate={navigate} navigateScreen={'OTPLogin'} />
				</View>
	
				<View style={loginStyles.SubmitContainer}>
					<LoginButton title="Login" buttonStyle="default" 
						style={loginStyles.SubmitButton} navigate={navigate} navigateScreen={'AppNavigation'} />
				</View>
	
			</View>
	
		);
	}

}