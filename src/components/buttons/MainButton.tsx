import { MouseEventHandler } from "react";

const MainButton = ({ title, onClick, variant='blueOutlined', disabled, type = "button" } : 
    { title: string, onClick: MouseEventHandler, variant: 'blueOutlined' | 'blueFilled' | 'orangeFilled', disabled?: boolean, type?: "submit" | "button" | "reset"}) => {

    const buttonVariants = {
        blueOutlined: "border border-stc-blue text-stc-blue ",
        blueFilled: "bg-stc-blue text-stc-white",
        orangeFilled: "bg-stc-orange-02 text-stc-white"
    }

    return (
        <button 
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={
                `duration-300 h-[46px] transition-background-color hover:-translate-y-[1px] w-fit
                rounded-[12px] py-2 px-8 text-sm active:translate-y-[1px] hover:shadow-md leading-4
                active:brightness-100 font-semibold hover:brightness-90 active:shadow-none ${buttonVariants[variant]} 
                disabled:text-stc-white disabled:bg-gray-300 hover:disabled:brightness-100 hover:disabled:translate-y-[0px]
                hover:disabled:shadow-none`
            }>
            {title}
        </button>
    );
};

export default MainButton;