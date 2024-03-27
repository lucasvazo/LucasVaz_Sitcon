import "./LoadingScreen.css";

const LoadingScreen = () => {
    return (
        <div
            className={
                `fixed top-0 left-0 right-0 bottom-0 
                backdrop-blur-md z[150] bg-stc-light-blue/30 duration-200 flex flex-col
                items-center justify-center`}
        >
            <BouncingBalls/>    
            <span className='animate-pulse mx-auto font-semibold text-stc-orange-02'>
                Loading
            </span>
        </div>
    );
};

const BouncingBalls = () => {
    return (
        <div className="bouncing-balls-container h-[20px]">
            <div className="ball ball-one"></div>
            <div className="ball ball-two"></div>
            <div className="ball ball-three"></div>
        </div>
    );
};

export default LoadingScreen;