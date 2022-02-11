// import { useState } from "react";
import React from "react";
import SearchBar from "./components/SearchBar.js";
import "./styles/style.css";
import youtubeApi from "./api/youtube.js";
import VideoList from "./components/VideoList.js";
import VideoDetail from "./components/VideoDetail.js";

class App extends React.Component {

  state = {
    videoMetaInfo: [],
    selectedVideoId: ""
  }

  onVideoSelected = videoId =>{
    this.setState({
      selectedVideoId: videoId
    })
  }

  onSearch = async keyword =>{
    const response = await youtubeApi.get("/search",{
      params: {
        q:keyword
      }
    })


  //  console.log(response);
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    })


  
  }

render(){
  return (
    <div className="App">
      <SearchBar onSearch = {this.onSearch}/>
      <VideoDetail videoId={this.state.selectedVideoId} />
      <VideoList 
      onVideoSelected={this.onVideoSelected}
      data = {this.state.videoMetaInfo}/>
    </div>
  );
}
  
}

export default App;
