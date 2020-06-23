import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, HomeBreakLine } from '../home'
import { LoginInput, LoginButton } from '../login'
import { FontText } from "../components/FontText"
import Colors from '../styles/Colors'

export default class PaymentSuccessScreen extends Component {

	render() {
	
		let { navigate } = this.props.navigation;
		
		return (
			<View style={[homeStyles.HomeContainer, {backgroundColor: Colors.appInverseShade}]}>
				
				<SectionHeader title="PAYMENT SUCCESSFUL" style={{width: '100%'}}/>
				<HomeBreakLine /><HomeBreakLine /><HomeBreakLine /><HomeBreakLine /><HomeBreakLine />
				<View style={[homeStyles.HomeElemContainer,{flex: 0.5, paddingLeft: '10%', paddingRight: '10%'}]}>
					<FontText 	style={[homeStyles.HomeElemText]} 
								title="Thanks for shopping with us, Customer Name!" />
					<FontText 	style={[homeStyles.HomeElemText]} 
								title="Your total bill is Rs 465." />
								<FontText 	style={[homeStyles.HomeElemText]} 
								title="The number of items is 5." />
				</View>
				<View style={[homeStyles.HomeElemContainer, {justifyContent: 'flex-start'}]}>
					<View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
						<Image 	source={require('../../assets/images/star.png')} 
								style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
						<Image 	source={require('../../assets/images/star.png')} 
								style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
						<Image 	source={require('../../assets/images/star.png')} 
								style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
						<Image 	source={require('../../assets/images/star.png')} 
								style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
						<Image 	source={require('../../assets/images/star.png')} 
								style={{width: 60, height: 60, marginLeft: '1%', marginRight: '1%'}} />
					</View>
					<LoginInput placeholder="Your Comments" style={{width: '80%', marginTop: '5%'}} />
					<LoginButton 	title="Submit" buttonStyle="default" style={{width: '80%', marginTop: '5%'}}
									navigate={navigate} navigateScreen={'OrderReceipt'} />
				</View>
	
			</View>
		);
	
	}

}