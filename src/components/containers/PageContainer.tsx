import { ReactNode } from "react";

const PageContainer = ({children, extraStyles} : {children: ReactNode, extraStyles: string}) => {
    return (
        <main className={`container h-full mx-auto max-w-[1200px] px-4 ${extraStyles}`}>
            {children}
        </main>
    );
};

export default PageContainer;