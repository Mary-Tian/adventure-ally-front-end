import React, { useEffect } from 'react';
import './AdventuresList.css';
import Adventures from './Adventures';

var adventureComponent;

//define as function that when we pass in arguments we return html code using those input arguments
const AdventuresList = (props) => {
    const axios = require('axios');
    useEffect(() => {
        console.log(process.env.REACT_APP_YELP_API)
         getAdventures();
    });
    const getAdventures = () => {
        axios
        .get(`${'https://corsanywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Denver`, {
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
                <Adventures key={apiResponse.name} name={apiResponse.name} image_url={apiResponse.image_url} price={apiResponse.price} rating={apiResponse.rating}></Adventures>
            );
        });
      })
      .catch((error) => {
        console.log('error!', error);
      });
    };
    const sampleResponse = [
        {
            name: 'Ada',
            image_url: 'ada@dev.org',
            price: '$$',
            rating: '5 stars'
        },
        {
            name: 'Chris',
            image_url: 'c@dev.org',
            price: '$$',
            rating: '3 stars'
        },
        {
            name: 'Mary',
            image_url: 'm@dev.org',
            price: '$$$',
            rating: '2 stars',
        },
        {
            name: 'Carson',
            image_url: 'carson@dev.org',
            price: '$$$',
            rating: '2 stars',
        }
    ]
    // const studentComponents = props.students.map(student => {
    //     return (
    //         <li><Student name={student.nameData} email={student.emailData}></Student></li>
    //     )
    getAdventures();

    return (
        <section>
        <h1>Adventure List</h1>
        <h2>{props.title}</h2>
        <ul>
         { adventureComponent }
        </ul>
      </section>
    );
}

export default AdventuresList;