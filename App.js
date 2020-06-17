import React, { useState, useEffect, Component } from 'react';
import 'react-native-gesture-handler';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { StackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 	View, KeyboardAvoidingView, Image, 
			StyleSheet, Text, Button } from 'react-native';

import { 	LoginInput, LoginButton,
			SmallLoginButton, BreakLine } from './src/login';

import { 	SectionHeader, CartTable,
			CartButton, HomeBreakLine } from './src/home';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

/**************/
/* NAVIGATION */
/**************/

const Navbar = StackNavigator({
	Login: {
		screen: LoginHome
	},
	Signup: {
		screen: SignupHome1
	},
	SignupContinuation: {
		screen: SignupHome2
	},
	AppHome: {
		screen: Home
	},
	Cart: {
		screen: CartHome
	},
	Barcode: {
		screen: BarcodeScreen
	},
	Payment: {
		screen: PaymentHome
	},
	PaymentSuccess: {
		screen: PaymentSuccessHome
	},
	UserVerification: {
		screen: UserVerificationHome
	},
	ForgotPassword: {
		screen: ForgotPasswordHome
	},
	ResetPassword: {
		screen: ResetPasswordHome
	},
	OTPLogin: {
		screen: OTPLoginHome
	},
	OTPLoginVerification: {
		screen: OTPLoginVerificationHome
	}
}, {
	initialRouteName: 'Login',
	headerMode: 'none'
});

function OTPLoginVerificationHome(props) {

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;

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

			<View style={[loginStyles.LoginOptionsContainer, {flex: 0.7}]}>
				<LoginButton 	title="LOGIN VIA OTP" buttonStyle="default"
								style={[loginStyles.LoginOptions, {width: '86%'}]} />
			</View>

			<View style={[loginStyles.LoginFormContainer, {flex: 0.2}]}>
				<LoginInput 
					style={loginStyles.LoginFormInput}
					placeholder="Enter OTP"
					type="number"
				/>
			</View>

			<View style={[loginStyles.LoginOtherOptions]}>
				<SmallLoginButton 	title="Login" style={loginStyles.OtherOptions}
									navigate={navigate} navigateScreen={'Login'}  />
				<SmallLoginButton title="Signup" navigate={navigate} navigateScreen={'Signup'}/>
			</View>

			<View style={loginStyles.SubmitContainer}>
				<LoginButton 	title="LOGIN" buttonStyle="default" style={loginStyles.SubmitButton}
								navigate={navigate} navigateScreen={'AppHome'} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

function OTPLoginHome(props) {

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;

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

			<View style={[loginStyles.LoginOptionsContainer, {flex: 0.5}]}>
				<LoginButton 	title="LOGIN VIA OTP" buttonStyle="default"
								style={[loginStyles.LoginOptions, {width: '86%'}]} />
			</View>

			<View style={[loginStyles.LoginFormContainer, {flex: 0.5}]}>
				<BreakLine />
				<LoginInput 
					style={loginStyles.LoginFormInput}
					placeholder="Enter Mobile Number"
					type="number"
				/>
			</View>

			<View style={[loginStyles.LoginOtherOptions]}>
				<SmallLoginButton 	title="Login" style={loginStyles.OtherOptions}
									navigate={navigate} navigateScreen={'Login'}  />
				<SmallLoginButton title="Signup" navigate={navigate} navigateScreen={'Signup'} />
			</View>

			<View style={loginStyles.SubmitContainer}>
				<LoginButton 	title="CONTINUE" buttonStyle="default" style={loginStyles.SubmitButton}
								navigate={navigate} navigateScreen={'OTPLoginVerification'} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

function ResetPasswordHome(props) {

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;

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

			<View style={[loginStyles.LoginOptionsContainer, {flex: 0.8}]}>
				<LoginButton 	title="HI, USERNAME!" buttonStyle="default"
								style={[loginStyles.LoginOptions, {width: '86%'}]} />
			</View>

			<View style={[loginStyles.LoginFormContainer, {flex: 1.2}]}>
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

			<View style={loginStyles.LoginOtherOptions}>
				<SmallLoginButton 	title="Login" style={loginStyles.OtherOptions}
									navigate={navigate} navigateScreen={'Login'}  />
				<SmallLoginButton title="Login with OTP"/>
			</View>

			<View style={loginStyles.SubmitContainer}>
				<LoginButton title="CONTINUE" buttonStyle="default" 
					style={loginStyles.SubmitButton} navigate={navigate} navigateScreen={'Login'} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

function ForgotPasswordHome(props) {

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;

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

			<View style={[loginStyles.LoginOptionsContainer, {flex: 0.5}]}>
				<LoginButton 	title="FORGOT PASSWORD" buttonStyle="default"
								style={[loginStyles.LoginOptions, {width: '86%'}]} />
			</View>

			<View style={[loginStyles.LoginFormContainer, {flex: 0.5}]}>
				<Text style={{fontSize: 18, fontWeight: 'bold'}}>Password Reset</Text>
				<BreakLine />
				<LoginInput 
					style={loginStyles.LoginFormInput}
					placeholder="Enter Mobile Number"
					type="number"
				/>
			</View>

			<View style={[loginStyles.LoginOtherOptions]}>
				<SmallLoginButton 	title="Login" style={loginStyles.OtherOptions}
									navigate={navigate} navigateScreen={'Login'}  />
				<SmallLoginButton 	title="Login with OTP" 
									navigate={navigate} navigateScreen={'OTPLogin'} />
			</View>

			<View style={loginStyles.SubmitContainer}>
				<LoginButton 	title="RESET PASSWORD" buttonStyle="default" style={loginStyles.SubmitButton}
								navigate={navigate} navigateScreen={'ResetPassword'} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

function UserVerificationHome(props) {

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;

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
				<LoginButton 	title="HI, USERNAME!" buttonStyle="default" 
								style={[loginStyles.LoginOptions, {width: '86%'}]} />
			</View>

			<View style={loginStyles.LoginFormContainer}>
				<Text style={{fontSize: 18, fontWeight: 'bold'}}>Mobile Number Verification</Text>
				<BreakLine />
				<LoginInput 
					style={loginStyles.LoginFormInput}
					placeholder="Enter OTP"
					type="number"
				/>
			</View>

			<View style={[loginStyles.LoginOtherOptions,{margin: 0}]}>
				<SmallLoginButton 	title="Resend OTP" style={{width: '100%', textAlign: 'center'}} />
			</View>

			<View style={loginStyles.SubmitContainer}>
				<LoginButton title="VERIFY" buttonStyle="default" 
					style={loginStyles.SubmitButton} navigate={navigate} navigateScreen={'Login'} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

/************************/
/* PAYMENT SUCCESS HOME */
/************************/

function PaymentSuccessHome(props){

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;
	
	return (
		<View style={homeStyles.HomeContainer}>
			
			<SectionHeader title="PAYMENT SUCCESSFUL" style={{width: '100%'}}/>
			<View style={[homeStyles.HomeElemContainer,{flex: 0.5}]}>
				<Text style={homeStyles.HomeElemText}>Thanks for shopping with us!</Text>
				<Text style={homeStyles.HomeElemText}>
					Your total bill amount is Rs 465. The number of items is 5.
				</Text>
			</View>
			<View style={[homeStyles.HomeElemContainer, {justifyContent: 'flex-start'}]}>
				<View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
					<Image 	source={require('./assets/images/star.png')} 
							style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
					<Image 	source={require('./assets/images/star.png')} 
							style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
					<Image 	source={require('./assets/images/star.png')} 
							style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
					<Image 	source={require('./assets/images/star.png')} 
							style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
					<Image 	source={require('./assets/images/star.png')} 
							style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
				</View>
				<LoginInput placeholder="Your Comments" style={{width: '80%', marginTop: '5%'}} />
				<LoginButton 	title="SUBMIT" buttonStyle="default" style={{width: '80%', marginTop: '5%'}}
							 	navigate={navigate} navigateScreen={'AppHome'} />
			</View>

		</View>
	);

}

/****************/
/* PAYMENT HOME */
/****************/

function PaymentHome(props){

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;
	
	return (
		<View style={homeStyles.HomeContainer}>
			
			<SectionHeader title="YOUR BILL" style={{width: '100%'}}/>
			<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1]}>
				<Text style={homeStyles.HomeElemText}>Get rid of the long queue!</Text>
				<Text style={homeStyles.HomeElemText}>
					Please show this code at the billing counter to make your payment.
				</Text>
				<TouchableOpacity 	style={homeStyles.HomeElemImageContainer}
									onPress={()=>navigate('PaymentSuccess')}>
					<Image 	style={homeStyles.HomeElemImage} 
							source={require('./assets/images/qr.png')} />
				</TouchableOpacity>
			</View>

		</View>
	);

}

/*******/
/* APP */
/*******/

export default function App() {
	return (
		<Navbar screenOptions={{headerShown: false}} />
	);
}

/*************/
/* LOGINHOME */
/*************/

function LoginHome(props) {

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;

	return (

		<View style={loginStyles.LoginContainer}>

			<View style={loginStyles.LogoContainer}>
				<Image 	resizeMode="cover" 
						style={[loginStyles.LoginLogo]} 
						source={require("./assets/images/logo.png")}
				/>
				<BreakLine />
				<BreakLine />
			</View>

			<View style={loginStyles.LoginOptionsContainer}>
				<LoginButton title="LOGIN" buttonStyle="default" style={loginStyles.LoginOptions} />
				<LoginButton title="SIGNUP" style={loginStyles.LoginOptions} 
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
				<LoginButton title="LOGIN" buttonStyle="default" 
					style={loginStyles.SubmitButton} navigate={navigate} navigateScreen={'AppHome'} />
			</View>

		</View>

	);
	
}

/**************/
/* SIGNUPHOME */
/**************/

function SignupHome1(props) {

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;

	return (
		<KeyboardAvoidingView style={loginStyles.LoginContainer}>
			
			<View style={loginStyles.LogoContainer}>
				<Image 	resizeMode="cover" 
						style={[loginStyles.LoginLogo]} 
						source={require("./assets/images/logo.png")}
				/>
				<BreakLine />
				<BreakLine />
			</View>

			<View style={loginStyles.LoginOptionsContainer}>
				<LoginButton 	title="LOGIN" style={loginStyles.LoginOptions}
								navigate={navigate} navigateScreen={'Login'}  />
				<LoginButton title="SIGNUP" buttonStyle="default" style={loginStyles.LoginOptions} />
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
				<LoginButton 	title="CONTINUE" buttonStyle="default" style={loginStyles.SubmitButton}
								navigate={navigate} navigateScreen={'SignupContinuation'} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

function SignupHome2(props) {

	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;

	return (
		<KeyboardAvoidingView style={loginStyles.LoginContainer}>
			
			<View style={loginStyles.LogoContainer}>
				<Image 	resizeMode="cover" 
						style={[loginStyles.LoginLogo]} 
						source={require("./assets/images/logo.png")}
				/>
				<BreakLine />
				<BreakLine />
			</View>

			<View style={loginStyles.LoginOptionsContainer}>
				<LoginButton 	title="LOGIN" style={loginStyles.LoginOptions}
								navigate={navigate} navigateScreen={'Login'}  />
				<LoginButton title="SIGNUP" buttonStyle="default" style={loginStyles.LoginOptions} />
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

			<View style={loginStyles.SubmitContainer}>
				<LoginButton 	title="SIGNUP" buttonStyle="default" style={loginStyles.SubmitButton}
								navigate={navigate} navigateScreen={'UserVerification'} />
			</View>

		</KeyboardAvoidingView>
	);
	
}

/************/
/* CARTHOME */
/************/

function CartHome(props) {
	
	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;
	
	return (
		<ScrollView>

			<HomeBreakLine />
			<HomeBreakLine />
			<HomeBreakLine />
			<HomeBreakLine />

			<SectionHeader style={homeStyles.CartSectionHeader} title="YOUR CART" />
			<HomeBreakLine />

			<CartTable style={homeStyles.CartTable} />

			<View style={homeStyles.CartHomeButtonsList}>
				<CartButton title="ADD ITEMS" style={homeStyles.CartHomeButton} />
				<CartButton title="GENERATE BILL" style={homeStyles.CartHomeButton}
							navigate={navigate} navigateScreen={'Payment'} />
			</View>

			<HomeBreakLine />

		</ScrollView>
	);
}

/************/
/* HOME */
/************/

function Home(props) {
	
	let navigationOptions = {
		header: null
	};

	let { navigate } = props.navigation;
	
	return (
		<View style={homeStyles.HomeContainer}>
			
			<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1]}>
				<Text style={homeStyles.HomeElemText}>Welcome Master!</Text>
				<Text style={homeStyles.HomeElemText}>
					Don't forget to check out our offers!
				</Text>
				<Text style={homeStyles.HomeElemText}>
					Tap the icon below to scan a barcode.
				</Text>
				<TouchableOpacity style={homeStyles.HomeElemImageContainer} onPress={()=>navigate('Barcode')}>
					<Image 	style={homeStyles.HomeElemImage} 
							source={require('./assets/images/qr.png')} />
				</TouchableOpacity>
			</View>

			<View style={homeStyles.HomeElemContainer}>
				<SectionHeader title="CART LIST" style={homeStyles.HomeSectionHeader} />
				<CartTable />
				<CartButton title="CHECKOUT" style={homeStyles.HomeCartButton}
							navigate={navigate} navigateScreen={'Cart'} />
			</View>

		</View>
	);
}

/***********/
/* BARCODE */
/***********/

function BarcodeScreen() {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
  
	useEffect(() => {
	  (async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync();
		setHasPermission(status === 'granted');
	  })();
	}, []);
  
	const handleBarCodeScanned = ({ type, data }) => {
	  setScanned(true);
	  alert(`${data}`); //The type is ean 13
	};
  
	if (hasPermission === null) {
	  return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
	  return <Text>No access to camera</Text>;
	}
  
	return (
	  <View
		style={{
		  flex: 1,
		  flexDirection: 'column',
		  justifyContent: 'flex-end',
		}}>
		<BarCodeScanner
		  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
		  style={StyleSheet.absoluteFillObject}
		/>
  
		{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
	  </View>
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
	},

	HomeContainer: {
		width: '100%',
		flex: 1
	},
	HomeElemContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	HomeElemContainer1: {
		flex: 0.8,
		paddingTop: '7%',
		paddingBottom: '0%',
		paddingLeft: '2%',
		paddingRight: '2%',
	},
	HomeElemText: {
		color: 'black',
		fontSize: 18,
		textAlign: 'center'
	},
	HomeElemImageContainer: {
		marginTop: '7%'
	},
	HomeElemImage: {
		height: 145,
		width: 145,
	},

	HomeSectionHeader: {
		width: '100%'
	},
	HomeCartButton: {
		width: '60%',
		marginTop: '7%'
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
		marginRight: '12%'
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