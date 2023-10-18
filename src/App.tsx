import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Profile from './views/profile/profile';

const Home = lazy(() => import('./homepage'));
const Search = lazy(() => import('./views/search'));

const Loading = () => <p>Loading ...</p>;

function App() {
  return (
    <HelmetProvider>
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Suspense>
    </HelmetProvider>
  );
}

export default App;
