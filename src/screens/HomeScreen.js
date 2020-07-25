import React, { Component } from "react";
import { View, Image, Text, Button, TouchableOpacity, ScrollView, Keyboard, BackHandler } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import { homeStyles } from '../styles/styles'
import { SectionHeader, CartTable, CartButton, HomeBreakLine } from '../home'
import { FontText } from "../components/FontText"
import Colors from "../styles/Colors"

export default class HomeScreen extends Component {

	constructor(props) {
		super(props)

		this.state = {
			barcodeNavigation: 1
		}

		BackHandler.addEventListener(
			"hardwareBackPress",
			() => true
		);
	}

	async componentDidMount() {
		console.log(await this.getCart())

		//We check if we have come from the Barcode Screen.
		try {
			this.setState({ barcodeNavigation: this.props.navigation.goBack() })

			const itemId = this.props.navigation.state.params.itemId
			const cart = await this.getCart()

			if(this.cartContains(itemId, cart) === false) 
				cart.items.push({id: itemId, name: 'Ponni Rice', qty: 1})
			
			console.log(cart)
		} catch(error) {
			//We do nothing here.
		}
	}

	/******************/
	/* CART FUNCTIONS */
	/******************/

	async getCart () {
		try {
			const value = await AsyncStorage.getItem('cart')
			if(value !== null) return JSON.parse(value)
		} catch(e) {
			return null
		}
	}

	cartContains(id, cart) {
		return cart.items.some((item) => item.id === id)
	}

	render() {
	
		let { navigate } = this.props.navigation
		Keyboard.dismiss()
		
		return (
			<View style={[homeStyles.HomeContainer, {backgroundColor: Colors.appInverseShade}]}>
				
				<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1, {flex: 0.7}]}>
					<FontText 	style={[homeStyles.HomeElemText]} title="Tap the icon below to scan a barcode."
								fontStyle='light' />
					<TouchableOpacity style={homeStyles.HomeElemImageContainer} onPress={(this.state.barcodeNavigation === 1)? () => this.props.navigation.navigate('Barcode') : () => this.props.navigation.goBack()}>
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
						<CartTable />
						<CartButton title="Checkout" style={[homeStyles.HomeCartButton, 
															{width: '35%', marginLeft: '32.5%'}]}
									navigate={navigate} navigateScreen={'Cart'} />
					</ScrollView>
					<HomeBreakLine />
				</View>
	
			</View>
		);
	}

}