import React from "react";
import VideoItem from "./VideoItem.js";

const VideoList = ({ onVideoSelected, data }) =>{
    return(
        <div className="video-list">
            <div style={{ padding: "20px 0" }}>
            <h3 style={{textAlign: "center", fontSize: "29px", fontWeight:"bold"}}>
                Video List
                <VideoItem data = {data} onVideoSelected={onVideoSelected}/>
            </h3>
            </div>
        </div>
    )
}

export default VideoList;