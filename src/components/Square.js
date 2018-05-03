import React from 'react'
import styled from "styled-components";
import '../css/flip.css'

//    props.turn == 2 && props.flip == true && props.data == '' ? 'palevioletred' :

    const SquareContainer = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        margin: 0px 5px;
        flex: 1 0 auto;
        padding: 0px 1.0875rem 1.45rem;
        color:${props => props.turn == 1 ? 'palevioletred ' : 'BlanchedAlmond'};
        background:${props => {
        return props.turn == 1 && props.squareValue == 2 ? 'Maroon' :
        props.turn == 2 && props.squareValue == 2 ? 'Maroon' :
        props.turn == 1 && props.squareValue == -1 ? 'SteelBlue' :
        props.turn == 2 && props.squareValue == -1 ? 'SteelBlue' :
        props.turn == 1 && props.flip == true && props.squareValue == 2 ? 'Maroon' :
        props.turn == 1 && props.flip == true && props.squareValue == 1 ? 'SteelBlue' : 
        props.turn == 1 && props.flip == true && props.squareValue == 0 ? 'SteelBlue' :
        props.turn == 2 && props.flip == true && props.squareValue == 2 ? 'Maroon' :
        props.turn == 2 && props.flip == true && props.squareValue == 1 ? 'SteelBlue' : 
        props.turn == 2 && props.flip == true && props.squareValue == 0 ? 'SteelBlue' : 'BlanchedAlmond'}}
        box-shadow: 0 1px 5px 0 rgba(0,0,0,0.5);
        font-size:30px;
        cursor:${prop => {return prop.flip ? '' : 'pointer'}};
        -webkit-animation:${prop => {
            return prop.flip ? 'flipInX 1s' : ''
        }};
        background-image:${prop => { 
            return prop.flip == true ? 'url(' + prop.background +')' : ''
        }};
        background-repeat:no-repeat;
        background-position: center; 

        :hover{
          background:gold;
        }
      `;



export default class Square extends React.Component{
  constructor(props){
    super(props)

    this.state ={
        flip:this.props.data == -1 || this.props.data == 2 ? true : false,
        squareValue:this.props.data
    }

    this.handleReveal = this.handleReveal.bind(this)
  }

  handleReveal(event){
    if(this.state.flip !== true){
        this.setState({
            flip:true,
            squareValue: this.state.squareValue == 1 ? 2 : -1
        })
    }
  }
 
  render(){

    const currentSquare = {row:this.props.rowNumber, column:this.props.columnNumber, data:this.props.data},
          randomNumber = Math.floor((Math.random() * 30) + 1),
          background = require('../images/' + randomNumber + '.svg')

    return(
      <SquareContainer background={background} squareValue ={this.state.squareValue} flip={this.state.flip} 
        onClick={()=>{this.handleReveal();this.props.editTable(currentSquare)}} turn={this.props.turn}>

    </SquareContainer>
    )
  }
}


