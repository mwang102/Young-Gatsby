import React from 'react'
import styled from "styled-components";
import Row from './Row'

const Board = styled.div`
	display:flex;
	flex:2;
	flex-direction:column;
	min-width: 500px;
	min-height: 500px;
`;


export default class BattleShipBoard extends React.Component{

	shouldComponentUpdate(nextProps){
		return nextProps.endTurn == true ? true : false
	}
	render(){

		let table = this.props.table.map((row, index)=>{
			let key = Math.floor((Math.random() * 10000) + 1);
			return <Row  animate={this.props.animate} editTable={this.props.editTable} turn={this.props.turn} rowNumber={index} key={key} data={row}/>
		})

		return (
			<Board> {table} </Board>
		)
	}

}

