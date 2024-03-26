import { ReactNode } from "react";

const PageContainer = ({children} : {children: ReactNode}) => {
    return (
        <main className="bg-stc-gray-01 w-full h-full">
            {children}
        </main>
    );
};

export default PageContainer;