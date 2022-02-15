import { render } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';

const SearchBar = (props) => {

    const [entrySearchBar, setEntrySearchBar] = useState('Maui');

    const updateEntry = (changeEvent) => {
        setEntrySearchBar(changeEvent.target.value);
    };

    // const onFormSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.onSubmit(this.state.myLocation)
    // };

    // const updateLikes = () => {
    //     console.log('We\'re inside updateLikes!');
    //     setLikesCount(likesCount + 1);
    // };


    return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>location search</label>
                    <input
                        type="text"
                        value={entrySearchBar}
                        onChange={updateEntry}
                        // onChange={(event => this.setState({ myLocation: event.target.value }))}
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;