import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';

import { 	View, KeyboardAvoidingView, Image, 
			StyleSheet, Text, ScrollView } from 'react-native';

import { 	LoginInput, LoginButton, 
			SmallLoginButton, BreakLine } from './src/login';

import { 	SectionHeader, CartTable, CartTableItem,
			CartButton, HomeBreakLine } from './src/home';

/*******/
/* APP */
/*******/

export default function App() {
	return (
		<CartHome />
	);
}

/*************/
/* LOGINHOME */
/*************/

function LoginHome() {

	return (
		<KeyboardAvoidingView style={loginStyles.LoginContainer}>
			
			<View style={loginStyles.LogoContainer}>
				<Image 	resizeMode="cover" 
						style={loginStyles.LoginLogo} 
						source={require("./assets/images/logo.png")}
				/>
				<BreakLine />
				<BreakLine />
			</View>

			<View style={loginStyles.LoginOptionsContainer}>
				<LoginButton title="LOGIN" buttonStyle="default" style={loginStyles.LoginOptions} />
				<LoginButton title="SIGNUP" style={loginStyles.LoginOptions} />
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
				<SmallLoginButton title="Forgot Password" style={loginStyles.OtherOptions} />
				<SmallLoginButton title="Login with OTP"/>
			</View>

			<View style={loginStyles.SubmitContainer}>
			<LoginButton title="LOGIN" buttonStyle="default" style={loginStyles.SubmitButton} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

/**************/
/* SIGNUPHOME */
/**************/

function SignupHome() {

	return (
		<KeyboardAvoidingView style={loginStyles.LoginContainer}>
			
			<View style={loginStyles.LogoContainer}>
				<Image 	resizeMode="cover" 
						style={loginStyles.LoginLogo} 
						source={require("./assets/images/logo.png")}
				/>
				<BreakLine />
				<BreakLine />
			</View>

			<View style={loginStyles.LoginOptionsContainer}>
				<LoginButton 	title="BACK TO LOGIN" 
								buttonStyle="default" 
								style={loginStyles.SubmitButton}
				/>
			</View>

			<View style={[loginStyles.LoginFormContainer, loginStyles.SignupFormContainer]}>
				<LoginInput 
					style={loginStyles.LoginFormInput}
					placeholder="Name"
					type="text"
				/>
				<BreakLine /><LoginInput 
					style={loginStyles.LoginFormInput}
					placeholder="Mobile Number"
					type="number"
				/>
				<BreakLine /><LoginInput 
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
			</View>

			<View style={loginStyles.SubmitContainer}>
			<LoginButton title="SIGNUP" buttonStyle="default" style={loginStyles.SubmitButton} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

/************/
/* CARTHOME */
/************/

function CartHome() {
	return (
		<KeyboardAvoidingView>

			<HomeBreakLine />
			<HomeBreakLine />
			<HomeBreakLine />
			<HomeBreakLine />

			<SectionHeader style={homeStyles.CartSectionHeader} title="YOUR CART" />
			<HomeBreakLine />

			<CartTable style={homeStyles.CartTable} />

			<View style={homeStyles.CartHomeButtonsList}>
				<CartButton title="ADD ITEMS" style={homeStyles.CartHomeButton} />
				<CartButton title="GENERATE BILL" style={homeStyles.CartHomeButton} />
			</View>

		</KeyboardAvoidingView>
	);
}

const homeStyles = StyleSheet.create({
	CartHomeContainer: {
		width: '100%'
	},

	CartTable: {
		marginBottom: '8%'
	},

	CartHomeButtonsList: {
		width: '100%',
		flexDirection: 'row'
	},
	CartHomeButton: {
		flex: 1,
		marginRight: '2%',
		marginLeft: '2%'
	}
});

const loginStyles = StyleSheet.create({
	LoginContainer: {
		width: '100%',
		flexDirection: 'column',
		flex: 1,
		backgroundColor: 'white'
	},

	LogoContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	LoginLogo: {
		width: 100,
		height: 100
	},

	LoginOptionsContainer: {
		flex: 0.4,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	LoginOptions: {
		width: '42%',
		marginLeft: '1.25%',
		marginRight: '1.25%'
	},

	LoginFormContainer: {
		flex: 0.8,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	LoginFormInput: {
		width: '86.5%',
	},

	LoginOtherOptions: {
		flex: 0.4,
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
	},
	OtherOptions: {
		marginRight: '17%'
	},

	SubmitContainer: {
		flex: 0.8,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	SubmitButton: {
		width: '70%',
	},

	SignupFormContainer: {
		flex: 2
	}
});