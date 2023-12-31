import FilterItem from "../FilterItem/FilterItem";
import { ChangeEventHandler } from "react";


type FilterListProps = {
    onChangeABV:ChangeEventHandler<HTMLInputElement>;
    onChangeClassic:ChangeEventHandler<HTMLInputElement>;
    onChangePh:ChangeEventHandler<HTMLInputElement>;
   
   
}
const FilterList = ({onChangeABV,onChangeClassic,onChangePh}:FilterListProps) => {

    return (
    <div className="filter">
    <FilterItem onChange={onChangeABV} name="High alcohol ABV "/>
    <FilterItem onChange={onChangeClassic} name="Classic range "/>
    <FilterItem onChange={onChangePh} name="High pH"/>
    </div>
)
}

export default FilterList;