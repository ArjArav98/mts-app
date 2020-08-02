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
			dummy: true,

			cart: {
				items: []
			}
		}

		BackHandler.addEventListener( "hardwareBackPress", () => true )
		this.loadCartToState()
	}

	async componentDidMount() {
		//We check if we have come from the Barcode Screen.

		try {
			const newCart = this.props.navigation.state.params.cart
			const cart = this.state.cart

			for(let i=0; i<newCart.items.length; i+=1) {
				const item = newCart.items[i]

				if(this.cartContains(item.prod_code)) {
					this.updateCartItemQuantity(item.prod_code, item.prod_qty)
					continue
				}

				cart.items.push({
					id: item.prod_code,
					sku: item.prod_code,
					name: item.prod_name, 
					qty: item.prod_qty,
					rate: item.prod_rate
				})	
			}
			
			this.setState({ cart: cart, comingFromBarcode: true })
			this.setCart(cart)
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

	updateCartItemQuantity(id, qty) {
		if(this.cartContainsNoItems(this.state.cart)) return

		let cart = this.state.cart
		for(let iter=0; iter<cart.items.length; iter+=1) {
			if(cart.items[iter].id === id) {
				cart.items[iter].qty += qty
				break
			}
		}

		this.setState({ cart: cart })
	}

	cartContains(id) {
		if(this.cartContainsNoItems(this.state.cart)) return false
		return this.state.cart.items.some((item) => item.id === id)
	}

	getCartAmount() {
		if(this.cartContainsNoItems(this.state.cart)) return 0
		
		let total = 0
		for(let iter=0; iter<this.state.cart.items.length; iter+=1) {
			const item = this.state.cart.items[iter]
			total += (item.qty*item.rate)
		}

		return total
	}

	getCartJSX() {
		if(this.cartContainsNoItems(this.state.cart)) {
			return <Text style={{textAlign: 'center', fontSize: 16}}>
						This cart contains no items.
					</Text>
		}
		return this.state.cart.items.map((cartItem) => {
			return (
				<CartTableItem 	
					product={cartItem.name} key={cartItem.id}
					rate={cartItem.rate} qty={cartItem.qty + ''}
					onQuantityChange={(qty) => this.updateCartItemQuantity(cartItem.id, qty)}  />
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
		
		console.log(this.state.cart)
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
						<FontText 	title={'₹ ' + this.getCartAmount()} 
									style={{	flex: 1, fontSize: 19, color: 'white',
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