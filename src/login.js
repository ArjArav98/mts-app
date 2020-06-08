import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TextInput, View } from 'react-native';

/**************/
/* COMPONENTS */
/**************/

/* This is the Login Button (both default and inverse) component. */
export function LoginButton(props) {

	let containerStyle = 	(props.buttonStyle === "default")? 
							[styles.LoginButtonContainer, props.style] : 
							[styles.LoginButtonContainer, styles.InverseLoginButtonContainer, props.style];

	let buttonStyle = 	(props.buttonStyle === "default")?
						[styles.LoginButton, {color: 'white'}] :
						[styles.LoginButton, {color: 'blue'}];
	
	return (
		<View style={containerStyle}>
			<Text style={buttonStyle}>
				{ props.title }
			</Text>
		</View>
	);
}

/* This is the Secondary Login Button component. */
export function SmallLoginButton(props) {
	return (
		<Text style={[styles.SmallLoginButton, props.style]}>
			{ props.title }
		</Text>
	);
}

export function BreakLine(props) {
	return (
		<View style={{marginTop: '2%'}}></View>
	);
}

/* This is the Login Input component. */
export function LoginInput(props) {

	var keyboardType = "default";
	var maxLength = 100;
	var isPassword = false;

	if(props.type === "password") {
		keyboardType = "default";
		maxLength = 50;
		isPassword = true;
	}
	else if(props.type === "number" || props.type === "pincode") {
		keyboardType = "number-pad";
		maxLength = (props.type === "number")? 10 : 6;
		isPassword = false;
	}

	let inputStyles = [styles.LoginInputContainer, props.style];

	return (
		<View style={inputStyles}>
			<TextInput style={styles.LoginInput}
				placeholder={props.placeholder}
				placeholderTextColor="lightblue"
				keyboardType={keyboardType}
				maxLength={maxLength}
				secureTextEntry={isPassword}
			/>
		</View>
	);
}

/**************/
/* STYLESHEET */
/**************/

const styles = StyleSheet.create({
	
	LoginButtonContainer: {
		paddingTop: '2.5%',
		paddingBottom: '2.5%',
		backgroundColor: 'blue',
		color: 'white',
		borderWidth: 3,
		borderColor: 'blue',
		borderRadius: 4,
	},
	LoginButton: {
		textAlign: 'center',
		fontWeight: '800',
		fontSize: 18,
		width: '100%'
	},
	InverseLoginButtonContainer: {
		backgroundColor: 'white',
		color: 'blue'
	},

	SmallLoginButton: {
		color: 'red',
		fontSize: 17,
		textAlign: 'center',
		padding: '4%'
	},

	LoginInputContainer: {
		borderWidth: 3,
		borderColor: 'blue',
		borderRadius: 4,
		padding: '3%'
	},
	LoginInput: {
		color: 'black',
		fontSize: 18,
		width: '60%',
		marginLeft: '5%'
	}

});