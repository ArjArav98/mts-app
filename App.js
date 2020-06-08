import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { LoginButton, SmallLoginButton, LoginInput, BreakLine } from "./src/login";

export default function App() {

	return (
		<View style={styles.LoginContainer}>
			
			<View style={styles.LogoContainer}>
				<Image 	resizeMode="cover" 
						style={styles.LoginLogo} 
						source={require("./assets/images/logo.png")}
				/>
				<BreakLine />
				<BreakLine />
			</View>

			<View style={styles.LoginOptionsContainer}>
				<LoginButton title="LOGIN" buttonStyle="default" style={styles.LoginOptions} />
				<LoginButton title="SIGNUP" style={styles.LoginOptions} />
			</View>

			<View style={styles.LoginFormContainer}>
				<LoginInput 
					style={styles.LoginFormInput}
					placeholder="Mobile Number"
					type="number"
				/>
				<BreakLine />
				<LoginInput 
					style={styles.LoginFormInput}
					placeholder="Password"
					type="password"
				/>
			</View>

			<View style={styles.LoginOtherOptions}>
				<SmallLoginButton title="Forgot Password" style={styles.OtherOptions} />
				<SmallLoginButton title="Login with OTP"/>
			</View>

			<View style={styles.SubmitContainer}>
			<LoginButton title="LOGIN" buttonStyle="default" style={styles.SubmitButton} />
			</View>

		</View>
	);
	
}

const styles = StyleSheet.create({
	LoginContainer: {
		width: '100%',
		flexDirection: 'column',
		flex: 1
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
		width: '40%',
		marginRight: '3%'
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
		flex: 0.5,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	SubmitButton: {
		width: '70%',
	}
});