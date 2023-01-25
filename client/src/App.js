import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import CocktailDetails from './components/CocktailDetails';
import RandomCocktail from './components/RandomCocktail';
import SearchResults from './components/SearchResults';
import IngredientSearchResults from './components/IngredientSearchResults';
import Footer from './components/Footer';
import UserLogin from './components/UserLogin';
import Favorites from './components/Favorites';
import AddNew from './components/AddNew';
import UserCocktail from './components/UserCocktail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrowseAll from './components/BrowseAll';
import { useEffect, useState } from 'react'
import RegistrationForm from './components/RegistrationForm';
import EditCocktail from './components/EditCocktail';
import axios from 'axios';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(()=>{
    axios
      .get('http://localhost:8000/api/checkloginstatus', {withCredentials:true, credentials:'include'})
      .then((res)=> {
        if(res.data == "true"){
          setLoggedIn(true);
        }else{
          setLoggedIn(false);
        }
      })
      .catch(err=>console.log(err))

  })

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/random" element={<RandomCocktail />}/>
          <Route path="/details/:id" element={<CocktailDetails />}/>
          <Route path="/search/:name" element={<SearchResults />}/>
          <Route path="/search/" element={<SearchResults />}/>
          <Route path="/isearch/:ingredient" element={<IngredientSearchResults />} />
          <Route path="/isearch/" element={<IngredientSearchResults />} />
          <Route path="/browse" element={<BrowseAll />} />
          <Route path="/login" element={<UserLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/addNew" element={<AddNew />} />
          <Route path="/userCocktail/:id" element={<UserCocktail loggedIn={loggedIn} />} />
          <Route path="/register" element={<RegistrationForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/edit/:id" element={<EditCocktail />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
