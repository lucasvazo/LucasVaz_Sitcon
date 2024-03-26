import { MouseEventHandler } from "react";

const MainButton = ({ title, onClick, variant='blueOutlined' } : 
    { title: string, onClick: MouseEventHandler, variant: 'blueOutlined' | 'blueFilled' | 'orangeFilled'}) => {

    const buttonVariants = {
        blueOutlined: "border border-stc-blue text-stc-blue",
        blueFilled: "bg-stc-blue text-stc-white",
        orangeFilled: "bg-stc-orange-02 text-stc-white"
    }

    return (
        <button 
            onClick={onClick}
            className={
                `duration-300 h-[46px] border-stc-white shadow-lg transition-background-color
                rounded-[12px] py-3 px-6 text-sm text-stc-white active:translate-y-[1px]
                active:brightness-100 font-semibold hover:brightness-95 ${buttonVariants[variant]}`
            }>
            {title}
        </button>
    );
};

export default MainButton;