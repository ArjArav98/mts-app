import React, { Component, useState } from "react"
import { 	StyleSheet, Image,
			View, ScrollView, Touchable, TouchableOpacity  } from 'react-native'
import { FontText}from './components/FontText'
import Colors from './styles/Colors'

/**************/
/* COMPONENTS */
/**************/

export class SectionHeader extends Component {
	
	render() {
		return (
			<View style={[this.styles.SectionHeaderContainer,this.props.style]}>
				<FontText title={this.props.title} style={[this.styles.SectionHeader]} fontStyle='light' />
			</View>
		);
	}

	styles = StyleSheet.create({
		SectionHeaderContainer: {
			backgroundColor: Colors.appBlueShade,
			padding: '4%'
		},
		SectionHeader: {
			width: '100%',
			textAlign: 'center',
			fontSize: 19,
			color: Colors.appInverseShade
		}
	})

}

/* This is the CartTable component. */
export class CartTable extends Component {

	render(){
		return (
		
			<View style={[this.styles.CartTableContainer,this.props.style]}>

				<HomeBreakLine />

				<CartTableItem product="Horlicks 500g" price="450" />
				<CartTableItem product="Odomos" price="450" />
				<CartTableItem product="Odomos" price="450" />
				<CartTableItem product="Odomos" price="450" />
	
			</View>
	
		)
	}

	styles = StyleSheet.create({
		CartTableContainer: {
			width: '100%',
		},
		CartTableRow: {
			width: '100%',
			flexDirection: 'row',
			paddingBottom: '3%'
		}
	}) 

}

/* This is the CartTableItem component. */
export function CartTableItem(props) {

	const styles = StyleSheet.create({
		CartTableRow: {
			width: '100%',
			flexDirection: 'row'
		},
		CartTableRowElement: {
			flex: 1
		},
		CartTableRowQtyElement: {
			flex: 0.7,
			flexDirection: 'row',
		},
		CartTableText: {
			color: 'black',
			fontSize: 17,
			flex: 1,
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
	})

	return (
		<View style={[styles.CartTableRow,{paddingBottom: '2%'}]}>
			<View style={styles.CartTableRow}>
				<View style={styles.CartTableRowElement}>
					<FontText title={props.product} style={[styles.CartTableText]} fontStyle={'light'} />
				</View>
				<View style={[styles.CartTableRowQtyElement]}>
					<View style={styles.CartTableImgContainer}>
						<TouchableOpacity onPress={() => {
							props.onQuantityChange(1)
						}}>
							<Image style={styles.CartTableImg}
									source={require('../assets/images/add.png')} />
						</TouchableOpacity>
					</View>
					<View style={[styles.CartTableImgContainer,{flex:0.5}]}>
						<FontText title={props.qty} style={[styles.CartTableText]} fontStyle={'light'} />
					</View>
					<View style={styles.CartTableImgContainer}>
						<TouchableOpacity onPress={() => {
							(props.qty > 0)? props.onQuantityChange(-1) : {}
						}}>
							<Image style={styles.CartTableImg}
									source={require('../assets/images/minus.png')} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.CartTableRowElement}>
					<FontText 	title={"₹ " + (props.rate * props.qty)} 
								style={[styles.CartTableText]} fontStyle={'light'} />
				</View>
			</View>
		</View>
	);
	
}

export class CartTableTextItem extends Component {

	render() {

		let title = this.props.title
		let qty = this.props.qty
		let amount = this.props.amount
		let fontStyle = this.props.fontStyle
		let style = this.props.style

		return (
			<View style={{width: '100%', flex: 1, flexDirection: 'row'}}>
				<FontText 	title={title} fontStyle={fontStyle}
							style={[{flex: 1, textAlign: 'center'}].concat(style)} />
				<FontText 	title={qty} fontStyle={fontStyle} 
							style={[{flex: 1, textAlign: 'center'}].concat(style)} />
				<FontText 	title={amount} fontStyle={fontStyle} 
							style={[{flex: 1, textAlign: 'center'}].concat(style)} />
			</View>
		)
	}

}

/* This is the CartButton Component. */
export class CartButton extends Component {

	render() {
		let navigateFunction = (this.props.navigate)? ()=>this.props.navigate(this.props.navigateScreen) : null ;
	
		return (
			<TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
				<View style={this.styles.CartButtonContainer}>
					<FontText 	style={[this.styles.CartButton]} onPress={navigateFunction} 
								title={this.props.title} fontStyle='light' />
				</View>
			</TouchableOpacity>
		);
	}

	styles = StyleSheet.create({
		CartButtonContainer: {
			width: '100%',
			backgroundColor: Colors.appBlueShade,
			borderWidth: 4,
			borderColor: Colors.appBlueShade,
			borderRadius: 4,
			padding: '1%'
		},
		CartButton: {
			width: '100%',
			textAlign: 'center',
			color: Colors.appInverseShade,
			fontSize: 18,
		}
	})

}

/* This is the HomeBreakLine component.	 */
export class HomeBreakLine extends Component {
	render() {
		return (
			<View style={{marginTop: '2%'}}></View>
		);
	}
}