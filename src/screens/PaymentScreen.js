import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader } from '../home'
import { FontText } from '../components/FontText'

export default class PaymentScreen extends Component {

	render() {

		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;
		
		return (
			<View style={homeStyles.HomeContainer}>
				
				<SectionHeader title="YOUR BILL" style={{width: '100%', marginTop: '7%'}}/>
				<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1]}>
					<FontText 	style={[homeStyles.HomeElemText]} 
								title="Get rid of the long queue!"
								fontStyle='light' />
					<FontText 	style={[homeStyles.HomeElemText]} 
								title="Please show this code at the billing counter to make your payment."
								fontStyle='light' />
					<TouchableOpacity 	style={homeStyles.HomeElemImageContainer}
										onPress={()=>navigate('PaymentSuccess')}>
						<Image 	style={homeStyles.HomeElemImage} 
								source={require('../../assets/images/qr.png')} />
					</TouchableOpacity>
				</View>
	
			</View>
		);
	
	}

}