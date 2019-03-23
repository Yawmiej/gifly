import React, {Component} from 'react';
import './App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import GifCard from '../components/GifCard';

class App extends Component {
    render() {
        return (
            <div className="tc">
                <Header />
                <SearchBox />
                <GifCard />
                
            </div>
        )
    }
}

export default App;