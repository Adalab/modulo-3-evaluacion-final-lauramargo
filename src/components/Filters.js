import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";
import FilterByGender from './FilterByGender.js';

function Filters(props) {
    const handleReset = (ev) => {
        ev.preventDefault();
        props.resetBtn();
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <>
            <form className="page__form"
                onSubmit={handleSubmit}>
                <button
                    type="button" onClick={handleReset}
                    resetBtn={props.resetBtn}
                    className="page__reset">Reset</button>
                <FilterByName filterByName={props.filterByName}
                    handleFilterByName={props.handleFilterByName}></FilterByName>
                <FilterByHouse filterByHouse={props.filterByHouse}
                    handleFilterByHouse={props.handleFilterByHouse}>
                </FilterByHouse>
                <FilterByGender filterByGender={props.filterByGender}
                    handleFilterByGender={props.handleFilterByGender}>
                </FilterByGender>
            </form>


        </>
    )
};
export default Filters;