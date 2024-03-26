import leftArrow from "../../../assets/leftArrow.svg"
import rightArrow from "../../../assets/rightArrow.svg"

interface IPaginationProps {
    total: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    currentPage: number;
}

const Pagination = ({ total, currentPage, setCurrentPage } : IPaginationProps) => {

    const totalPages = Math.ceil(total / 10);

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            const buttonStyle = i === currentPage ? 
                'text-stc-white bg-stc-blue rounded-[4px] px-[10px]' 
                : 
                'text-stc-gray-02 px-[10px] hover:bg-stc-gray-01'
            pages.push(
                <span
                    key={i}
                    className={`cursor-pointer px-2 py-1 ${buttonStyle}`}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </span>
            );
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center mt-4 shadow-xl font-bold
            bg-stc-white font-boldest w-fit mx-auto px-8 rounded-[16px] h-[62px] gap-2
            text-stc-gray-02">
            <button
                className="ml-2 px-3 py-1 bg-stc-white font-boldest 
                rounded cursor-pointer hover:bg-stc-gray-01
                hover:disabled:bg-stc-white hover:disabled:cursor-default
                "
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <img src={leftArrow} alt="left arrow for pagination" />
            </button>
            {renderPageNumbers()}
            <button
                className="ml-2 px-3 py-1 bg-stc-white font-boldest 
                rounded cursor-pointer hover:bg-stc-gray-01
                hover:disabled:bg-stc-white hover:disabled:cursor-default
                "
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <img src={rightArrow} alt="left arrow for pagination" />
            </button>
        </div>
    );
};

export default Pagination;