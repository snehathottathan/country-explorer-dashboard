/**
 * @Author Sneha T
 * 
 */
export default function Filters({ region, setRegion, population, setPopulation }) {

    return (

        <div className="filters">

            <select value={region} onChange={(e) => setRegion(e.target.value)}>

                <option value="">All Regions</option>

                <option value="asia">Asia</option>

                <option value="europe">Europe</option>

                <option value="africa">Africa</option>

                <option value="america">Americans</option>

                <option value="oceania">Oceania</option>

            </select>

            <select value={population} onChange={(e) => setPopulation(e.target.value)}>

                <option value="">All Population</option>

                <option value="small">Small</option>

                <option value="medium">Medium</option>

                <option value="large">Large</option>

            </select>

        </div>
    )


}