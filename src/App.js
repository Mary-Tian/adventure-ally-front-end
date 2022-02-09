import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useEffect} from 'react';
import FavoriteAdventures from './Components/FavoriteAdventures';
import AdventuresList from './Components/AdventuresList';
import Adventures from './Components/Adventures';

function App() {
  const name = "Capstone";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Adventure Ally</h1>
        <AdventuresList title="another-adventure"/>
        <AdventuresList title="second-adventure"/>
        <Adventures name="Denver Biscuit" image_url="https://s3-media1.fl.yelpcdn.com/bphoto/bxPN9shgJEtwvT3Hrf_pCg/o.jpg" price="$$" rating="5 stars"/>
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
      </header>
      <main>
        <FavoriteAdventures />
      </main>
    </div>
  );
}

export default App;
