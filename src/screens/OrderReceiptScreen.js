import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, HomeBreakLine, CartTableHeader, CartTableTextItem, CartTableItem, CartButton, CartTable } from '../home'
import { FontText } from '../components/FontText'
import Colors from '../styles/Colors'

export default class OrderReceiptScreen extends React.Component {

	render() {
	
		let { navigate } = this.props.navigation;
		
		return (
			<ScrollView style={[homeStyles.HomeContainer, {backgroundColor: Colors.appInverseShade}]}>
				
				<SectionHeader title="Order Receipt" style={{width: '100%'}}/>

				<View style={{width: '100%', marginTop: '2%'}}>
					<CartTable />
				</View>

				<View style={{width: '100%', marginTop: '8%'}}>
					<CartTableTextItem 	title='' qty='Grand Total' amount='₹ 1200'
										style={[{fontSize: 18}]} />
				</View>

				<CartButton title="Home" style={{width: '40%', marginTop: '8%', marginLeft: '30%'}}
							navigate={navigate} navigateScreen={'AppHome'} />
				
	
			</ScrollView>
		);
	
	}

}