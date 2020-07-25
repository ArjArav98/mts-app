import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import CartNavigation from './CartNavigation'
import LogoutScreen from '../screens/LogoutScreen'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: '#e91e63' }}
	  >

    	<Tab.Screen
			name="Home"
			component={CartNavigation}
			options={{
			tabBarLabel: 'Home',
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name="home" color={color} size={size} />
			), }}
      	/>

		<Tab.Screen
			name="History"
			component={CartNavigation}
			options={{
			tabBarLabel: 'History',
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name="history" color={color} size={size} />
			), }}
      	/>

		<Tab.Screen
			name="Logout"
			component={CartNavigation}
			options={{
			tabBarLabel: 'Logout',
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name="logout" color={color} size={size} />
			), }}
      	/>

    </Tab.Navigator>
  );
}

export default class AppNavigation extends React.Component {
  
	constructor(props) {
		super(props)
	}

	static navigationOptions = {
		header: null,
	};
	
	render() {
		return (
			<NavigationContainer>
				<MyTabs />
			</NavigationContainer>
		);
	}

}
