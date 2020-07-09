import React, { Component } from "react";
import { View, ScrollView, Image } from 'react-native'
import { homeStyles } from '../styles/styles'
import { SectionHeader, CartTable, CartButton, HomeBreakLine } from '../home'
import Colors from '../styles/Colors'
import { FontText } from '../components/FontText'

export default class CartScreen extends Component {

	render() {
	
		let { navigate } = this.props.navigation
		
		return (
			<View style={{width: '100%', flex: 1, backgroundColor: 'white'}}>

				<View style={{	width: '100%', flexDirection: 'row', backgroundColor: Colors.appBlueShade,
								paddingVertical: '3%', alignItems: 'center'}}>
					<View style={{flex: 1, paddingLeft: '4%'}}>
						<Image 	source={require('../../assets/images/wallet.png')}
								style={{width: 36, height: 26}} />
					</View>
					<FontText 	title='₹ 430.00' style={{	flex: 2, fontSize: 19, color: 'white',
															textAlign: 'left'}}
								fontStyle='light' />
					<FontText 	title='Qty: 7' style={{	flex: 2, fontSize: 19, color: 'white',
															textAlign: 'right', paddingRight: '3%'}}
								fontStyle='light' />
				</View>

				<View style={{width: '100%', flexDirection: 'row', backgroundColor: 'white', paddingVertical: '1%'}}>
					<FontText title='Description' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
					<FontText title='Qty' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
					<FontText title='Price' style={{flex: 1, fontSize: 18, textAlign: 'center'}} />
				</View>

				<ScrollView style={{backgroundColor: Colors.appInverseShade, height: 200}}>

					<HomeBreakLine />

					<CartTable style={homeStyles.CartTable} />

					<HomeBreakLine />

				</ScrollView>

				<View style={homeStyles.CartHomeButtonsList}>
					<CartButton title="Add Items" style={homeStyles.CartHomeButton}
								navigate={navigate} navigateScreen={'AppHome'} />
					<CartButton title="Generate Bill" style={homeStyles.CartHomeButton}
								navigate={navigate} navigateScreen={'Payment'} />
				</View>

			</View>
			
		);
	}	

}