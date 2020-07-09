import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader } from '../home'
import { FontText } from '../components/FontText'
import Colors from '../styles/Colors'

export default class PaymentScreen extends Component {

	render() {
	
		let { navigate } = this.props.navigation;
		
		return (
			<View style={[homeStyles.HomeContainer, {backgroundColor: Colors.appInverseShade}]}>
				
				<SectionHeader title="Your Bill" style={{width: '100%'}}/>
				<View style={[homeStyles.HomeElemContainer,homeStyles.HomeElemContainer1]}>
				<FontText 	style={[homeStyles.HomeElemText, {fontSize: 30, marginBottom: '5%'}]} 
								title="Hi Customer Name!" />
					<FontText 	style={[homeStyles.HomeElemText]} 
								title="Get rid of the long queue!"
								fontStyle='light' />
					<TouchableOpacity 	style={homeStyles.HomeElemImageContainer}
										onPress={()=>navigate('PaymentSuccess')}>
						<Image 	style={homeStyles.HomeElemImage} 
								source={require('../../assets/images/qr.png')} />
					</TouchableOpacity>
					<FontText 	style={[homeStyles.HomeElemText, {marginTop: '5%'}]} 
								title="Please show this QR code at the billing counter to make your payment."
								fontStyle='light' />
				</View>
	
			</View>
		);
	
	}

}