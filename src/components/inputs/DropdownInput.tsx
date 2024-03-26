import { useState } from "react";
import rightArrow from "../../assets/rightArrow.svg";

const DropdownInput = ( { styles, options, label, } : 
    { styles?:string, placeholder?: string, error?: boolean, options: { id: number, nome: string}[], label: string} ) => {
    
    const [ selected, setSelected ] = useState<{ id: number, nome: string}>({ id: options[0].id, nome: options[0].nome})
    const [ displayOptions, setDisplayOptions ] = useState<boolean>(false)
        
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
            <div className="h-[62px] shadow-md relative w-full bg-stc-white rounded-[12px] ">
                <div 
                    className={`absolute right-0 top-0 left-0 right-[62px] font-normal cursor-pointer
                    h-full rounded-[12px] bg-stc-white flex items-center text-gray-500 px-8`}
                >
                    {selected.nome}
                </div>
                <img 
                    className={`absolute duration-200 rotate-90 top-1/2 right-[20px] -translate-y-1/2 ${displayOptions && "-rotate-90"}`}
                    src={rightArrow} 
                    alt="Dropdown Arrow Icon" 
                />
                { displayOptions &&
                    <div className="absolute top-[65px] left-0 right-0 overflow-hidden
                        flex flex-col w-full bg-stc-white rounded-[12px]">
                        {options.map( (option, index) => (
                            <div 
                                key={option.id}
                                className={`h-[62px] hover:bg-gray-100 w-full flex px-8 
                                items-center text-gray-500 cursor-pointer ${index !== 0 && "border-t-2"}`}
                                onClick={() => setSelected({id: option.id, nome: option.nome})}
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