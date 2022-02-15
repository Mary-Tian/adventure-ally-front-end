import React from 'react';
import './FavoriteAdventures.css';
import LikesButton from './LikesButton';

const FavoriteAdventures = (props) => {

    const listItems = props.likedAdventures.map((adventure) =>  
    <section>
        <strong>{adventure}</strong>
        {/* <li>{ LikesButton }</li> */}
        <LikesButton />
        <li></li>
        <li></li>
    </section>)
    console.log(props.likedAdventures);

    return ( 
        <section className="favorite-adventures">
        <h1> Favorite Adventures </h1>
        {/* <h2>{ props.likedAdventures[0] }</h2> */}
        
        {/* <h2> { listItems } </h2> */}
        <ul>
            <li>{ listItems}</li>
      </ul>
    </section> );
};

export default FavoriteAdventures;