function FilterByName(props) {
    const handleFilterByName = (ev) => {
        props.handleFilterByName(ev.target.value);



    };


    return (
        <>
            <label htmlFor="" className="">Busca por personaje</label>
            <input type="text" id="filterbyName" onChange={handleFilterByName}
                value={props.filterByName} className="" />
        </>
    )
};

export default FilterByName;