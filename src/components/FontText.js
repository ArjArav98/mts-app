import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import { useFonts, NunitoSans_900Black, NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans'

export function FontText(props) {
	
	let [fontsLoaded] = useFonts({ NunitoSans_900Black, NunitoSans_400Regular })
	let fontFam = (props.fontStyle === 'light')? 'NunitoSans_400Regular' : 'NunitoSans_900Black'

	if(!fontsLoaded) return (<Text></Text>)
	else {
		return (
			<Text style={[{fontFamily: fontFam}].concat(props.style)} onPress={props.onPress}>
				{props.title}
			</Text>
		)
	}

}

export function FontTextInput(props) {
	
	let [fontsLoaded] = useFonts({ NunitoSans_400Regular });

	if(!fontsLoaded) return (<Text></Text>)
	else {
		return (
			<TextInput 	style={props.style.concat({fontFamily: 'NunitoSans_400Regular'})} 
					onPress={props.onPress}
					placeholder={props.placeholder}
					placeholderTextColor={props.placeholderTextColor}
					keyboardType={props.keyboardType}
					maxLength={props.maxLength}
					secureTextEntry={props.secureTextEntry}
					>
				{props.title}
			</TextInput>
		)
	}

}