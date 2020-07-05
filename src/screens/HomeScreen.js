import React, { Component } from "react";
import { View, Image, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, CartTable, CartButton, HomeBreakLine } from '../home'
import { FontText } from "../components/FontText"
import Colors from "../styles/Colors"

export default class HomeScreen extends Component {

	render() {
	
		let { navigate } = this.props.navigation
		
		return (
			<View style={[homeStyles.HomeContainer, {backgroundColor: Colors.appInverseShade}]}>
				
				<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1, {flex: 0.7}]}>
					<FontText 	style={[homeStyles.HomeElemText]} title="Tap the icon below to scan a barcode."
								fontStyle='light' />
					<TouchableOpacity style={homeStyles.HomeElemImageContainer} onPress={()=>navigate('Barcode')}>
						<Image 	style={homeStyles.HomeElemImage} 
								source={require('../../assets/images/qr.png')} />
					</TouchableOpacity>
				</View>
	
				<View style={homeStyles.HomeElemContainer}>

					<View style={{	width: '100%', flexDirection: 'row', backgroundColor: Colors.appBlueShade,
									paddingVertical: '3%'}}>
						<View style={{flex: 1, paddingLeft: '3%'}}>
							<Image 	source={require('../../assets/images/bell.png')}
									style={{width: 30, height: 30}} />
						</View>
						<FontText 	title='CART LIST' style={{	flex: 1, fontSize: 19, color: 'white',
																textAlign: 'center'}}
									fontStyle='light' />
						<FontText 	title='₹ 430.00' style={{	flex: 1, fontSize: 19, color: 'white',
																textAlign: 'right', paddingRight: '3%'}}
									fontStyle='light' />
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