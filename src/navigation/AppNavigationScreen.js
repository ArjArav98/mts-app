import React, { Component } from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';


const Tab = createMaterialBottomTabNavigator();

export default class AppNavigationScreen extends Component {

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
								component={HomeScreen}
								options={{
									tabBarLabel: "Home",
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="home" color={color} size={28} />
									),
								}} />
					<Tab.Screen name="History" 
								component={HomeScreen}
								options={{
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="account-clock" color={color} size={28} />
									),
								}} />
					<Tab.Screen name="Account" 
								component={HomeScreen}
								options={{
									tabBarIcon: ({ color }) => (
										<MaterialCommunityIcons name="cogs" color={color} size={28} />
									),
								}} />
					
					<Tab.Screen name="Logout" 
								component={HomeScreen}
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