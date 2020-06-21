import React from 'react'
import 'react-native-gesture-handler'

import { StackNavigator } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'
import { SignupScreen, SignupContinuationScreen} from '../screens/SignupScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import UserVerificationScreen from '../screens/UserVerificationScreen'
import OTPLoginScreen from '../screens/OTPLoginScreen'
import OTPLoginVerificationScreen from '../screens/OTPLoginVerificationScreen'

import AppNavigation from './AppNavigation'

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
	initialRouteName: 'Login',
	headerMode: 'none'
});

export default function LoginNavigationScreen() {
	return (
		<Navbar screenOptions={{headerShown: false}} />
	);
}