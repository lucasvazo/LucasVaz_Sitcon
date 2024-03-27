import { createContext, ReactNode, useState } from "react";

export const SettingsContext = createContext<any>({} as any);

const SettingsContextProvider = ({children} : {children: ReactNode}) => {

    const [loadingScreen, setLoadingScreen] = useState<boolean>(true);

    return (
        <SettingsContext.Provider
            value = {{
                loadingScreen, setLoadingScreen
            }} 
        >
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsContextProvider;