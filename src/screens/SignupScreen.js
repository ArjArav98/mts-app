import { LoginInput, LoginButton, SmallLoginButton, BreakLine } from '../login';
import { loginStyles } from '../styles/styles'
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native'

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

	updateStateProperty(property, value) {
		switch(property) {
			case 'address': this.setState({ address: value }); break;
			case 'pincode': this.setState({ pincode: value }); break;
			case 'password': this.setState({ password: value })
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
									onPress={() => console.log(this.state)} />
				</View>
	
			</KeyboardAvoidingView>
		);
		
	}

}