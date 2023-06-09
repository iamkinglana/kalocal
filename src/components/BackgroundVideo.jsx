import React from 'react';
import ReactPlayer from 'react-player';
import "../App.css";

const BackgroundVideo = () => {
    return (
      <div className="background-video">
        <ReactPlayer

          url="../pexels-cottonbro.mp4"
          playing
          loop
          muted
          width="100%"
          height="100vh"
        //   style={{ position: 'absolute', top: 0, left: 0 }}
        />
        {/* Your other content goes here */}
      </div>
    );
  };

  export default BackgroundVideo;
