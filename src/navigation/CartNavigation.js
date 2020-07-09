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
		headerStyle: {
		  backgroundColor: Colors.appBlueShade,
		},
		headerTintColor: Colors.appInverseShade,
		headerLeft: <Image 	source={require('../../assets/images/mts-header.png')}
							style={{width: 120, height: 40}} />,
		headerTitleStyle: {
		  fontWeight: 'bold',
		},
		headerRight: 
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
				<Image 	source={require('../../assets/images/user.png')}
						style={{width: 65, height: 37}} />
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