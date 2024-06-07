import Lottie from 'react-lottie';
import animationData from '../assets/Lootie/animation.json';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const UnderConstructionPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Lottie options={defaultOptions} height={400} width={400} />
            <h2 className="mt-6 text-2xl text-center">Esta página está em desenvolvimento e estará disponível em breve.</h2>	
        </div>
    );
};

export default UnderConstructionPage;