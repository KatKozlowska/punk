import FilterItem from "../FilterItem/FilterItem";
import { ChangeEventHandler } from "react";
import "./FilterList.scss"


type FilterListProps = {
    onChangeABV:ChangeEventHandler<HTMLInputElement>;
    onChangeClassic:ChangeEventHandler<HTMLInputElement>;
    onChangePh:ChangeEventHandler<HTMLInputElement>;
   
   
}
const FilterList = ({onChangeABV,onChangeClassic,onChangePh}:FilterListProps) => {

    return (
    <div className="filter">
    <FilterItem id="cb1" onChange={onChangeABV} name="High alcohol ABV "/>
    <FilterItem id="cb2" onChange={onChangeClassic} name="Classic range "/>
    <FilterItem id="cb3" onChange={onChangePh} name="High pH"/>
    </div>
)
}

export default FilterList;