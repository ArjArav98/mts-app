import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import CartScreen from '../screens/CartScreen'
import HomeScreen from '../screens/HomeScreen'
import PaymentScreen from '../screens/PaymentScreen'
import PaymentSuccessScreen from '../screens/PaymentSuccessScreen'

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
	}
}, {
	initialRouteName: 'AppHome',
	headerMode: 'none'
});

export default class CartNavigation extends Component {

	render() {
		return <Navbar screenOptions={{headerShown: false}} />
	}

}