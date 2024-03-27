const TextInput = ( {styles, disabled = false, readonly = false, placeholder, defaultValue, error, name, label} : 
    {styles?:string, disabled: boolean, readonly: boolean, placeholder?: string, defaultValue: string, error?: boolean, name: string, label: string}) => {

    if (error) {

    }
    
    return (
        <div className={`h-full flex flex-col ${styles}`}>
            <label
                className="font-bold  mb-2" 
                htmlFor={name}
                >
                {label}
            </label>
            <input 
                placeholder={placeholder}
                defaultValue={ readonly ? defaultValue : ''}
                readOnly={readonly}
                id={name}
                required
                className={`h-[62px] rounded-[12px] disabled:bg-stc-light-blue
                shadow-md w-full px-8`}
                type="text" 
                name={name}
                disabled={disabled}
            />
        </div>
    )
}

export default TextInput;