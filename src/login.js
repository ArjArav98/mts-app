import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TextInput, View } from 'react-native';

/* This is the Login Button (both default and inverse) component. */
export function LoginButton(props) {

	let buttonStyle = (props.buttonStyle === "default")? 
						styles.LoginButton : 
						[styles.LoginButton, styles.InverseLoginButton];

	return (
		<Text style={buttonStyle}>
			{ props.title }
		</Text>
	);
}

/* This is the Secondary Login Button component. */
export function SmallLoginButton(props) {
	return (
		<Text style={styles.SmallLoginButton}>
			{ props.title }
		</Text>
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

	return (
		<View style={styles.LoginInputContainer}>
			<TextInput style={styles.LoginInput}
				placeholder={props.placeholder}
				placeholderTextColor="black"
				keyboardType={keyboardType}
				maxLength={maxLength}
				secureTextEntry={isPassword}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	
	LoginButton: {
		padding: '4%',
		borderWidth: 4,
		borderColor: 'blue',
		backgroundColor: 'blue',
		color: 'white',
		textAlign: 'center',
		fontWeight: '800',
		fontSize: 18
	},
	InverseLoginButton: {
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
		borderWidth: 1,
		borderColor: 'grey',
		padding: '4%'
	},
	LoginInput: {
		color: 'black',
		fontSize: 18,
		fontWeight: '500',
		width: '90%',
		marginLeft: '5%'
	}

});