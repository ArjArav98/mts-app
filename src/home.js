import React, { useState, useEffect } from "react";
import { 	Text, StyleSheet, TextInput, Image,
			View, ScrollView, KeyboardAvoidingView  } from 'react-native';

/**************/
/* COMPONENTS */
/**************/

/* This is the Section Header component. */
export function SectionHeader(props) {

	return (
		<View style={[homeStyles.SectionHeaderContainer,props.style]}>
			<Text style={homeStyles.SectionHeader}>
				{props.title}
			</Text>
		</View>
	);
}

/* This is the CartTable component. */
export function CartTable(props) {

	return (
		
		<View style={[homeStyles.CartTableContainer,props.style]}>
			<ScrollView style={{width: '100%'}}>

				<CartTableHeader />

				<HomeBreakLine />

				<CartTableItem product="Horlicks 500g" price="450" />
				<CartTableItem product="Odomos" price="450" />
				<CartTableItem product="Horlicks 500g" price="450" />
				<CartTableItem product="Colgate Toothpaste" price="450" />
				<CartTableItem product="Horlicks 500g" price="450" />
				<CartTableItem product="Lays 100g" price="450" />
				<CartTableItem product="Horlicks 500g" price="450" />
				<CartTableItem product="Vikko Vajradanti 100kg" price="450" />

			</ScrollView>

		</View>

	);

}

export function CartTableHeader(){
	
	return (
		<View style={homeStyles.CartTableRow}>
			<View style={homeStyles.CartTableRowElement}>
				<Text style={homeStyles.CartTableText}>Item Name</Text>
			</View>
			<View style={homeStyles.CartTableRowElement}>
				<Text style={homeStyles.CartTableText}>Qty</Text>
			</View>
			<View style={homeStyles.CartTableRowElement}>
				<Text style={homeStyles.CartTableText}>Price</Text>
			</View>
		</View>
	);
	
}

export function CartTableItem(props) {
	return (
		<View style={homeStyles.CartTableRow}>
			<View style={homeStyles.CartTableRowElement}>
				<Text style={homeStyles.CartTableText}>{props.product}</Text>
			</View>
			<View style={homeStyles.CartTableRowQtyElement}>
				<View style={homeStyles.CartTableImgContainer}>
					<Image style={homeStyles.CartTableImg}
							source={require('../assets/images/add.png')} />
				</View>
				<View style={[homeStyles.CartTableImgContainer,{flex:0.3}]}>
					<Text style={homeStyles.CartTableText}>0</Text>
				</View>
				<View style={homeStyles.CartTableImgContainer}>
					<Image style={homeStyles.CartTableImg}
							source={require('../assets/images/minus.png')} />
				</View>
			</View>
			<View style={homeStyles.CartTableRowElement}>
				<Text style={homeStyles.CartTableText}>Rs {props.price}</Text>
			</View>
		</View>
	);
}

/* This is the CartButton component. */
export function CartButton(props) {
	return (
		<View style={[homeStyles.CartButtonContainer,props.style]}>
			<Text style={homeStyles.CartButton}>{props.title}</Text>
		</View>
	);
}

/* This is the BreakLine component. */
export function HomeBreakLine(props) {
	return (
		<View style={{marginTop: '2%'}}></View>
	);
}

/**************/
/* STYLESHEET */
/**************/

const homeStyles = StyleSheet.create({
	SectionHeaderContainer: {
		backgroundColor: 'blue',
		padding: '4%'
	},
	SectionHeader: {
		width: '100%',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
	},

	CartTableContainer: {
		width: '100%',
	},
	CartTableRow: {
		width: '100%',
		flexDirection: 'row',
		paddingBottom: '3%'
	},
	CartTableRowElement: {
		flex: 1
	},
	CartTableRowQtyElement: {
		flex: 0.7,
		flexDirection: 'row'
	},
	CartTableText: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		flexShrink: 1,
		width: '100%',
		justifyContent: 'center',
		textAlign: 'center'
	},
	CartTableImgContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	CartTableImg: {
		width: 20,
		height: 20
	},

	CartButtonContainer: {
		backgroundColor: 'blue',
		borderWidth: 4,
		borderColor: 'blue',
		borderRadius: 4,
		padding: '1%'
	},
	CartButton: {
		width: '100%',
		textAlign: 'center',
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold'
	}
});