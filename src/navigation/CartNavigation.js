import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import CartScreen from '../screens/CartScreen'
import HomeScreen from '../screens/HomeScreen'
import PaymentScreen from '../screens/PaymentScreen'
import PaymentSuccessScreen from '../screens/PaymentSuccessScreen'
import OrderReceiptScreen from '../screens/OrderReceiptScreen'
import BarcodeScreen from '../screens/BarcodeScreen'

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
		}
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