import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import FavoriteAdventures from './Components/FavoriteAdventures';
import AdventuresList from './Components/AdventuresList';
import Adventures from './Components/Adventures';
import LikesButton from './Components/LikesButton';

function App() {
  const name = "Capstone";

  // likedAdventures = piece of state, reference to the update function for this piece of state, and store it in a variable with a good name like setLikedAventures
  const [likedAdventures, setLikedAdventures] = useState([]);
  // The "addAdventureButton" button should listen for click events, using the attribute onClick.
  // When the "addAdventureButton" button is clicked, we should call an event handler function. We can name this function updateLikedAdventures.
    //   const updateLikedAdventures = (newAdventure) => {
    //     if likedAdventures.includes(newAdventure.title) === false;
    //     setLikedAdventures([...likedAdventures, newElement]);
        
    // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Adventure Ally</h1>
      </header>
      <main>
        <AdventuresList updateFunction={setLikedAdventures} likedAdventures={likedAdventures}/>
        {/* <AdventuresList title="another-adventure"/> */}
        {/* <AdventuresList title="second-adventure"/> */}
        {/* <Adventures/> */}
        {/* <Adventures name="Denver Biscuit" image_url="https://s3-media1.fl.yelpcdn.com/bphoto/bxPN9shgJEtwvT3Hrf_pCg/o.jpg" price="$$" rating="5 stars"/> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <FavoriteAdventures likedAdventures={likedAdventures} />
        <LikesButton />
      </main>
    </div>
  );
}

export default App;
