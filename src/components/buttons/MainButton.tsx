import { MouseEventHandler } from "react";

const MainButton = ({ title, onClick, variant='blueOutlined', disabled } : 
    { title: string, onClick: MouseEventHandler, variant: 'blueOutlined' | 'blueFilled' | 'orangeFilled', disabled?: boolean}) => {

    const buttonVariants = {
        blueOutlined: "border border-stc-blue text-stc-blue ",
        blueFilled: "bg-stc-blue text-stc-white",
        orangeFilled: "bg-stc-orange-02 text-stc-white"
    }

    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={
                `duration-300 h-[46px] transition-background-color hover:-translate-y-[1px]
                rounded-[12px] py-2 px-5 text-sm active:translate-y-[1px] hover:shadow-md leading-4
                active:brightness-100 font-semibold hover:brightness-90 active:shadow-none ${buttonVariants[variant]} `
            }>
            {title}
        </button>
    );
};

export default MainButton;