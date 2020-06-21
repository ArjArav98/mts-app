import React, { Component } from "react";
import { View, ScrollView } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, CartTable, CartButton, HomeBreakLine } from '../home'
import Colors from '../styles/Colors'

export default class CartScreen extends Component {

	render() {
	
		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation
		
		return (
			<ScrollView style={{backgroundColor: Colors.appInverseShade}}>
	
				<HomeBreakLine />
				<HomeBreakLine />
				<HomeBreakLine />
				<HomeBreakLine />
	
				<SectionHeader style={homeStyles.CartSectionHeader} title="YOUR CART" />
				<HomeBreakLine />
	
				<CartTable style={homeStyles.CartTable} />
	
				<View style={homeStyles.CartHomeButtonsList}>
					<CartButton title="ADD ITEMS" style={homeStyles.CartHomeButton}
								navigate={navigate} navigateScreen={'AppHome'} />
					<CartButton title="GENERATE BILL" style={homeStyles.CartHomeButton}
								navigate={navigate} navigateScreen={'Payment'} />
				</View>
	
				<HomeBreakLine />
	
			</ScrollView>
		);
	}	

}