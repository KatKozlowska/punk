import FilterItem from "../FilterItem/FilterItem";
import { ChangeEventHandler } from "react";

type FilterListProps = {
    onChangeABV:ChangeEventHandler<HTMLInputElement>;
   
   
}
const FilterList = ({onChangeABV}:FilterListProps) => {

    return (
    <div>
    <FilterItem onChange={onChangeABV} name="High alcohol ABV (above 6)"/>
    <FilterItem onChange={onChangeABV} name="Classic range (brewed before 2010)"/>
    </div>
)
}

export default FilterList;