import React, { Component } from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native'

import CartNavigation from './CartNavigation'

const Tab = createMaterialBottomTabNavigator();

export default class AppNavigation extends Component {

	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator
					activeColor="#0162DF"
					inactiveColor="gray"
					barStyle={{ backgroundColor: 'white' }}
					labeled={false}
					shifting={true}
					>
					<Tab.Screen name="Home" 
								component={CartNavigation}
								options={{
									tabBarLabel: "CartNavigationScreen",
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="home" color={color} size={28} />
									),
								}} />
					<Tab.Screen name="History" 
								component={CartNavigation}
								options={{
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="account-clock" color={color} size={28} />
									),
								}} />
					<Tab.Screen name="Account" 
								component={CartNavigation}
								options={{
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="cogs" color={color} size={28} />
									),
								}} />
					
					<Tab.Screen name="Logout" 
								component={CartNavigation}
								options={{
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="logout" color={color} size={28} />
									),
								}} />
				</Tab.Navigator>
			</NavigationContainer>
		  );
	}

}