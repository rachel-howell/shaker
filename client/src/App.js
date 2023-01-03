import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import CocktailDetails from './components/CocktailDetails';
import RandomCocktail from './components/RandomCocktail';
import SearchResults from './components/SearchResults';
import IngredientSearchResults from './components/IngredientSearchResults';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrowseAll from './components/BrowseAll';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/random" element={<RandomCocktail />}/>
          <Route path="/details/:id" element={<CocktailDetails />}/>
          <Route path="/search/:name" element={<SearchResults />}/>
          <Route path="/search/" element={<SearchResults />}/>
          <Route path="/isearch/:ingredient" element={<IngredientSearchResults />} />
          <Route path="/isearch/" element={<IngredientSearchResults />} />
          <Route path="/browse" element={<BrowseAll />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
