import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import Colors from "../styles/Colors";
import { FontText } from "../components/FontText";

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
		<View style={{ 	flex: 1, flexDirection: 'column', 
						justifyContent: 'flex-end', backgroundColor: Colors.appInverseShade}}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			/>

			<View style={[StyleSheet.absoluteFillObject, {flex: 1}]}>
				<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center'}}>
					<FontText 
						title='Please place the barcode inside the box to scan!'
						fontStyle='light'
						style={{width: '60%', marginLeft: '20%', borderRadius: 4,
								textAlign: 'center', fontSize: 20, backgroundColor: 'white', padding: '2%'}} />
				</View>
				<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0,5)', flexDirection: 'row'}}>
					<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)'}}></View >
					<View style={{flex: 6}}></View>
					<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)'}}></View>
				</View>
				<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)'}}></View>
			</View>
	
			<Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
		</View>
	);
}