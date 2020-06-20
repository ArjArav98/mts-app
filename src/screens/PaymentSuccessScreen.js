import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader } from '../home'
import { LoginInput, LoginButton } from '../login'
import { FontText } from "../components/FontText";

export default class PaymentSuccessScreen extends Component {

	render() {

		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;
		
		return (
			<View style={homeStyles.HomeContainer}>
				
				<SectionHeader title="PAYMENT SUCCESSFUL" style={{width: '100%', marginTop: '7%'}}/>
				<View style={[homeStyles.HomeElemContainer,{flex: 0.5}]}>
					<FontText 	style={[homeStyles.HomeElemText]} 
								title="Thanks for shopping with us!"
								fontStyle='light' />
					<FontText 	style={[homeStyles.HomeElemText]} 
								title="Your total bill is Rs 465."
								fontStyle='light' />
								<FontText 	style={[homeStyles.HomeElemText]} 
								title="The number of items is 5."
								fontStyle='light' />
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