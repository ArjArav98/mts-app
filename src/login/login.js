import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from 'react-native';

export function LoginButton(props) {

	let buttonStyle = (props.buttonStyle === "default")? 
							styles.CustomButton : 
							[styles.CustomButton, styles.InverseCustomButton];

	return (
		<Text style={buttonStyle}>
			{ props.title }
		</Text>	
	);
}

const styles = StyleSheet.create({
	
	CustomButton: {
		padding: '4%',
		borderWidth: 4,
		borderColor: 'blue',
		backgroundColor: 'blue',
		color: 'white',
		textAlign: 'center',
		fontWeight: '500',
		fontSize: 18
	},
	InverseCustomButton: {
		backgroundColor: 'white',
		color: 'blue'
	}

});