
import './App.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { FavouratesProvider } from './context/FavoritesContext'

import { lazy, Suspense } from 'react';

import { useEffect } from 'react';

import Loader from './components/Loader'
import CountryDetails from './pages/CountryDetails';
import Favourates from './pages/Favorites';
import CountryList from './pages/CountryList';

// const CountryList = lazy(() => import('./pages/CountryList/CountryList'))

function App() {

  useEffect(() => {

  }, [])

  return (

    <div className="App">

      <FavouratesProvider>
        <BrowserRouter>
          <nav>
            <Link to='/'> Home</Link>
            <Link to='/favourates'> Favourates</Link>
          </nav>

          <Suspense fallback={<Loader />}>
            <Routes>

              <Route path='/' element={<CountryList />} />
              <Route path='/country/:code' element={<CountryDetails />} />
              <Route path='/favourates' element={<Favourates />} />

            </Routes>
          </Suspense>
        </BrowserRouter>

      </FavouratesProvider>

    </div>
  );
}

export default App;
