import React, { Component } from "react";
import { View, ScrollView } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, CartTable, CartButton, HomeBreakLine } from '../home'
import Colors from '../styles/Colors'

export default class CartScreen extends Component {

	render() {
	
		let { navigate } = this.props.navigation
		
		return (
			<ScrollView style={{backgroundColor: Colors.appInverseShade}}>
	
				<SectionHeader style={homeStyles.CartSectionHeader} title="YOUR CART" />
				<HomeBreakLine />
	
				<CartTable style={homeStyles.CartTable} />
	
				<View style={homeStyles.CartHomeButtonsList}>
					<CartButton title="Add Items" style={homeStyles.CartHomeButton}
								navigate={navigate} navigateScreen={'AppHome'} />
					<CartButton title="Generate Bill" style={homeStyles.CartHomeButton}
								navigate={navigate} navigateScreen={'Payment'} />
				</View>
	
				<HomeBreakLine />
	
			</ScrollView>
		);
	}	

}