import React from 'react';
import './FavoriteAdventures.css';
import LikesButton from './LikesButton';

const FavoriteAdventures = () => {
    return ( <div>
        <h2> Cards with favorite adventures? </h2>
        <ul>
            <li>Adventure 1</li>
            <li>Adventure 2</li>
            <li>Adventure 3</li>
            <li>{ LikesButton }</li>
      </ul>

    </div> );
}

export default FavoriteAdventures;