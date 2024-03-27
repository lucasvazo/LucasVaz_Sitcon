import { ReactNode } from "react";

export const ReqFormRow = ({children, extraStyles} : {children: ReactNode, extraStyles?: string}) => {
    return (
        <div className={`flex h-[91px] gap-8 ${extraStyles}`}>
            {children}
        </div>
    );
};

export const Warning = () => (
    <div className="bg-stc-orange-01 h-[62px] flex gap-2 rounded-[12px]
        items-center justify-center cursor-default my-2 whitespace-normal
        text-center">
        <span className="font-bold">Atenção!</span>
        <span>Os Campos com * devem ser preechidos obrigatóriamente.</span>
    </div>
)