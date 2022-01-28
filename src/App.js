// import { useState } from "react";
import React from "react";
import SearchBar from "./components/SearchBar.js";
import "./styles/style.css";
import youtubeApi from "./api/youtube.js";
import VideoList from "./components/VideoList.js";
import VideoDetail from "./components/VideoDetail.js";

class App extends React.Component {

  state = {
    videoMetaInfo: [{
      kind: 'youtube#searchResult', etag: 'gsbn9ejx0xti14-zDfLfJn4SYV0', id: {kind: 'youtube#video', videoId: '_NPTmGQAkn8'}, 
      snippet: {channelId: "UCKU0iO0axnimO3b0G-BOO_g",
      channelTitle: "Music UC",
      description: "Top Hits 2022 - Best Pop Music Playlist 2022 - Top 100 Billboard Popular Songs 2022 Top Hits 2022 - Best Pop Music Playlist ...",
      liveBroadcastContent: "live",
      publishTime: "2022-01-27T09:37:41Z",
      publishedAt: "2022-01-27T09:37:41Z",
      thumbnails: {default: {url: 'https://i.ytimg.com/vi/_NPTmGQAkn8/default_live.jpg', width: 120, height: 90}, medium: {url: 'https://i.ytimg.com/vi/_NPTmGQAkn8/mqdefault_live.jpg', width: 320, height: 180}, high: {url: 'https://i.ytimg.com/vi/_NPTmGQAkn8/hqdefault_live.jpg', width: 480, height: 360}},
      title: "Top Hits 2022 - Best Pop Music Playlist 2022 - Top 100 Billboard Popular Songs 2022",
        }, 
    },
    {
      kind: 'youtube#searchResult', etag: 'gsbn9ejx0xti14-zDfLfJn4SYV0', id: {kind: 'youtube#video', videoId: 'az9YjrbVccM'}, 
      snippet: {channelId: "UCTS9U13K42rCcRWJsdPW8yA",
      channelTitle: "Queen Deep",
      description: "Ibiza Summer Mix 2021 Best Of Tropical Deep House Music Chill Out Mix 2021 #59 #Deephouse​ #Chillout​ ...",
      liveBroadcastContent: "live",
      publishTime: "2022-01-28T08:22:58",
      publishedAt: "2022-01-28T08:22:58Z",
      thumbnails: {default: {url: 'https://i.ytimg.com/vi/az9YjrbVccM/default_live.jpg', width: 120, height: 90}, medium: {url: 'https://i.ytimg.com/vi/az9YjrbVccM/mqdefault_live.jpg', width: 320, height: 180}, high: {url: 'https://i.ytimg.com/vi/az9YjrbVccM/hqdefault_live.jpg', width: 480, height: 360}},
      title: "Ibiza Summer Mix 2021 🍓 Best Of Tropical Deep House Music Chill Out Mix 2021 #59",
        }, 
    },
    {
      kind: 'youtube#searchResult', etag: 'ecZ94vOs0izcwM1yZJweNnFBCZY', id: {kind: 'youtube#video', videoId: 'gZbte2uB0XA'}, 
      snippet: {channelId: "UCvFaV_cKiu2ulk8NtVrC7gQ",
      channelTitle: "Trap Flow",
      description: "CAR MUSIC 2022 & BEST REMIXES OF POPULAR SONGS & BASS BOOSTED, EDM, ELECTRO HOUSE | Live Radio 24/7 ...",
      liveBroadcastContent: "live",
      publishTime: "2022-01-28T14:35:10Z",
      publishedAt: "2022-01-28T14:35:10Z",
      thumbnails: {default: {url: 'https://i.ytimg.com/vi/gZbte2uB0XA/default_live.jpg', width: 120, height: 90}, medium: {url: 'https://i.ytimg.com/vi/gZbte2uB0XA/mqdefault_live.jpg', width: 320, height: 180}, high: {url: 'https://i.ytimg.com/vi/gZbte2uB0XA/hqdefault_live.jpg', width: 480, height: 360}},
      title: "CAR MUSIC 2022 &amp; BEST REMIXES OF POPULAR SONGS &amp; BASS BOOSTED, EDM, ELECTRO HOUSE | Live Radio 24/7",
    },
    },
    {
      kind: 'youtube#searchResult', etag: 'Vk5AWTBCC3LFfWRo5lTh9Dq06pY', id: {kind: 'youtube#video', videoId: 'qclWIFxq2F4'}, 
      snippet: {channelId: "UCcsrHJDzOxM7foZQWiBr8qQ",
      channelTitle: "Sky Music PE",
      description: "TOP 40 Songs of 2021 2022 (Best Hit Music Playlist) on Spotify. Help Us to Get 100.000 Subscribers, PLEASE !!! Thank for ...",
      liveBroadcastContent: "none",
      publishTime: "2021-01-27T12:00:31Z",
      publishedAt: "2021-01-27T12:00:31Z",
      thumbnails: {default: {url: 'https://i.ytimg.com/vi/qclWIFxq2F4/default.jpg', width: 120, height: 90}, medium: {url: 'https://i.ytimg.com/vi/qclWIFxq2F4/mqdefault.jpg', width: 320, height: 180}, high: {url: 'https://i.ytimg.com/vi/qclWIFxq2F4/hqdefault.jpg', width: 480, height: 360}},
      title: "TOP 40 Songs of 2021 2022 (Best Hit Music Playlist) on Spotify",
    },
    },
    {
      kind: 'youtube#searchResult', etag: 'O6M6ufEvZY2Ma4TzQHVJKLnbaOM', id: {kind: 'youtube#video', videoId: 'INJwqzcbqdI'}, 
      snippet: {channelId: "UCI0zpW-HyHg745GvGE5kVdw",
      channelTitle: "Deep Chill Mix",
      description: "Trending Tiktok songs 2022 Viral songs latest ~ New Tiktok songs 2022 Everyone like, subscribe and press the notification ...",
      liveBroadcastContent: "none",
      publishTime: "2022-01-28T01:00:04Z",
      publishedAt: "2022-01-28T01:00:04Z",
      thumbnails: {default: {url: 'https://i.ytimg.com/vi/INJwqzcbqdI/default.jpg', width: 120, height: 90}, medium: {url: 'https://i.ytimg.com/vi/INJwqzcbqdI/mqdefault.jpg', width: 320, height: 180}, high: {url: 'https://i.ytimg.com/vi/INJwqzcbqdI/hqdefault.jpg', width: 480, height: 360}},
      title: "Trending Tiktok songs 2022 🌱 Viral songs latest ~ New Tiktok songs 2022",
    },
    },
  ],
    selectedVideoId: "_NPTmGQAkn8"
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
