import { FormEventHandler } from "react";
import "./SearchBox.scss"

type SearchBoxProps = {
    search: string;
    handleInput:FormEventHandler<HTMLInputElement>
}

const SearchBox = ({search,handleInput}: SearchBoxProps) => {
    return(
        
    <input type="text"
    value={search}
    onInput={handleInput} /> 
    
    )
}

export default SearchBox;