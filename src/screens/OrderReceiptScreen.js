import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, HomeBreakLine, CartTableHeader, CartTableTextItem, CartTableItem, CartButton } from '../home'
import { FontText } from '../components/FontText'
import Colors from '../styles/Colors'

export default class OrderReceiptScreen extends Component {

	render() {

		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;
		
		return (
			<ScrollView style={[homeStyles.HomeContainer, {backgroundColor: Colors.appInverseShade}]}>
				
				<SectionHeader title="ORDER RECEIPT" style={{width: '100%', marginTop: '7%'}}/>

				<View style={{width: '100%', flex: 1, flexDirection: 'row', marginTop: '2%'}}>
					<CartTableTextItem title="Item" qty="Qty" amount="Amount" />
				</View>

				<View style={{width: '100%', marginTop: '2%'}}>
					<CartTableTextItem title='Horlicks 500g' qty='2' amount='₹ 230' fontStyle='light' />
					<CartTableTextItem title='Nataraj Geometry Box' qty='1' amount='₹ 95' fontStyle='light' />
					<CartTableTextItem title='Horlicks 500g' qty='2' amount='₹ 230' fontStyle='light' />
					<CartTableTextItem title='Horlicks 500g' qty='2' amount='₹ 230' fontStyle='light' />
					<CartTableTextItem title='Nataraj Geometry Box' qty='1' amount='₹ 95' fontStyle='light' />
					<CartTableTextItem title='Horlicks 500g' qty='2' amount='₹ 230' fontStyle='light' />
					<CartTableTextItem title='Nataraj Geometry Box' qty='1' amount='₹ 95' fontStyle='light' />
				</View>

				<View style={{width: '100%', marginTop: '8%'}}>
					<CartTableTextItem title='' qty='Grand Total' amount='₹ 1200' />
				</View>

				<CartButton title="HOME" style={{width: '40%', marginTop: '8%', marginLeft: '30%'}}
							navigate={navigate} navigateScreen={'AppHome'} />
				
	
			</ScrollView>
		);
	
	}

}