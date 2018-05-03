import React from 'react'
import Squares from './Square'
import styled, { keyframes } from "styled-components";

const RowContainer = styled.div`
    display:flex;
    flex: 1 0 auto;
    margin:5px;
    background:ivory;
    -webkit-animation: ${props => {
      return props.animate == true ? 'bounceInUp 1s' : ''
    }};
    -webkit-animation-delay:${props => { 
      return '.' + props.rowNumber + 's'
    }};


`;

export default class Row extends React.Component{

  render(){

    let squares = this.props.data.map((square,index)=>{
        return <Squares editTable={this.props.editTable} rowNumber={this.props.rowNumber} columnNumber={index} turn={this.props.turn} key={index} data={square}/>
    })

    return(
      <RowContainer animate={this.props.animate} rowNumber={this.props.rowNumber}>
        {squares}
      </RowContainer>
    )
  }
}


/*
const Rows = ({squares, rowNum}) => {
	let rowName = 'row row' + rowNum 
	return (
	<div className={rowName} style={{
        display:'flex',
        padding: '0px 1.0875rem 1.45rem',
        margin:'5px',
        background:'ivory'
      }}> 
     	{squares}
    </div>)
}
*/
