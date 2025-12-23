
/**
 * @Author Sneha T
 * 
 */
import { useFavorites } from "../context/FavoritesContext";

import CountryCard from "../components/CountryCard";

const Favourates = () =>{

    const {favourates} = useFavorites();

    return(

        <div className="grid">

            {favourates?.length === 0 ?(

                <p>No Favourates yet.</p>
            ):(
                favourates?.map((c)=> <CountryCard key={c.cca3} country={c}/>)
            )}
        </div>
    )

}

export default Favourates;