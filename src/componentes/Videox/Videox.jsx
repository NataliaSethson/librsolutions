import './Videox.css';

const Videox = () => {
  return (
    <div className="videoContainer2">
      <video
        src="/comoTrabajamos.mp4" 
        autoPlay
        loop
        muted
        playsInline
        className="videoBanner2"
      />
    </div>
  );
};

export default Videox;