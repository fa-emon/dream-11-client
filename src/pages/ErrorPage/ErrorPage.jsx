import errorPage from '../../assets/lottieAnimation/404.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Lottie animationData={errorPage} loop={true}></Lottie>
        </div>
    );
};

export default ErrorPage;