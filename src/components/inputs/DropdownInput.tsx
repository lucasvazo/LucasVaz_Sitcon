import { useState } from "react";
import rightArrow from "../../assets/rightArrow.svg";

const DropdownInput = ( { styles, options, label, disabled, setId } : 
    { styles?:string, placeholder?: string, disabled?: boolean, setId: ( id: any) => void, options: { id: number, nome: string}[], label: string}) => {
    
    const [ selected, setSelected ] = useState<{ id: number, nome: string}>({ id: options[0].id, nome: options[0].nome});
    const [ displayOptions, setDisplayOptions ] = useState<boolean>(false);

    const selectOption = ( id: number, nome: string) => {
        setSelected({id: id, nome: nome})
        setId(id)
    }
        
    return (
        <div 
            className={`h-full flex flex-col cursor-default ${styles}`}
            onClick={() => { setDisplayOptions( prev => !prev)}}
        >
            <label
                htmlFor={`${label}${selected.id}`}
                className="font-bold mb-2" 
                >
                {label}
            </label>
            <div className={`h-[62px] shadow-md relative w-full bg-stc-white rounded-[12px] ${ disabled ? "bg-gray-100" : "bg-stc-white"}`}>
                <div 
                    title={ disabled ? "Selecione o campo anterior para desbloquear" : selected.nome}
                    className={`absolute right-0 top-0 left-0 right-[62px] font-normal
                    ${ disabled ? "cursor-default bg-gray-100" : "cursor-pointer bg-stc-white"}
                    h-full rounded-[12px] flex items-center text-gray-500 px-8`}
                >
                    { disabled ? "Selecione o campo anterior..." : selected.nome}
                </div>
                <img 
                    className={`absolute duration-200 rotate-90 top-1/2 right-[20px] 
                    -translate-y-1/2 ${displayOptions && !disabled &&"-rotate-90"}`}
                    src={rightArrow} 
                    alt="Dropdown Arrow Icon" 
                />
                { displayOptions && !disabled &&
                    <div className="absolute top-[65px] left-0 right-0 overflow-hidden
                        flex flex-col w-full bg-stc-white rounded-[12px] z-[100]">
                        {options
                            .filter( option => option.id !== selected.id)
                            .map( (option, index) => (
                            <div 
                                key={option.id}
                                className={`h-[62px] hover:bg-gray-100 w-full flex px-8 
                                items-center text-gray-500 cursor-pointer ${index !== 0 && "border-t-2"}`}
                                onClick={() => selectOption( option.id, option.nome)}
                                >
                                {option.nome}
                            </div>
                        ))}
                    </div>
                }
            </div>
            <input readOnly type="text" value={selected.id} hidden name={label} id={`${label}${selected.id}`} />
        </div>
    )
}

export default DropdownInput;