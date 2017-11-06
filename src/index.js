import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyCwr_7KWbH7vrxgtZzRcbyI3Stzd3m_NMw';


class App extends Component{
    constructor(props) {
        super(props);

        this.state = { 
            videos: [] ,
            selectedVideo: null
        };

        this.videSearch('klay');

    }

    videSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        return (<div>
            Hello world! <br/>
            <SearchBar onSearchTermChange={term => this.videSearch(term)} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} /> 
        </div>);
    }
}


const root = document.querySelector('.container');
ReactDOM.render(<App />, root);