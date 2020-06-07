import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LoginButton, SmallLoginButton, LoginInput } from "./src/login";

export default function App() {

	return (
		<View>
			<LoginButton title="Hello World" buttonStyle="normal1" />
			<SmallLoginButton title="Forgot Password?" />
			<LoginInput placeholder="Username" type="pincode"/>
		</View>
	);
	
}