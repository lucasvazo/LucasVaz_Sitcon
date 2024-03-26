import { ReactNode } from "react";

const PageHeader = ({children} : {children: ReactNode}) => {
    return (
        <header className="
            bg-stc-blue w-full h-[85px] 
            flex items-center justify-end">
            {children}
        </header>
    );
};

export default PageHeader;