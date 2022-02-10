import React from 'react';
import './Adventures.css';

const Adventures = (props) => {

    console.log(props);
    // "name": 
    // "image_url":
    // "price":
    // "rating":
    
    return (
        <section>
        {/* <h1>Adventure List</h1> */}
        <h2>{ props.name }</h2>
        <ul>
          <img src={ props.image_url } width="150" height="175" />
          <li>How much is it? { props.price }</li>
          <li>How amazing is it? { props.rating }</li>
        </ul>
      </section>
    );
};

export default Adventures;