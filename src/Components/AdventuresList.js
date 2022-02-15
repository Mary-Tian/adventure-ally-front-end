import React, { useEffect, useState } from 'react';
import './AdventuresList.css';
import Adventures from './Adventures';
import SearchBar from './SearchBar';

var adventureComponent;

//define as function that when we pass in arguments we return html code using those input arguments
const AdventuresList = (props) => {
    const axios = require('axios');
    useEffect(() => {
        console.log(process.env.REACT_APP_YELP_API)
         getAdventures();
    });
    const getAdventures = (myLocation) => {
        axios
        .get(`${'https://corsanywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
            params: { location: myLocation },
            headers: {
             Authorization: `Bearer ZcVl3Ogf5E_Otv6gEjo3_CoO5Hy0E-XHpkYivTB5RrM--Xjc5kAcIteuruKcOjf_RCoxehr_mgE4Sqx0fOA6-4lBONRDlFHy8UBjjzD-lHW6kITazl7LO2HdSLn5YXYx`  // discussed below
             
            },
    //         params: {
    //             location: 'Denver'            
    //         // format: 'json',
    // }
        })
      .then((response) => {
        console.log('success!', response);
            // });
        adventureComponent = response.data.businesses.map(apiResponse => {
            return (
                <Adventures key={apiResponse.name} name={apiResponse.name} image_url={apiResponse.image_url} price={apiResponse.price} rating={apiResponse.rating} updateFunction={props.updateFunction} likedAdventures={props.likedAdventures}></Adventures>
            );
        });
      })
      .catch((error) => {
        console.log('error!', error);
      });
    };
    // const sampleResponse = [
    //     {
    //         name: 'Ada',
    //         image_url: 'ada@dev.org',
    //         price: '$$',
    //         rating: '5 stars'
    //     },
    //     {
    //         name: 'Chris',
    //         image_url: 'c@dev.org',
    //         price: '$$',
    //         rating: '3 stars'
    //     },
    //     {
    //         name: 'Mary',
    //         image_url: 'm@dev.org',
    //         price: '$$$',
    //         rating: '2 stars',
    //     },
    //     {
    //         name: 'Carson',
    //         image_url: 'carson@dev.org',
    //         price: '$$$',
    //         rating: '2 stars',
    //     }
    // ]
    // const studentComponents = props.students.map(student => {
    //     return (
    //         <li><Student name={student.nameData} email={student.emailData}></Student></li>
    //     )
    getAdventures();


// // likedAdventures = piece of state, reference to the update function for this piece of state, and store it in a variable with a good name like setLikedAventures
//     const [likedAdventures, setLikedAdventures] = useState([]);
// // The "addAdventureButton" button should listen for click events, using the attribute onClick.
// // When the "addAdventureButton" button is clicked, we should call an event handler function. We can name this function updateLikedAdventures.
//     const updateLikedAdventures = (newAdventure) => {
//       if likedAdventures.includes(newAdventure.title) === false;
//       setLikesCount(likesCount + 1);
      
//   }
    
    // const updateStudentData = updatedStudent => {
    //     const students = studentData.map(student => {
    //       if (student.id === updatedStudent.id) {
    //         return updatedStudent;
    //       } else {
    //         return student;
    //       }
    //     });
    
    //     setStudentData(students);
    //   };


    return (
        <section className="adventures-list">
        <h1>Adventure List</h1>
        <div className="ui container">
          <SearchBar onSubmit={ getAdventures } />
        </div>
        <h2>{props.title}</h2>
        <strong>
         { adventureComponent }
        </strong>
      </section>
    );
}

export default AdventuresList;