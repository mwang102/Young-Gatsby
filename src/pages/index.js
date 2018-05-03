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

class IndexPage extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			table1: undefined,
			table2: undefined,
			turn:1,
			animate:true,
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
	
		if(event.data != -1 && event.data != 2){
			let newTable = copy(this.state.turn ==  1 ? this.state.table1 : this.state.table2)


			function copy(o) {
			   var output, v, key;
			   output = Array.isArray(o) ? [] : {};
			   for (key in o) {
			       v = o[key];
			       output[key] = (typeof v === "object") ? copy(v) : v;
			   }
			   return output;
			}

			newTable[event.row][event.column] = event.data == 1 ? 2 : -1
		/*
			this.setState({
				['table' + this.state.turn]: newTable,
				animate:false
			})
			*/
		}
		
	
	}

	changePlayer(){
		let nextPlayer = this.state.turn == 1 ? 2 : 1

		this.setState({
			turn: nextPlayer,
			animate:true
		})
	}

	createTable(event){
		let rows = event.target.value[0],
			columns = event.target.value[2]

		if(rows < 10 && columns < 10 ){
			let table1 = [],
				table2 = []
			for(let i = 0; i<rows; i++){
				let row = []
				for(let j = 0; j<columns; j++){
					if(j == 1){
						row.push(0)
					}else
					row.push(1)
				}
				table1.push(row)
				table2.push(row)
			}
			this.setState({
				table1:table1,
				table2:table2,
				animate:true
			})
		}

	}

	render(){
		const { turn, table2, table1, animate} = this.state,
			  playerTable = turn == 1 ? table1 : table2
			 
			  console.log(table1, table2)
		return (
		  <div>
		    <Form createTable={this.createTable}/>
		    <Button onClick={this.changePlayer}> Change Player </Button>
		    <Button onClick={this.logTables}> Log Tables </Button>
		    <h1> Current Player: {this.state.turn} </h1>
		    {table1 !== undefined && <BattleShipBoard animate={animate} editTable={this.editTable} turn={turn} table={playerTable}/>}
		    <Wrapper>
			  <Title/>
			</Wrapper>
		    <Link to="/page-2/">Go to page 2</Link>
		  </div>
		)
	}

}

export default IndexPage

const Button = styled.button`
  background:#1AAB8A;
  color:#fff;
  border:none;
  position:relative;
  height:100%;
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










