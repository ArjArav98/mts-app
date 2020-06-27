import { StyleSheet } from 'react-native'

export const loginStyles = StyleSheet.create({
	LoginContainer: {
		width: '100%',
		flexDirection: 'column',
		flex: 1,
		backgroundColor: 'white'
	},

	LogoContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	LoginLogo: {
		width: 140,
		height: 140
	},

	LoginOptionsContainer: {
		flex: 0.4,
		width: '90%',
		marginLeft: '5%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	LoginOptions: {
		width: '42%',
		marginLeft: '1.25%',
		marginRight: '1.25%'
	},

	LoginFormContainer: {
		flex: 0.8,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	LoginFormInput: {
		width: '86.5%',
	},

	LoginOtherOptions: {
		flex: 0.4,
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
	},
	OtherOptions: {
		marginRight: '8%'
	},

	SubmitContainer: {
		flex: 0.8,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '90%',
		marginLeft: '5%'
	},
	SubmitContainerWidth: {
		width: '40%',
		marginLeft: '30%'
	},
	SubmitButton: {
		width: '100%',
		paddingTop: '6%',
		paddingBottom: '6%'
	},

	SignupFormContainer: {
		flex: 1.6
	}
});

export const homeStyles = StyleSheet.create({
	CartHomeContainer: {
		width: '100%'
	},

	CartTable: {
		marginBottom: '8%'
	},

	CartHomeButtonsList: {
		width: '100%',
		flexDirection: 'row'
	},
	CartHomeButton: {
		flex: 1,
		marginRight: '2%',
		marginLeft: '2%'
	},

	HomeContainer: {
		width: '100%',
		flex: 1
	},
	HomeElemContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	HomeElemContainer1: {
		flex: 0.9,
	},
	HomeElemText: {
		color: 'black',
		fontSize: 18,
		textAlign: 'center'
	},
	HomeElemImageContainer: {
		marginTop: '7%'
	},
	HomeElemImage: {
		height: 125,
		width: 125,
	},

	HomeSectionHeader: {
		width: '100%'
	},
	HomeCartButton: {
		width: '60%',
		marginTop: '7%',
		marginLeft: '20%'
	}
});