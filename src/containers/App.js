import React, {Component} from 'react';
import './App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import GifCard from '../components/GifCard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            searchInput: ''
        }
    }

    onFormSubmit (event) {
        event.preventDefault();
        let searchResult = document.getElementById('search').value;
        let refinedSearch = searchResult.trim.split(' ').join('+');
        fetch(`https://api.giphy.com/v1/gifs/search?q=${refinedSearch}&api_key=mcBt20C2QcGGHWR340fiQyy0NGmpmCQ4&limit=10`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({gifs: data});
            console.log()
        })
    }

    render() {
        return (
            <div className="tc">
                <Header />
                <SearchBox onSearch = {this.onFormSubmit}/>
                <GifCard />
                <div>{document.write(this.state.gifs)}</div>
            </div>
        )
    }
}

export default App;