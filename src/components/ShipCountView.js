import React from 'react'
import styled from "styled-components";

const ShipContainer = styled.div`
	display:flex;
	flex-direction:column;
	flex:1;
	align-items:center;
	justify-content:center;
	margin-right:50px;
`
const PlayerText = styled.h1`
	color: #1AAB8A;
`

const ShipSelected = styled.div`
	background: radial-gradient(yellow 30%, white, white); 
	display:flex;
	align-items:center;
	justify-content:center;
`
export default class ShipCountView extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			currentSelected: undefined
		}

		this.handleSelect = this.handleSelect.bind(this)
	}

	handleSelect(){

	}

	render(){
		return (
			<ShipContainer>
		  		<PlayerText> Ship Count</PlayerText>
		  		<ShipSelected >
		  			<img width={'100%'} src={require('../images/oil-tanker.svg')}/>
		  		</ShipSelected>
		  		<ShipSelected>
		  			<img width={'70%'}src={require('../images/speed-boat.svg')}/>
		  		</ShipSelected>
		  		<ShipSelected>
		  			<img width={'60%'} src={require('../images/big-canoe.svg')}/> 
		  		</ShipSelected>
		  	</ShipContainer>
		)
	}

}
