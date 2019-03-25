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
        let searchResult = document.getElementById('search').value;
        // console.log(searchResult);
        // console.log(this);
        let refinedSearch = searchResult.trim().split(' ').join('+');
        fetch(`https://api.giphy.com/v1/gifs/search?q=${refinedSearch}&api_key=NzOQswVIdN6gAYDHUhdhdTMkFMLRsKYB&limit=1`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({gifs: data.data});
            // console.log(this.state.gifs)
        })
    }

    render() {
        if(this.state.gifs.length < 1) {
            return (
                <div className='tc'>
                    <Header />
                    <SearchBox onSearch = {this.onFormSubmit} />
                </div>
            )
        }
        console.log(this.state.gifs[0].images.original.url + ' from App')
        return (
            <div className="tc">
                <Header />
                <SearchBox onSearch = {this.onFormSubmit} />
                <GifCard images={this.state.gifs}/>
            </div>
        )
    }
}

export default App;