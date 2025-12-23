/**
 * @Author Sneha T
 * 
 */

import { memo } from "react";

import { useFavorites } from '../context/FavoritesContext'

import { Link } from 'react-router-dom'

const CountryCard = memo(({ country }) => {
    const { favourates, toggleFavourates } = useFavorites();
    const isFav = favourates.some((c) => c.cca3 === country.cca3);

    return (
        <div className="card">
            <img src={country.flags.svg} alt={country.name.common} style={{ width: '100%' }} />
            <h3>{country.name.common}</h3>
            <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <div className="actions">
                <Link to={`/country/${country.cca3}`}>Details</Link>
                {/* Added onClick handler here */}
                <button onClick={() => toggleFavourates(country)}>
                    {isFav ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
});

export default CountryCard;