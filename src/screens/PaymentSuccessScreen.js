import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader } from '../home'

export default class PaymentSuccessScreen extends Component {

	render() {

		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;
		
		return (
			<View style={homeStyles.HomeContainer}>
				
				<SectionHeader title="PAYMENT SUCCESSFUL" style={{width: '100%'}}/>
				<View style={[homeStyles.HomeElemContainer,{flex: 0.5}]}>
					<Text style={homeStyles.HomeElemText}>Thanks for shopping with us!</Text>
					<Text style={homeStyles.HomeElemText}>
						Your total bill amount is Rs 465. The number of items is 5.
					</Text>
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
					<LoginButton 	title="SUBMIT" buttonStyle="default" style={{width: '80%', marginTop: '5%'}}
									 navigate={navigate} navigateScreen={'AppHome'} />
				</View>
	
			</View>
		);
	
	}

}