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
        console.log(this)
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit () {
        // console.log(event.target.value);
        // event.preventDefault();
        let searchResult = document.getElementById('search').value;
        console.log(searchResult);
        console.log(this);
        // let refinedSearch = searchResult.trim.split(' ').join('+');
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchResult}&api_key=NzOQswVIdN6gAYDHUhdhdTMkFMLRsKYB&limit=2`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({gifs: data.data});
            console.log(this.state.gifs)
        })
    }

    render() {
        return (
            <div className="tc">
                <Header />
                <SearchBox onSearch = {this.onFormSubmit} />
                <GifCard />
            </div>
        )
    }
}

export default App;