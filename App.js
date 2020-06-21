import React from 'react'
import 'react-native-gesture-handler'

import { StackNavigator } from 'react-navigation'

import LoginScreen from './src/screens/LoginScreen'
import { SignupScreen, SignupContinuationScreen} from './src/screens/SignupScreen'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import ResetPasswordScreen from './src/screens/ResetPasswordScreen'
import UserVerificationScreen from './src/screens/UserVerificationScreen'
import OTPLoginScreen from './src/screens/OTPLoginScreen'
import OTPLoginVerificationScreen from './src/screens/OTPLoginVerificationScreen'

import HomeScreen from './src/screens/HomeScreen'
import CartScreen from './src/screens/CartScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import PaymentSuccessScreen from './src/screens/PaymentSuccessScreen';
import BarcodeScreen from './src/screens/BarcodeScreen'

import AppNavigationScreen from './src/navigation/AppNavigationScreen'

/**************/
/* NAVIGATION */
/**************/

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
	AppHome: {
		screen: HomeScreen
	},
	Cart: {
		screen: CartScreen
	},
	Barcode: {
		screen: BarcodeScreen
	},
	Payment: {
		screen: PaymentScreen
	},
	PaymentSuccess: {
		screen: PaymentSuccessScreen
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
		screen: AppNavigationScreen
	}
}, {
	initialRouteName: 'Login',
	headerMode: 'none'
});

/*******/
/* APP */
/*******/

export default function App() {
	return (
		<Navbar screenOptions={{headerShown: false}} />
	);
}