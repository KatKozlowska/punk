import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEventHandler } from "react";

type NavBarProps = {
    search: string;
    handleInput:FormEventHandler<HTMLInputElement>
}



const NavBar = ({search, handleInput}:NavBarProps) => {

    return(
        <nav>
            <SearchBox search={search} handleInput={handleInput}/>
        </nav>
    )
}

export default NavBar;