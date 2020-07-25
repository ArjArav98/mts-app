import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Audio } from 'expo-av'

import Colors from "../styles/Colors";
import { FontText } from "../components/FontText";

const playProductScannedBeepSound = async () => {
	const soundObject = new Audio.Sound()
	await soundObject.loadAsync(require('../../assets/sounds/beep.mp3'))
	await soundObject.playAsync()
}

export default function BarcodeScreen(props) {
	const [hasPermission, setHasPermission] = useState(null);
	const [hasScanned, setScanned] = useState(true)

	useEffect(() => {
		(async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = async ({ type, data }) => {
		setScanned(true)
		await playProductScannedBeepSound()
		props.navigation.navigate('AppHome', { itemId: data })
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
				onBarCodeScanned={hasScanned? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			/>

			<View style={[StyleSheet.absoluteFillObject, {flex: 1}]}>
				<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center'}}>
					<FontText 
						title='Please place the barcode inside the box and tap screen to scan!'
						fontStyle='light'
						style={{width: '60%', marginLeft: '20%', borderRadius: 4,
								textAlign: 'center', fontSize: 20, backgroundColor: 'white', padding: '2%'}} />
				</View>
				<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0,5)', flexDirection: 'row'}}>
					<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)'}}></View >
					<View style={{flex: 6}}></View>
					<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)'}}></View>
				</View>
				<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center'}}>
					<TouchableOpacity onPress={() => setScanned(false)}>
						<FontText 
								title='SCAN'
								fontStyle='light'
								style={{width: '60%', marginLeft: '20%', borderRadius: 4,
										textAlign: 'center', fontSize: 20, backgroundColor: 'white', padding: '2%'}} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}