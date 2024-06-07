import videoBackground from '../assets/video.mp4';


const BackgroundVideo = () => {
    return (
        <div className="absolute w-full h-full ">
            <video autoPlay loop muted className="w-full h-full object-cover">
                <source src={videoBackground} type="video/mp4" />
            </video>
        </div>
    );
};

export default BackgroundVideo;
