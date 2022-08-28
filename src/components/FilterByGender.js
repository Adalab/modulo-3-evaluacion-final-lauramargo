function FilterByGender(props) {

    const handleFilterByGender = (ev) => {
        ev.preventDefault();
        props.handleFilterByGender(ev.target.value);
    }

    return (
        <>
            <label htmlFor="gender">Selecciona el género</label>
            <select className="" name="gender" id="gender" onChange={handleFilterByGender} value={props.filterGender}>
                <option value="Todos" selected>Todos</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre </option>
            </select>

        </>
    )
};

export default FilterByGender;