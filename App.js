import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
	return (
		<View style={{padding: '20%'}}>
			<Text style={styles.CustomButton}>Button</Text>	
		</View>
	);
}

const styles = StyleSheet.create({
	CustomButton: {
		width: '80%',
		padding: '3%',
		backgroundColor: 'blue',
		color: 'white',
		textAlign: 'center',
		fontFamily: 'Roboto-Black',
		fontWeight: '500'
	}
});