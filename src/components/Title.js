import React from 'react'
import styled from "styled-components";


const WrapTitle = styled.h1`
  font-size: 1.5em;
  text-align: center; 
  color: ${props => {
  	return 'palevioletred'  
  }};
`;

export default class Title extends React.Component{

	render(){
		return (
			<WrapTitle primary={5}>Title II</WrapTitle>
		)
	}

}
