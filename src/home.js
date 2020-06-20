import React, { Component } from "react"
import { 	Text, StyleSheet, Image,
			View, ScrollView  } from 'react-native'
import { FontText, FontTextInput }from './components/FontText'

/**************/
/* COMPONENTS */
/**************/

export class SectionHeader extends Component {
	
	render() {
		return (
			<View style={[this.styles.SectionHeaderContainer,this.props.style]}>
				<FontText title={this.props.title} style={[this.styles.SectionHeader]} />
			</View>
		);
	}

	styles = StyleSheet.create({
		SectionHeaderContainer: {
			backgroundColor: '#0162DF',
			padding: '4%'
		},
		SectionHeader: {
			width: '100%',
			textAlign: 'center',
			fontSize: 20,
			color: 'white'
		}
	})

}

/* This is the CartTable component. */
export class CartTable extends Component {

	render(){
		return (
		
			<View style={[this.styles.CartTableContainer,this.props.style]}>
				<ScrollView style={{width: '100%'}}>
	
					<View style={this.styles.CartTableRow}>
						<CartTableHeader title="Item Name" />
						<CartTableHeader title="Qty" />
						<CartTableHeader title="Price" />
					</View>
	
					<HomeBreakLine />
	
					<CartTableItem product="Horlicks 500g" price="450" />
					<CartTableItem product="Odomos" price="450" />
	
				</ScrollView>
	
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

/* This is the CartTableHeader component. */
export class CartTableHeader extends Component {
	
	render(){
		return (
			<View style={this.styles.CartTableRowElement}>
				<View style={this.styles.CartTableRowElement}>
					<FontText title={this.props.title} style={[this.styles.CartTableText]} />
				</View>
			</View>
		);
	}
	
	styles=StyleSheet.create({
		CartTableRowElement: {
			flex: 1,
			marginTop: '1%'
		},
		CartTableText: {
			color: 'black',
			fontSize: 20,
			flexShrink: 1,
			width: '100%',
			justifyContent: 'center',
			textAlign: 'center'
		},
	})

}

/* This is the CartTableItem component. */
export class CartTableItem extends Component {

	render() {
		return (
			<View style={[this.styles.CartTableRow,{paddingBottom: '2%'}]}>
				<View style={this.styles.CartTableRow}>
					<View style={this.styles.CartTableRowElement}>
						<FontText title={this.props.product} style={[this.styles.CartTableText]} fontStyle={'light'} />
					</View>
					<View style={this.styles.CartTableRowQtyElement}>
						<View style={this.styles.CartTableImgContainer}>
							<Image style={this.styles.CartTableImg}
									source={require('../assets/images/add.png')} />
						</View>
						<View style={[this.styles.CartTableImgContainer,{flex:0.3}]}>
							<FontText title={0} style={[this.styles.CartTableText]} fontStyle={'light'} />
						</View>
						<View style={this.styles.CartTableImgContainer}>
							<Image style={this.styles.CartTableImg}
									source={require('../assets/images/minus.png')} />
						</View>
					</View>
					<View style={this.styles.CartTableRowElement}>
						<FontText title={"Rs "+this.props.price} style={[this.styles.CartTableText]} fontStyle={'light'} />
					</View>
				</View>
			</View>
		);
	}

	styles = StyleSheet.create({
		CartTableRow: {
			width: '100%',
			flexDirection: 'row'
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
	})
	
}

/* This is the CartButton Component. */
export class CartButton extends Component {

	render() {
		let navigateFunction = (this.props.navigate)? ()=>this.props.navigate(this.props.navigateScreen) : null ;
	
		return (
			<View style={[this.styles.CartButtonContainer,this.props.style]}>
				<FontText style={[this.styles.CartButton]} onPress={navigateFunction} title={this.props.title} />
			</View>
		);
	}

	styles = StyleSheet.create({
		CartButtonContainer: {
			backgroundColor: '#0162DF',
			borderWidth: 4,
			borderColor: '#0162DF',
			borderRadius: 4,
			padding: '1%'
		},
		CartButton: {
			width: '100%',
			textAlign: 'center',
			color: 'white',
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