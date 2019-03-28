import React, {Component} from 'react';
import './App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import GifList from '../components/GifList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            searchInput: '',
            fetched : 0
        }
    }

    onFormSubmit =  () => {
        let searchResult = document.getElementById('search').value;
        this.setState({gifs: []})

        let refinedSearch = searchResult.trim().split(' ').join('+');
        fetch(`https://api.giphy.com/v1/gifs/search?q=${refinedSearch}&api_key=NzOQswVIdN6gAYDHUhdhdTMkFMLRsKYB&limit=15`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({gifs: data.data,fetched: 2});
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
        } else if(this.state.gifs.length < 1 && this.state.fetched === 1 ) {
            return (
                <div className = 'tc'>
                    <Header />
                    <SearchBox onSearch = {this.onFormSubmit} />
                    <h1>Loading... </h1>
                </div>
            )
        }
        console.log(this.state.gifs[0].images.original.url + ' from App')
        return (
            <div className="tc">
                <Header />
                <SearchBox onSearch = {this.onFormSubmit} />
                <GifList images={this.state.gifs}/>
            </div>
        )
    }
}

export default App;