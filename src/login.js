import React, { Component, useState, useEffect } from "react"
import { Text, StyleSheet, TextInput, View } from 'react-native'
import { FontText, FontTextInput }from './components/FontText'

/**************/
/* COMPONENTS */
/**************/

/* This is the Login Button (both default and inverse) component. */
export class LoginButton extends Component {

	render() {

		let containerStyle = 	(this.props.buttonStyle === "default")? 
							[this.styles.LoginButtonContainer, this.props.style] : 
							[this.styles.LoginButtonContainer, this.styles.InverseLoginButtonContainer, this.props.style];

		let buttonStyle = 	(this.props.buttonStyle === "default")?
							[this.styles.LoginButton, {color: 'white' }] :
							[this.styles.LoginButton, {color: '#0162DF'}];
		
		let navigateFunction = (this.props.navigate)? ()=>this.props.navigate(this.props.navigateScreen) : null ;

		return (
			<View style={containerStyle}>
				<FontText title={this.props.title} style={buttonStyle} onPress={navigateFunction} />
			</View>
		)
		
	}

	styles = StyleSheet.create({
		LoginButtonContainer: {
			paddingTop: '2.5%',
			paddingBottom: '2.5%',
			backgroundColor: '#0162DF',
			color: 'white',
			borderWidth: 2,
			borderColor: '#0162DF',
			borderRadius: 4,
		},
		LoginButton: {
			textAlign: 'center',
			fontSize: 18,
			width: '100%'
		},
		InverseLoginButtonContainer: {
			backgroundColor: 'white',
			color: '#0162DF'
		}
	})
}

/* This is the Secondary Login Button component. */
export class SmallLoginButton extends Component {
	
	render() {

		let navigateFunction = (this.props.navigate)? ()=>this.props.navigate(this.props.navigateScreen) : null ;

		return (
			<FontText 	title={this.props.title} style={[this.styles.SmallLoginButton, this.props.style]}
						onPress={navigateFunction} />
		);
	}
	
	styles = StyleSheet.create({
		SmallLoginButton: {
			color: 'red',
			fontSize: 17,
			textAlign: 'center',
			padding: '4%'
		}
	})

}

export class BreakLine extends Component {
	render() {
		return (
			<View style={{marginTop: '2%'}}></View>
		);
	}
}

export class LoginInput extends Component {

	render() {
		var keyboardType = "default";
		var maxLength = 100;
		var isPassword = false;

		if(this.props.type === "password") {
			keyboardType = "default";
			maxLength = 50;
			isPassword = true;
		}
		else if(this.props.type === "number" || this.props.type === "pincode") {
			keyboardType = "number-pad";
			maxLength = (this.props.type === "number")? 10 : 6;
			isPassword = false;
		}

		let inputStyles = [this.styles.LoginInputContainer, this.props.style];

		return (
			<View style={inputStyles}>
				<FontTextInput style={[this.styles.LoginInput]}
					placeholder={this.props.placeholder}
					placeholderTextColor="lightblue"
					keyboardType={keyboardType}
					maxLength={maxLength}
					secureTextEntry={isPassword}
				/>
			</View>
		);
	}

	styles = StyleSheet.create({
		LoginInputContainer: {
			borderWidth: 2,
			borderColor: '#0162DF',
			backgroundColor: 'white',
			borderRadius: 4,
			padding: '3%'
		},
		LoginInput: {
			color: 'black',
			backgroundColor: 'white',
			fontSize: 18,
			fontWeight: 'bold',
			width: '60%',
			marginLeft: '5%'
		}
	})

}