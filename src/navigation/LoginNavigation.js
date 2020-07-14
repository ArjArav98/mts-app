import React from 'react'
import { View } from 'react-native'
import 'react-native-gesture-handler'

import { StackNavigator } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'
import { SignupScreen, SignupContinuationScreen} from '../screens/SignupScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import UserVerificationScreen from '../screens/UserVerificationScreen'
import OTPLoginScreen from '../screens/OTPLoginScreen'
import OTPLoginVerificationScreen from '../screens/OTPLoginVerificationScreen'

import CartNavigation from './CartNavigation'
import AppNavigation from './AppNavigation'
import FlashMessage from 'react-native-flash-message'

const Navbar = StackNavigator({
	Login: {
		screen: LoginScreen
	},
	Signup: {
		screen: SignupScreen
	},
	SignupContinuation: {
		screen: SignupContinuationScreen
	},
	UserVerification: {
		screen: UserVerificationScreen
	},
	ForgotPassword: {
		screen: ForgotPasswordScreen
	},
	ResetPassword: {
		screen: ResetPasswordScreen
	},
	OTPLogin: {
		screen: OTPLoginScreen
	},
	OTPLoginVerification: {
		screen: OTPLoginVerificationScreen
	},
	AppNavigation: {
		screen: AppNavigation
	}
}, {
	initialRouteName: 'Login'
});

export default function LoginNavigationScreen() {
	return (
		<View style={{flex: 1, width: '100%'}}>
			<Navbar />
			<FlashMessage position='top' />
		</View>
	);
}