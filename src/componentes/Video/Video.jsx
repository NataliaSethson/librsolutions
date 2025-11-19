import './Video.css';

const Video = () => {
  return (
    <div className="videoContainer">
      <video
        src="/videoBanner2.mp4" 
        autoPlay
        loop
        muted
        playsInline
        className="videoBanner"
      />
    </div>
  );
};

export default Video;

