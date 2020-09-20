import React, { Component } from "react";

class VideoContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="overlay"></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          width="100%"
        >
          <source
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default VideoContainer;
