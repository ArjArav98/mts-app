import React, { Component } from "react";
import { View, Image, Text, Button, TouchableOpacity, ScrollView, Keyboard, BackHandler } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import * as SQLite from 'expo-sqlite';
const axios = require('axios')

import { homeStyles } from '../styles/styles'
import { CartButton, HomeBreakLine, CartTableItem } from '../home'
import { FontText } from "../components/FontText"
import Colors from "../styles/Colors"

export default class HomeScreen extends Component {

	constructor(props) {
		super(props)

		this.state = {
			comingFromBarcode: false,

			cart: {
				items: []
			}
		}

		BackHandler.addEventListener(
			"hardwareBackPress",
			() => true
		);
	}

	async componentDidMount() {
		//We check if we have come from the Barcode Screen.
		try {
			const itemId = this.props.navigation.state.params.itemId
			this.loadCartToState()
			const cart = this.state.cart
			let itemData = await this.getProductData(itemId)

			this.setState({ comingFromBarcode: true })
			
			if(this.productIsNotInDatabase(itemData)) {
				showMessage({
					message: "Error", description: "This product is not present in the database.",
					type: "danger", icon: "danger",
				})
			}
			else {
				itemData = this.extractProductInformation(itemData)

				if(this.cartContains(itemId, cart) === false) {
					cart.items.push({
						id: itemId,
						sku: itemData.prod_code,
						name: itemData.prod_name, 
						qty: 1,
						rate: itemData.prod_rate
					})
					this.setCart(cart)

					showMessage({
						message: "Success", description: "Added to cart!",
						type: "success", icon: "success",
					})
				}
				else {
					showMessage({
						message: "Warning", description: "This product is already present in cart.",
						type: "warning", icon: "warning",
					})
				}
			}
			
			this.setState({ cart: cart })
		} catch(error) {
			//console.log(error)
		}
	}

	/************************/
	/* NAVIGATION FUNCTIONS */
	/************************/

	navigateToBarcode() {
		if(this.state.comingFromBarcode === true) this.props.navigation.goBack()
		else this.props.navigation.navigate('Barcode')
	}

	/*********************/
	/* PRODUCT FUNCTIONS */
	/*********************/

	async getProductData(productId) {
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

	productIsNotInDatabase(productData) {
		if(productData.includes("not been initialised")) return true
		else if(productData.includes("does not exist")) return true
		return false
	}

	extractProductInformation(response) {
		const start = response.search(/\[/)
		const end = response.search(/]/)
	  
		return JSON.parse(response.substring(start,end+1))
	}

	/******************/
	/* CART FUNCTIONS */
	/******************/

	loadCartToState() {
		const sqlDb = SQLite.openDatabase('cart.db')

		const errorFunction = (error) => {}
		const successFunction = () => {}

		const txErrorFunction = (tx, error) => console.log()

		sqlDb.transaction((tx) => {
			tx.executeSql("select * from cart", [], (_, { rows }) =>
				this.setState({ cart: JSON.parse(rows['_array'][0]['cartItems']) })	
			);
		}, errorFunction, successFunction)
	}

	setCart(cart) {
		const sqlDb = SQLite.openDatabase('cart.db')

		const errorFunction = (error) => {}
		const successFunction = () => {}

		const txErrorFunction = (tx, error) => console.log()
		const txSuccessFunction = (tx, rs) => console.log()

		sqlDb.transaction((tx) => {
			tx.executeSql('DELETE FROM cart;', 
			[], txSuccessFunction, txErrorFunction)
		}, errorFunction, successFunction)

		sqlDb.transaction((tx) => {
			tx.executeSql('INSERT INTO cart VALUES (?);', 
			[JSON.stringify(cart)], txSuccessFunction, txErrorFunction)
		}, errorFunction, successFunction)
	}

	cartContains(id, cart) {
		return cart.items.some((item) => item.id === id)
	}

	getCartJSX() {
		return this.state.cart.items.map((cartItem) => {
			return (
				<CartTableItem 	product={cartItem.name} key={cartItem.id}
								rate={cartItem.rate} qty="1"  />
			)
		})
	}

	/**********************/
	/* CHECKOUT FUNCTIONS */
	/**********************/

	cartContainsNoItems(cart) {
		if(cart.items.length > 0) return false
		return true
	}

	navigateToCheckout(cart) {
		if(this.cartContainsNoItems(cart)) {
			showMessage({
				message: "Warning", description: "Your cart has 0 items.",
				type: "warning", icon: "warning",
			})
			return
		}

		this.props.navigation.navigate('Cart')
	}

	render() {
	
		let { navigate } = this.props.navigation
		Keyboard.dismiss()
		
		return (
			<View style={[homeStyles.HomeContainer, {backgroundColor: Colors.appInverseShade}]}>
				
				<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1, {flex: 0.7}]}>
					<FontText 	style={[homeStyles.HomeElemText]} title="Tap the icon below to scan a barcode."
								fontStyle='light' />
					<TouchableOpacity style={homeStyles.HomeElemImageContainer} onPress={() => this.navigateToBarcode()}>
						<Image 	style={homeStyles.HomeElemImage} 
								source={require('../../assets/images/qr.png')} />
					</TouchableOpacity>
				</View>

				<View style={homeStyles.HomeElemContainer}>

					<View style={{	width: '100%', flexDirection: 'row', backgroundColor: Colors.appBlueShade,
									paddingVertical: '2%'}}>
						<View style={{flex: 1, paddingLeft: '3%'}}>
							<Image 	source={require('../../assets/images/bell.png')}
									style={{width: 26, height: 26}} />
						</View>
						<FontText 	title='Cart List' style={{	flex: 1, fontSize: 19, color: 'white',
																textAlign: 'center'}}
									fontStyle='light' />
						<FontText 	title='₹ 430.00' style={{	flex: 1, fontSize: 19, color: 'white',
																textAlign: 'right', paddingRight: '3%'}}
									fontStyle='light' />
					</View>

					<View style={{width: '100%', flexDirection: 'row', backgroundColor: 'white', paddingVertical: '1%'}}>
						<FontText title='Description' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
						<FontText title='Qty' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
						<FontText title='Price' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
					</View>

					<ScrollView style={{width: '100%', marginTop: '2%'}}>
						
						<View style={{width: '100%'}}>
							<HomeBreakLine />
							{ this.getCartJSX() }
						</View>

						<CartButton title="Checkout" style={[homeStyles.HomeCartButton, 
															{width: '35%', marginLeft: '32.5%'}]}
									onPress={() => this.navigateToCheckout(this.state.cart)} />
					</ScrollView>
					<HomeBreakLine />
				</View>
	
			</View>
		);
	}

}