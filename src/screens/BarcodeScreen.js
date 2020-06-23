import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function BarcodeScreen() {
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