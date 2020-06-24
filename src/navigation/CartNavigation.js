import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import CartScreen from '../screens/CartScreen'
import HomeScreen from '../screens/HomeScreen'
import PaymentScreen from '../screens/PaymentScreen'
import PaymentSuccessScreen from '../screens/PaymentSuccessScreen'
import OrderReceiptScreen from '../screens/OrderReceiptScreen'
import BarcodeScreen from '../screens/BarcodeScreen'
import { Image, View } from 'react-native'

const Navbar = StackNavigator({
	AppHome: {
		screen: HomeScreen
	},
	Cart: {
		screen: CartScreen
	},
	Payment: {
		screen: PaymentScreen
	},
	PaymentSuccess: {
		screen: PaymentSuccessScreen
	},
	OrderReceipt: {
		screen: OrderReceiptScreen
	},
	Barcode: {
		screen: BarcodeScreen
	}
}, {
	initialRouteName: 'AppHome',
	navigationOptions: {
		title: 'MTS',
		headerStyle: {
		  backgroundColor: Colors.appBlueShade,
		},
		headerTintColor: Colors.appInverseShade,
		headerTitleStyle: {
		  fontWeight: 'bold',
		},
		headerRight: 
			<View style={{paddingRight: '10%'}}>
				<Image 
					source={require('../../assets/images/menu.png')}
					style={{ height: 37, width: 62}} />
			</View>
	}
});

export default class CartNavigation extends Component {

	static navigationOptions = {
        header: null
    }

	render() {
		return <Navbar />
	}

}