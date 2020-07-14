import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native'

const axios = require('axios')
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
									goBack={() => this.props.navigation.goBack()}  />
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
									navigate={navigate} navigateScreen={'SignupContinuation'} screenProps={{details: this.state}} />
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

	allFieldsAreFilled() {
		if(!this.state.title) return false
		if(!this.state.name) return false
		if(!this.state.mobile) return false
		if(!this.state.pincode) return false
		if(!this.state.address) return false
		if(!this.state.password) return false

		return true
	}

	submitSignupInfo() {

		if(this.allFieldsAreFilled() !== true) {
			this.showResponseMessage(0)
			return
		}

		let apiUrl = 'http://cnagaraj-001-site1.ftempurl.com/JSonsString.asmx/SignUp?JosnRegistration=' + 
					'%5B%7B%22Title%22%3A%22' + this.state.title + '%22%2C' + 
					'%22UserName%22%3A%22' + this.state.name + '%22%2C' +
					'%22MobileNumber%22%3A%22' + this.state.mobile + '%22%2C' +
					'%22Address%22%3A%22' + this.state.address + '%22%2C' +
					'%22Pincode%22%3A%22' + this.state.pincode + '%22%2C' +
					'%22Password%22%3A%22' + this.state.password + '%22%7D%5D'

		const self = this
		axios.get(apiUrl)
			.then(function (response) {
				if(response.data.includes('200')) {
					self.showResponseMessage(200)
					self.props.navigation.popToTop()
				}
				else if(response.data.includes('#')) self.showResponseMessage(500)
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	showResponseMessage(status) {
		if(status === 200) {
			showMessage({
				message: "Success",
				description: "You have successfully signed up!",
				type: "success",
				icon: "success",
			})
		}
		else if(status === 500) {
			showMessage({
				message: "Sorry!",
				description: "An account with this number already exists. Try again.",
				type: "danger",
				icon: "danger",
			})
		}
		else {
			showMessage({
				message: "Sorry!",
				description: "Please fill all the fields.",
				type: "danger",
				icon: "danger",
			})
		}
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
									navigate={navigate} navigateScreen={'Signup'}  />
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
									onPress={() => this.submitSignupInfo()} />
				</View> 
			</KeyboardAvoidingView>
		);
		
	}

}