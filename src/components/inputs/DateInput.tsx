
const DateInput = ( {styles, name, label, setTimeAndDate} : 
{styles?:string, name: string, label: string, setTimeAndDate: React.Dispatch<React.SetStateAction<{
    time: string | null
    date: Date | null }>>}) => {
    return (
        <div className={`h-full flex flex-col ${styles}`}>
            <label
                className="font-bold  mb-2" 
                htmlFor={name}
                >
                {label}
            </label>
            <input 
                onChange={(e) => setTimeAndDate( ( prev : {date: Date | null, time: string | null}) => 
                ({ date: new Date(e.target.value), time: prev.time}))}
                id={name}
                required
                className={`focus:outline-none h-[62px] rounded-[12px] disabled:bg-stc-light-blue
                shadow-md w-full px-8`}
                type="date" 
                name={name}
            />
        </div>
    )
}

export default DateInput;