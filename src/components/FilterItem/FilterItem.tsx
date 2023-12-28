import { ChangeEventHandler } from "react";

type FilterItemProps = {
    name:string;
    onChange:ChangeEventHandler<HTMLInputElement>
}
const FilterItem = ({name, onChange}:FilterItemProps) => {

return(
    <div >
    
        <input type="checkbox" onChange={onChange}></input>
        <label>{name}</label>

    </div>
)
};

export default FilterItem;