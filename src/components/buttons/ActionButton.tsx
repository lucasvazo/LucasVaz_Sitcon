import { MouseEventHandler } from "react";

const ActionButton = ( {imgSource, onClick} : 
    {imgSource: string, onClick: MouseEventHandler}) => {
    return (
        <button
            className="hover:scale-[1.1]"
            onClick={onClick}
        >
            <img className="h-[25px] w-[25px]" src={imgSource} alt="action button"/>
        </button>
    );
};

export default ActionButton;