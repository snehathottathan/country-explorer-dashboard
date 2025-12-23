/**
 * Search componet
 * @Author Sneha T
 * 
 */

import { useCallback } from "react";

/**
 * 
 * @param {*} param0 
 */
const SearchBar = ({ onSearch }) => {

    /**
     * handleChange function for search
     */
    const handleChange = useCallback((e) => {
        onSearch(e.target.value)
    }, [onSearch])


    return(

       <input placeholder="Search country here..." onChange={handleChange}/>
    )

}

export default SearchBar;