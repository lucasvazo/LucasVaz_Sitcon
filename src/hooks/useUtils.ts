
const useUtils = () => {

    const formatDateToUK = (date: Date | string) => {
        const dateFormat = (date instanceof Date) ? date : new Date(date)
        const day = (dateFormat.getDate() + 1).toString().padStart(2, '0');
        const month = (dateFormat.getMonth() + 1).toString().padStart(2, '0');
        const year = dateFormat.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const capitalizeFirstLetter = ( unformattedString: string, separator?: string ) => {
        let formattedString = unformattedString
            .split(" ")
            .map( word => word.charAt(0).toUpperCase() + word.slice(1) )
            .join(' ')
            .trim()
        if (separator) {
            formattedString = formattedString.split(separator)
            .map( word => word.charAt(0).toUpperCase() + word.slice(1) )
            .join(' ')
            .trim()
        }
        return formattedString
    }

    const uncapitalizeFeature = (feature: string) => {
        const lowerCaseFeature = feature.toLocaleLowerCase();
        const replaceSpacesFeat = lowerCaseFeature.split(" ").join("-").trim()
        return replaceSpacesFeat;
    }

    return { formatDateToUK, capitalizeFirstLetter, uncapitalizeFeature }
}

export default useUtils;