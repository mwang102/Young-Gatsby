import React from 'react'
import styled from "styled-components";

export default class Form extends React.Component{
	constructor(props){
		super(props)

		this.state ={
			rows:4,
			columns:4
		}

		this.handleColumns = this.handleColumns.bind(this)
		this.handleRows = this.handleRows.bind(this)
	}

	handleRows(event){
	 	this.setState({
	 		rows:event.target.value
	 	})
	}

	handleColumns(event){
		this.setState({
			columns:event.target.value
		})
	}

	render(){
		return(
			<FormContainer>
				Rows:
				<Input value={this.state.rows} onChange={this.handleRows}/> 
				Columns:
				<Input value={this.state.columns} onChange={this.handleColumns}/>
				<Button value={[this.state.rows, this.state.columns]} onClick={this.props.createTable}> Create Table </Button>
			</FormContainer>
		)
	}
}

const FormContainer = styled.div`
	display:flex;
	align-items:center;
	flex-direction:column;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-bottom: 2px solid palevioletred;

  :focus{
	    outline: none;
	}
`;

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