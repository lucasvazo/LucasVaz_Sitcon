const TimeInput = ({ styles, name, label, setTimeAndDate }: { styles?: string, name: string, label: string, setTimeAndDate: React.Dispatch<React.SetStateAction<{
    time: string | null
    date: Date | null }>>}) => {
    return (
        <div className={`h-full flex flex-col ${styles}`}>
            <label
                className="font-bold mb-2"
                htmlFor={name}
            >
                {label}
            </label>
            <input
                onChange={(e) => setTimeAndDate( ( prev : {date: Date | null, time: string | null}) => 
                    ({ date: prev.date, time: e.target.value}))}
                id={name}
                required
                className={`focus:outline-none h-[62px] rounded-[12px] disabled:bg-stc-light-blue
                shadow-md w-full px-8`}
                type="time"
                name={name}
                step={900} 
                min="07:00"
                max="18:00"
                // pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
            />
        </div>
    );
};

export default TimeInput;