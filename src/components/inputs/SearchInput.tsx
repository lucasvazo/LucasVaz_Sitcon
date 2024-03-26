import magnIcon from '../../assets/magnifyingGlass.svg';

const SearchInput = ({searchQuery, handleSearchChange} : {searchQuery: string, handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <div className="relative">
                <input
                    type="text"
                    className="pl-12 pr-6 py-3 w-[490px] text-lg border rounded-lg"
                    placeholder="Pesquisar"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <img
                    src={magnIcon}
                    alt="search box icon"
                    className="absolute top-1/2 -translate-y-1/2 left-[11px] h-[23px] w-[23px]"
                />
            </div>
        </div>
    );
};

export default SearchInput;
