import { useState, FormEvent } from "react";
import beers from "./data/beers";
import Main from "./containers/Main/Main"
import NavBar from "./containers/NavBar/NavBar";
import FilterItem from "./components/FilterItem/FilterItem";


const App = () => {
  
    const [search, setSearch] = useState<string>("");
    
    const handleInput = (event:FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
    };

    const filteredBeer = beers.filter( beer => {
        return beer.name.toLowerCase().includes(search.toLowerCase());
      
    
    });

  return (

      <div>
        <NavBar search={search} handleInput={handleInput}/>
        <FilterItem label="high abv"/>
        <Main beers={filteredBeer}/>
      </div>
   
  )
}

export default App;
