import FilterList from "../../components/FilterList/FilterList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEventHandler, ChangeEventHandler } from "react";

type NavBarProps = {
    search: string;
    handleInput:FormEventHandler<HTMLInputElement>
    onChangeABV:ChangeEventHandler<HTMLInputElement>;
 

}



const NavBar = ({search, handleInput, onChangeABV }:NavBarProps) => {
    
    return(
        <nav>
            <SearchBox search={search} handleInput={handleInput}/>
            <FilterList  onChangeABV={onChangeABV}  />
        </nav>
    )
}

export default NavBar;