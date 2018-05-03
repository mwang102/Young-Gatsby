import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import Title from '../components/Title'
import Form from '../components/Form'
import BattleShipBoard from '../components/BattleShipBoard'


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const FormContainer = styled.div`
  flex:1;
  margin: 0 auto;
  text-align: center;

`
const Layout = styled.div`
  display:flex
`
class IndexPage extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			board1: undefined,
			board2: undefined,
			turn:1,
			tempBoard: undefined,
			animate:true,
			endTurn: true
		}

		this.changePlayer = this.changePlayer.bind(this)
		this.createTable = this.createTable.bind(this)
		this.editTable = this.editTable.bind(this)
		this.logTables = this.logTables.bind(this)
	}

	logTables(){
		console.log(this.state)
	}

	editTable(event){

		const { tempBoard, turn, board1, board2 } = this.state

		if(event.data != -1 && event.data != 2){

			let temp = tempBoard == undefined ? copy(turn ==  1 ? board1 : board2) : tempBoard


			function copy(o) {
			   var output, v, key;
			   output = Array.isArray(o) ? [] : {};
			   for (key in o) {
			       v = o[key];
			       output[key] = (typeof v === "object") ? copy(v) : v;
			   }
			   return output;
			}

			temp[event.row][event.column] = event.data == 1 ? 2 : -1

			this.setState({
				endTurn:false,
				tempBoard: temp,
			})
		/*
			this.setState({
				tempBoard: tempBoard,
				animate:false
			})
			*/
		}
		
	
	}

	changePlayer(){
		const { turn, tempBoard } = this.state

		let currentPlayer = turn == 1 ? 1: 2,
			nextPlayer = turn == 1 ? 2 : 1

			console.log(currentPlayer, nextPlayer)

		this.setState({
			turn: nextPlayer,
			animate:true,
			endTurn: true,
			['board' + currentPlayer]: tempBoard == undefined ? [this.state['board' + currentPlayer]] : tempBoard,
			tempBoard: this.state['board' + nextPlayer],
			//this.state.tempBoard == undefined ? 
			//this.state.tempBoard 

		})
		
	}

	createTable(event){
		let rows = event.target.value[0],
			columns = event.target.value[2]

		if(rows < 10 && columns < 10 ){
			let board1 = [],
				board2 = []

			for(let i = 0; i<rows; i++){
				let row = []
				for(let j = 0; j<columns; j++){
					if(j == 1){
						row.push(0)
					}else
					row.push(1)
				}
				board1.push(row)
				board2.push(row)
			}
			this.setState({
				board1:board1,
				board2:board2,
				animate:true,
				tempBoard: undefined,
				endTurn: true
			})
		}

	}

	render(){
		const { turn, board2, board1, animate, endTurn} = this.state,
			  playerTable = turn == 1 ? board1 : board2
		
		return (
		  <Layout>
		  	<ShipContainer>
		  		<PlayerText> Ship Count</PlayerText>
		  		<div> Ship 1 </div>
		  		<div> Ship 2 </div>
		  		<div> Ship 3 </div>
		  	</ShipContainer>
		  	{board1 !== undefined && <BattleShipBoard endTurn={endTurn} animate={animate} editTable={this.editTable} turn={turn} table={playerTable}/>}
		  	<FormContainer>
		  		<PlayerText> Current Player: {this.state.turn} </PlayerText>
			    <Form createTable={this.createTable}/>
			    <div>
			    <Button onClick={this.changePlayer}> End Turn </Button>
			    </div>
			    <div>
			    <Button onClick={this.logTables}> Log Tables </Button>
			    </div>
			    <Link to="/page-2/">Go to page 2</Link>
		    </FormContainer>
		  </Layout>
		)
	}

}

export default IndexPage

const ShipContainer = styled.div`
	flex:1
`

const PlayerText = styled.h1`
	color: #1AAB8A;
`
const Button = styled.button`
  background:#1AAB8A;
  color:#fff;
  border:none;
  position:relative;
  height:150x;
  width:200px;
  font-size:1.3em;
  padding:0.2em 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  margin:5px;

  :hover{
  	background:#fff;
  	color:#1AAB8A;
  }

  :before{
	  content:'';
	  position:absolute;
	  top:0;
	  right:0;
	  height:2px;
	  width:0;
	  background: #1AAB8A;
	  transition:400ms ease all;  	
  }

  :after{
  	  content:'';
	  position:absolute;
	  top:0;
	  right:0;
	  height:2px;
	  width:0;
	  background: #1AAB8A;
	  transition:400ms ease all;
	  right:inherit;
	  top:inherit;
	  left:0;
	  bottom:0;
  }

  :hover:before{
  	width:100%;
  	transition:800ms ease all;
  }

  :hover:after{
  	width:100%;
  	transition:800ms ease all;
  }
`;










