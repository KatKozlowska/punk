import { useState, FormEvent, ChangeEvent, useEffect} from "react";
import { Beer } from "./types/types";
import beers from "./data/beers";
import Main from "./containers/Main/Main"
import NavBar from "./containers/NavBar/NavBar";


const App = () => {
  const [apibeers, setApiBeers] = useState<Beer[]>([])
  
    const [search, setSearch] = useState<string>("");
    const [searchABV, setSearchABV]= useState<string>("");
 ;
   
    
    const handleInput = (event:FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
    };

    const filteredBeer = apibeers.filter( beers => {
        return beers.name.toLowerCase().includes(search.toLowerCase());
    }); 

    const handleABVChange = () => {
      if (searchABV){ setSearchABV("");
      }else {setSearchABV("&abv_gt=6")}; // changing the end point 
    };

   
   
// connecting to the API 
const getBeers = async () => {
  const url = `https://api.punkapi.com/v2/beers?per_page=10${searchABV}`
  const response = await fetch(url); 
  const beers : Beer[] = await response.json();
  setApiBeers(beers)
}

useEffect (() => {
  getBeers();
},[searchABV ]);
    

  return (

      <div>
        <button onClick={getBeers}>Beer!</button>
        <NavBar 
        search={search}
        handleInput={handleInput} 
        onChangeABV={handleABVChange} 
        />
      
        <Main apibeers={filteredBeer}/>
        
      </div>
   
  )
}

export default App;
