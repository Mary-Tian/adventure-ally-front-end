import React from 'react';
import './FavoriteAdventures.css';
import LikesButton from './LikesButton';

const FavoriteAdventures = (props) => {

    const listItems = props.likedAdventures.map((adventure) =>  
    <ul>
        <li>{adventure}</li>
        <li>{ LikesButton }</li>
        <LikesButton />
    </ul>)
    console.log(props.likedAdventures);

    return ( 
        <section className="favorite-adventures">
        <h1> Cards with favorite adventures? </h1>
        {/* <h2>{ props.likedAdventures[0] }</h2> */}
        
        {/* <h2> { listItems } </h2> */}
        <ul>
            <li>{ listItems}</li>
      </ul>
    </section> );
};

export default FavoriteAdventures;