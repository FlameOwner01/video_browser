import React from "react";


const VideoDetail = ({ videoId }) =>{

    console.log(videoId);
    return(
        <div className="video-player">
            <iframe 
            title={videoId}
            className= "video-iframe"
            src = {`https://www.youtube.com/embed/${videoId}`}
            />

        </div>
    );
};

export default VideoDetail;