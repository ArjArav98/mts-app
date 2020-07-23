import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native'

import { showMessage } from "react-native-flash-message";

/**************/
/* SIGNUPHOME */
/**************/

export class SignupScreen extends Component {

	constructor(props) {
		super(props)

		this.state = {
			title: '',
			name: '',
			mobile: ''
		}
	}

	updateStateProperty(property, value) {
		switch(property) {
			case 'title': this.setState({ title: value }); break;
			case 'name': this.setState({ name: value }); break;
			case 'mobile': this.setState({ mobile: value })
		}
	}

	/**************/
	/* SUBMISSION */
	/**************/

	allFieldsAreValid() {
		if(this.state.title.trim().length === 0) return false
		if(!(this.state.title.trim() === 'Mr'
			|| this.state.title.trim() === 'Mrs'
			|| this.state.title.trim() === 'Ms' )) return false
		if(this.state.name.trim().length === 0) return false
		if(this.state.mobile.trim().length != 10) return false

		return true
	}

	showErrorMessageForInvalidFields() {
		if(this.state.title.trim().length === 0) {
			showMessage({
				message: "Error", description: "Title can't be blank.",
				type: "danger", icon: "danger",
			})
			return 
		}
		if(	!(this.state.title.trim() === 'Mr' 
			|| this.state.title.trim() === 'Ms'
			|| this.state.title.trim() === 'Mrs' )) {
			showMessage({
				message: "Error", description: "Invalid title.",
				type: "danger", icon: "danger",
			})
			return
		}
		if(this.state.name.trim().length === 0) {
			showMessage({
				message: "Error", description: "Name can't be blank.",
				type: "danger", icon: "danger",
			})
			return
		}
		if(this.state.mobile.trim().length != 10) {
			showMessage({
				message: "Error", description: "Mobile can't be blank.",
				type: "danger", icon: "danger",
			})
			return
		}
	}

	submitDetails() {
		if(!this.allFieldsAreValid()) {
			this.showErrorMessageForInvalidFields()
			return
		}

		this.props.navigation.navigate('SignupContinuation', { details: this.state })
	}

	render() {

		let { navigate } = this.props.navigation;

		return (
			<KeyboardAvoidingView style={loginStyles.LoginContainer}>
				
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={[loginStyles.LoginLogo]} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
				</View>

				<View style={loginStyles.LoginOptionsContainer}>
					<LoginButton 	title="Login" style={loginStyles.LoginOptions}
									goBack={() => this.props.navigation.goBack()} />
					<LoginButton title="Signup" buttonStyle="default" style={loginStyles.LoginOptions} />
				</View>

				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.LoginFormContainer, loginStyles.SignupFormContainer, {flex: 0.9}]}>
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Title (Mr/Mrs)"
						type="text"
						onChangeText={(text) => this.updateStateProperty('title', text)}
					/>
					<BreakLine /><LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Name"
						type="text"
						onChangeText={(text) => this.updateStateProperty('name', text)}
					/>
					<BreakLine /><LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Mobile Number"
						type="number"
						onChangeText={(text) => this.updateStateProperty('mobile', text)}
					/>
				</View>

				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<LoginButton 	title="Continue" buttonStyle="default" style={loginStyles.SubmitButton}
									onPress={() => this.submitDetails() } />
				</View>

			</KeyboardAvoidingView>
		);
		
	}

}

/**************/
/* SIGNUPCOTD */
/**************/

export class SignupContinuationScreen extends Component {

	constructor(props) {
		super(props)

		this.state = {
			title: this.props.navigation.state.params.details.title,
			name: this.props.navigation.state.params.details.name,
			mobile: this.props.navigation.state.params.details.mobile,

			address: '',
			pincode: '',
			password: '',
		}
	}

	/************/
	/* UPDATION */
	/************/

	updateStateProperty(property, value) {
		switch(property) {
			case 'address': this.setState({ address: value }); break;
			case 'pincode': this.setState({ pincode: value }); break;
			case 'password': this.setState({ password: value })
		}
	}

	/**************/
	/* SUBMISSION */
	/**************/

	allFieldsAreValid() {
		if(!this.state.title) return false
		if(!this.state.name) return false
		if(!this.state.mobile) return false
		if(this.state.pincode.trim().length != 6) return false
		if(!this.state.address) return false
		if(!this.state.password) return false

		return true
	}

	showErrorMessageForInvalidFields() {
		if(this.state.address.trim().length === 0) {
			showMessage({
				message: "Error", description: "Address can't be blank.",
				type: "danger", icon: "danger",
			})
			return
		}
		if(this.state.pincode.trim().length != 6) {
			showMessage({
				message: "Error", description: "Pincode is invalid.",
				type: "danger", icon: "danger",
			})
			return
		}
		if(this.state.password.trim().length != 10) {
			showMessage({
				message: "Error", description: "Password can't be blank.",
				type: "danger", icon: "danger",
			})
			return
		}

		return 'none'
	}

	submitDetails() {
		if(!this.allFieldsAreValid()) {
			this.showErrorMessageForInvalidFields()
			return
		}

		this.props.navigation.navigate('UserVerification', {details: this.state})
	}

	render() {

		let navigationOptions = {
			header: null
		};
	
		let { navigate } = this.props.navigation;


		return (
			<KeyboardAvoidingView style={loginStyles.LoginContainer}>
				
				<View style={loginStyles.LogoContainer}>
					<Image 	resizeMode="cover" 
							style={[loginStyles.LoginLogo]} 
							source={require("../../assets/images/logo.jpg")}
					/>
					<BreakLine />
					<BreakLine />
				</View>
	
				<View style={loginStyles.LoginOptionsContainer}>
					<LoginButton 	title="Login" style={loginStyles.LoginOptions}
									onPress={() => this.props.navigation.popToTop()}  />
					<LoginButton title="Signup" buttonStyle="default" style={loginStyles.LoginOptions} />
				</View>
	
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.LoginFormContainer, loginStyles.SignupFormContainer, {flex: 0.9}]}>
					
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Address"
						type="text"
						onChangeText={(text) => this.updateStateProperty('address', text)}
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Pincode"
						type="pincode"
						onChangeText={(text) => this.updateStateProperty('pincode', text)}
					/>
					<BreakLine />
					<LoginInput 
						style={loginStyles.LoginFormInput}
						placeholder="Password"
						type="password"
						onChangeText={(text) => this.updateStateProperty('password', text)}
					/>
				</View>
	
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />
				<BreakLine />

				<View style={[loginStyles.SubmitContainer, loginStyles.SubmitContainerWidth]}>
					<LoginButton 	title="Register" buttonStyle="default" style={loginStyles.SubmitButton}
									onPress={() => this.submitDetails()} />
				</View> 
			</KeyboardAvoidingView>
		);
		
	}

}