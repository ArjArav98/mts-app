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
		width: 100,
		height: 100
	},

	LoginOptionsContainer: {
		flex: 0.4,
		width: '100%',
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
		marginRight: '12%'
	},

	SubmitContainer: {
		flex: 0.8,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	SubmitButton: {
		width: '70%',
	},

	SignupFormContainer: {
		flex: 2
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
		flex: 0.8,
		paddingTop: '7%',
		paddingBottom: '0%',
		paddingLeft: '2%',
		paddingRight: '2%',
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
		height: 145,
		width: 145,
	},

	HomeSectionHeader: {
		width: '100%'
	},
	HomeCartButton: {
		width: '60%',
		marginTop: '7%'
	}
});