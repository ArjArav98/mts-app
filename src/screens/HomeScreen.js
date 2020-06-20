import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, CartTable, CartButton, HomeBreakLine } from '../home';
import { FontText } from "../components/FontText";

export default class HomeScreen extends Component {

	render() {
	
		let navigationOptions = {
			header: null
		}
	
		let { navigate } = this.props.navigation
		
		return (
			<View style={homeStyles.HomeContainer}>
				
				<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1]}>
					<FontText 	style={[homeStyles.HomeElemText]} title="Welcome, Master!"
								fontStyle='light' />
					<FontText 	style={[homeStyles.HomeElemText]} title="Don't forget to check out our offers!"
								fontStyle='light' />
					<FontText 	style={[homeStyles.HomeElemText]} title="Tap the icon below to scan a barcode."
								fontStyle='light' />
					<TouchableOpacity style={homeStyles.HomeElemImageContainer} onPress={()=>navigate('Barcode')}>
						<Image 	style={homeStyles.HomeElemImage} 
								source={require('../../assets/images/qr.png')} />
					</TouchableOpacity>
				</View>
	
				<View style={homeStyles.HomeElemContainer}>
					<SectionHeader title="CART LIST" style={homeStyles.HomeSectionHeader} />
					<CartTable />
					<CartButton title="CHECKOUT" style={homeStyles.HomeCartButton}
								navigate={navigate} navigateScreen={'Cart'} />
				</View>
	
			</View>
		);
	}

}