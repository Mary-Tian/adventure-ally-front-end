import React from 'react';
import { useState } from 'react';

const LikesButton = () => {

    const [likesCount, setLikesCount] = useState(0);

    const updateLikes = () => {
        console.log('We\'re inside updateLikes!');
        setLikesCount(likesCount + 1);
    };

    return (
      <section>
        <p>The number of likes is {likesCount}.</p>
        <button onClick={updateLikes}>Like</button>
      </section>
    );
};

export default LikesButton;
