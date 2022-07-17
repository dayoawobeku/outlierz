import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';

const Home = lazy(() => import('./homepage'));
const Search = lazy(() => import('./pages/search'));

const Loading = () => <p>Loading ...</p>;

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Suspense>
  );
}

export default App;
