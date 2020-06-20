import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, CartTable, CartButton, HomeBreakLine } from '../home';

export default class HomeScreen extends Component {

	render() {
	
		let navigationOptions = {
			header: null
		}
	
		let { navigate } = this.props.navigation
		
		return (
			<View style={homeStyles.HomeContainer}>
				
				<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1]}>
					<Text style={homeStyles.HomeElemText}>Welcome Master!</Text>
					<Text style={homeStyles.HomeElemText}>
						Don't forget to check out our offers!
					</Text>
					<Text style={homeStyles.HomeElemText}>
						Tap the icon below to scan a barcode.
					</Text>
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