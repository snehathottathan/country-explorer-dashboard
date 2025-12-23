/**
 * @Author Sneha T
 * 
 */

import { useEffect, useMemo, useState, useContext } from "react";

import CountryCard from '../components/CountryCard'

import { FavouratesContext } from '../context/FavoritesContext'

import { fetchCountries } from '../services/api'

import Pagination from "../components/Pagination";

/**
 * 
 * @returns 
 */
const CountryList = () => {

  /** State to store country details */
  const [countries, setCountries] = useState([]);

  /** State to store seacrh values */
  const [searchTerm, setSearchTerm] = useState('');

  /** State to store region details */
  const [region, setRegion] = useState('');

  /** State to store range*/
  const [popRange, setPopRange] = useState('');

  /** State to store current page */
  const [currentPage, setCurrentPage] = useState(1);

  const { favorites, toggleFavorite } = useContext(FavouratesContext);

  const itemsPerPage = 12;

  useEffect(() => {

    fetchCountries().then((res) => {

      setCountries(Array.isArray(res.data) ? res.data : []);
    })

      .catch(() => setCountries([]));

  }, []);

  /**
   * 
   */
  const filtered = useMemo(() => {

    if (!Array.isArray(countries)) return [];

    let result = countries;

    if (searchTerm) {

      result = result.filter(c => c?.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())

      );
    }

    if (region) {

      result = result.filter(c => c.region === region);

    }

    if (popRange === 'small')

      result = result.filter(c => c.population < 10_000_000);

    else if (popRange === 'medium')

      result = result.filter(c => c.population >= 10_000_000 && c.population <= 50_000_000);

    else if (popRange === 'large')

      result = result.filter(c => c.population > 50_000_000);

    return result;

  }, [countries, searchTerm, region, popRange]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);


  useEffect(() => {

    setCurrentPage(1);

  }, [searchTerm, region, popRange]);

  const paginated = useMemo(() => {

    const start = (currentPage - 1) * itemsPerPage;

    return filtered.slice(start, start + itemsPerPage);

  }, [filtered, currentPage]);

  return (

    <div className="container">

      <div className="filters">

        <input
          placeholder="Search country..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select onChange={(e) => setRegion(e.target.value)}>

          <option value="">All Regions</option>

          <option value="Africa">Africa</option>

          <option value="Americas">Americas</option>

          <option value="Asia">Asia</option>

          <option value="Europe">Europe</option>

          <option value="Oceania">Oceania</option>

        </select>

        <select onChange={(e) => setPopRange(e.target.value)}>

          <option value="">All Populations</option>

          <option value="small">&lt; 10M</option>

          <option value="medium">10M–50M</option>

          <option value="large">&gt; 50M</option>

        </select>

      </div>

      <div className="grid">

        {paginated.map(c => (

          <CountryCard

            key={c.cca3}

            country={c}

            // isFavorite={favorites?.some(f => f.cca3 === c.cca3)}
            onToggleFav={toggleFavorite}

          />

        ))}

      </div>

      <Pagination

        page={currentPage}

        setPage={setCurrentPage}

        total={totalPages}

      />

    </div>

  );

};


export default CountryList