import React, { Component } from "react";
import { View, ScrollView, Image, Text } from 'react-native'
import { homeStyles } from '../styles/styles'
import { CartTableItem, CartButton, HomeBreakLine } from '../home'
import Colors from '../styles/Colors'
import { FontText } from '../components/FontText'

export default class CartScreen extends Component {

	constructor(props) {
		super(props)

		this.state = {
			cart: { items: [] }
		}
	}

	componentDidMount() {
		this.setState({ cart: this.props.navigation.state.params.cart })
	}

	getCartJSX() {
		if(this.state.cart.items.length === 0) {
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

	render() {
	
		let { navigate } = this.props.navigation
		
		return (
			<View style={{width: '100%', flex: 1, backgroundColor: 'white'}}>

				<View style={{	width: '100%', flexDirection: 'row', backgroundColor: Colors.appBlueShade,
								paddingVertical: '3%', alignItems: 'center'}}>
					<View style={{flex: 1, paddingLeft: '4%'}}>
						<Image 	source={require('../../assets/images/wallet.png')}
								style={{width: 36, height: 26}} />
					</View>
					<FontText 	title='₹ 430.00' style={{	flex: 2, fontSize: 19, color: 'white',
															textAlign: 'left'}}
								fontStyle='light' />
					<FontText 	title='Qty: 7' style={{	flex: 2, fontSize: 19, color: 'white',
															textAlign: 'right', paddingRight: '3%'}}
								fontStyle='light' />
				</View>

				<View style={{width: '100%', flexDirection: 'row', backgroundColor: 'white', paddingVertical: '1%'}}>
					<FontText title='Description' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
					<FontText title='Qty' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
					<FontText title='Price' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
				</View>

				<ScrollView style={{backgroundColor: Colors.appInverseShade, height: 180}}>

				{ this.getCartJSX() }

				</ScrollView>

				<View style={homeStyles.CartHomeButtonsList}>
					<CartButton title="Add Items" style={homeStyles.CartHomeButton}
								navigate={navigate} navigateScreen={'AppHome'} />
					<CartButton title="Generate Bill" style={homeStyles.CartHomeButton}
								navigate={navigate} navigateScreen={'Payment'} />
				</View>

			</View>
			
		);
	}	

}