import React, { useRef } from 'react';

const VideoCall: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePip = async () => {
    if (!videoRef.current) return;

    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoRef.current.requestPictureInPicture();
    }
  };

  return (
    <div className="relative bg-gray-900 rounded-lg shadow-md mb-4 p-4">
      <h2 className="text-white text-lg font-semibold mb-2">Video Call</h2>
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        className="w-full h-64 rounded-lg"
      ></video>
      <button
        onClick={togglePip}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
      >
        Toggle PiP
      </button>
    </div>
  );
};

export default VideoCall;
