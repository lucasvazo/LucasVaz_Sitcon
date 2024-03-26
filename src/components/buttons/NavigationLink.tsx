import { NavLink } from "react-router-dom";


const NavigationLink = ({description, to} : {description: string, to: string}) => {
    return (
        <NavLink 
            to={to} 
            className="duration-500 border h-[46px] border-stc-white 
            rounded-[12px] py-3 px-6 text-sm text-stc-white 
            font-semibold hover:brightness-90">
            {description}
        </NavLink>
    );
};

export default NavigationLink;