import FilterByHouse from "./FilterByHouse";

function Filters(props) {
    return (
        <FilterByHouse filterByHouse={props.filterByHouse}
            handleFilterByHouse={props.handleFilterByHouse}>

        </FilterByHouse>
    )
};
export default Filters;