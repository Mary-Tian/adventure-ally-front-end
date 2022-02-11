import React from 'react';
import './FavoriteAdventures.css';
import LikesButton from './LikesButton';

const FavoriteAdventures = (props) => {

    const listItems = props.likedAdventures.map((adventure) => (<li>{adventure.name}<li>));

    return ( <div>
        <h1> Cards with favorite adventures? </h1>
        <ul>
            <li>{listItems}</li>
            {/* <h2>{ props.likedAdventures.name }</h2> */}
            {/* <li>{ props.likedAdventures[0] }</li> */}
            <li>Adventure 2</li>
            <li>Adventure 3</li>
            <li>{ LikesButton }</li>
      </ul>

    </div> );
}

export default FavoriteAdventures;