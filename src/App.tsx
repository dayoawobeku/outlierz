import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Profile from './pages/profile/profile';

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
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Suspense>
  );
}

export default App;
