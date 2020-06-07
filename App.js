import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LoginButton } from "./src/login/login";

export default function App() {

	return (
		<View>
			<LoginButton title="Hello World" buttonStyle="normal1" />
		</View>
	);
	
}