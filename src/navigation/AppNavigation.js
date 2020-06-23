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
					barStyle={{ 
						backgroundColor: 'white',
						shadowColor: '#DDD',
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 2,
					}}
					labeled={false}
					shifting={true}
					>
					<Tab.Screen name="Home" 
								component={CartNavigation}
								options={{
									tabBarLabel: "CartNavigationScreen",
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="home" color={color} size={26} />
									),
								}} />
					<Tab.Screen name="History" 
								component={CartNavigation}
								options={{
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="alert-decagram" color={'#FFD700'} size={26} />
									),
								}} />
					<Tab.Screen name="Account" 
								component={CartNavigation}
								options={{
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="history" color={color} size={26} />
									),
								}} />
					
					<Tab.Screen name="Logout" 
								component={CartNavigation}
								options={{
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="tune" color={color} size={26} />
									),
								}} />
				</Tab.Navigator>
			</NavigationContainer>
		  );
	}

}