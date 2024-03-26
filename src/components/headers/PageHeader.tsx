import { ReactNode } from "react";

const PageHeader = ({children} : {children: ReactNode}) => {
    return (
        <header className="bg-stc-blue w-full h-[85px]">
            {children}
        </header>
    );
};

export default PageHeader;