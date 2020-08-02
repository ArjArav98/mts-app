import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { showMessage } from 'react-native-flash-message'
import { Audio } from 'expo-av'
const axios = require('axios')

import Colors from "../styles/Colors";
import { FontText } from "../components/FontText";

/*******************/
/* AUDIO FUNCTIONS */
/*******************/

const playProductScannedBeepSound = async () => {
	const soundObject = new Audio.Sound()
	await soundObject.loadAsync(require('../../assets/sounds/beep.mp3'))
	await soundObject.playAsync()
}

/*********************/
/* PRODUCT FUNCTIONS */
/*********************/

const getProductData =  async (productId) => {
	let apiUrl = 'http://cnagaraj-001-site1.ftempurl.com/JSonsString.asmx/Scan2Product?jsonstr=' + 
				'%5B%7B%22mobileno%22%3A%228939227281%22%2C' + 
				'%22barcodedetails%22%3A%22' + productId + '%22%2C' + 
				'%22qty%22%3A%221%22%7D%5D'

	const productData = await axios.get(apiUrl)
							.then(function (response) {
								return response.data
							})
							.catch(function (error) {
								console.log(error);
							});
	
	return productData
}

const productIsNotInDatabase = (productData) => {
	if(productData.includes("not been initialised")) return true
	else if(productData.includes("does not exist")) return true
	return false
}

const extractProductInformation = (response) => {
	const start = response.search(/\[/)
	const end = response.search(/]/)
	
	return JSON.parse(response.substring(start,end+1))
}

/******************/
/* CART FUNCTIONS */
/******************/

const cartItems = { items: [] } 

const productIsAlreadyInCart = (cart, prodCode) => {
	return cart.items.some((item) => prodCode === item.prod_code)
}

/******************/
/* BARCODE SCREEN */
/******************/

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
		const productData = await getProductData(data)

		if(productIsNotInDatabase(productData)) {
			showMessage({
				message: "Error", description: "This product is not present in the database.",
				type: "danger", icon: "danger",
			})

			return
		}
		
		if(productIsAlreadyInCart(cartItems, '1')) {
			for(let i=0; i<cartItems.items.length; i+=1) {
				cartItems.items[i].prod_qty += 1
			}

			await playProductScannedBeepSound()
			showMessage({
				message: "Success", description: "Product added to cart.",
				type: "success", icon: "success",
			})

			return
		}

		cartItems.items.push(extractProductInformation(productData))
		await playProductScannedBeepSound()
		showMessage({
			message: "Success", description: "Product added to cart.",
			type: "success", icon: "success",
		})
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
					<TouchableOpacity onPress={() => props.navigation.navigate('AppHome', { cart: cartItems})}>
						<FontText 
								title='GO BACK'
								fontStyle='light'
								style={{width: '60%', marginLeft: '20%', borderRadius: 4,
										textAlign: 'center', fontSize: 20, backgroundColor: 'white', 
										padding: '2%', marginTop: '4%'}} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}