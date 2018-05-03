import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)


/*
axios.get('https://randomuser.me/api/?results=10')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/
export default SecondPage
