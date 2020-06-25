import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native'

/**************/
/* SIGNUPHOME */
/**************/

export class SignupScreen extends Component {

	render() {

		let { navigate } = this.props.navigation;

		return (
			<KeyboardAvoidingView style={loginStyles.LoginContainer}>
				
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={[loginStyles.LoginLogo]} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
				</View>

				<View style={loginStyles.LoginOptionsContainer}>
					<LoginButton 	title="Login" style={loginStyles.LoginOptions}
									navigate={navigate} navigateScreen={'Login'}  />
					<LoginButton title="Signup" buttonStyle="default" style={loginStyles.LoginOptions} />
				</View>

				<View style={[loginStyles.LoginFormContainer, loginStyles.SignupFormContainer]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Title (Mr/Mrs)"
						type="text"
					/>
					<BreakLine /><LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Name"
						type="text"
					/>
					<BreakLine /><LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Mobile Number"
						type="number"
					/>
				</View>

				<View style={loginStyles.SubmitContainer}>
					<LoginButton 	title="Continue" buttonStyle="default" style={loginStyles.SubmitButton}
									navigate={navigate} navigateScreen={'SignupContinuation'} />
				</View>

			</KeyboardAvoidingView>
		);
		
	}

}

/**************/
/* SIGNUPCOTD */
/**************/

export class SignupContinuationScreen extends Component {

	render() {

		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;
	
		return (
			<KeyboardAvoidingView style={loginStyles.LoginContainer}>
				
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={[loginStyles.LoginLogo]} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={loginStyles.LoginOptionsContainer}>
					<LoginButton 	title="Login" style={loginStyles.LoginOptions}
									navigate={navigate} navigateScreen={'Signup'}  />
					<LoginButton title="Signup" buttonStyle="default" style={loginStyles.LoginOptions} />
				</View>
	
				<View style={[loginStyles.LoginFormContainer, loginStyles.SignupFormContainer]}>
					
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Address"
						type="text"
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Pincode"
						type="pincode"
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Password"
						type="password"
					/>
				</View>
	
				<View style={[loginStyles.SubmitContainer]}>
					<LoginButton 	title="Register" buttonStyle="default" style={loginStyles.SubmitButton}
									navigate={navigate} navigateScreen={'UserVerification'} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}