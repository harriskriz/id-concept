import React, { useEffect, useRef } from 'react';
import GalleryVideo from "../assets/videos/sound-explanation.mp4"

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        await videoRef.current?.play();
      } catch (err) {
        console.log('Autoplay blocked. Waiting for user interaction.');
      }
    };

    playVideo();
  }, []);

  const handleVideoClick = () => {
    videoRef.current?.play();
  };

  return (
    <div className="w-full flex justify-center pt-4 sm:pt-8">
      <video
        ref={videoRef}
        className="w-full max-w-md rounded-xl shadow-lg"
        controls
        onClick={handleVideoClick}
        muted
        playsInline
      >
        <source src={GalleryVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


export default function Gallery() {
  return (
    <div className="main-container-primary-gradient mx-auto p-6">
      <VideoPlayer/>
    </div>
  );
}
