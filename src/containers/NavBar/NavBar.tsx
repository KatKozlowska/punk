import FilterList from "../../components/FilterList/FilterList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEventHandler, ChangeEventHandler } from "react";

type NavBarProps = {
    search: string;
    handleInput:FormEventHandler<HTMLInputElement>
    onChangeABV:ChangeEventHandler<HTMLInputElement>;
    onChangeClassic:ChangeEventHandler<HTMLInputElement>;
    onChangePh:ChangeEventHandler<HTMLInputElement>;
 

}



const NavBar = ({search, handleInput, onChangeABV, onChangeClassic,onChangePh}:NavBarProps) => {
    
    return(
        <nav>
            <SearchBox search={search} handleInput={handleInput}/>
            <FilterList  onChangeABV={onChangeABV} onChangeClassic={onChangeClassic} onChangePh={onChangePh} />
        </nav>
    )
}

export default NavBar;