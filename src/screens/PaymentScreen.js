import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader } from '../home'

export default class PaymentScreen extends Component {

	render() {

		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;
		
		return (
			<View style={homeStyles.HomeContainer}>
				
				<SectionHeader title="YOUR BILL" style={{width: '100%'}}/>
				<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1]}>
					<Text style={homeStyles.HomeElemText}>Get rid of the long queue!</Text>
					<Text style={homeStyles.HomeElemText}>
						Please show this code at the billing counter to make your payment.
					</Text>
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