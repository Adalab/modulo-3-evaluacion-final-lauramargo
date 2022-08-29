function FilterByGender(props) {

    const handleFilterByGender = (ev) => {

        props.handleFilterByGender(ev.target.value);
    }

    return (
        <>
            <label htmlFor="gender">Selecciona el género</label>
            <select className="" name="gender" id="gender" onChange={handleFilterByGender} value={props.filterByGender}>
                <option value="Todos" selected>Todos</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre </option>
            </select>

        </>
    )
};

export default FilterByGender;