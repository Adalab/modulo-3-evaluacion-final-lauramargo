import { useState, useEffect } from 'react';
import getDataApi from '../services/charactersApi.js';
import CharacterList from './CharactersList.js';
import Filters from './Filters.js';

function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");
  const [filterByName, setFilterByName] = useState("");

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      setDataUsers(dataFromApi);

    })
  }, []);
  const handleFilterByHouse = (value) => { setFilterByHouse(value); }

  const houseFilter = dataUsers
    .filter((character) => {
      return character.house === filterByHouse;
    });
  const nameFilter = dataUsers
    .filter((character) => {
      return character.name === filterByName;
    });

  const handleFilterByName = (value) => { setFilterByName(value); }


  return (
    <>
      <Filters filterByName={filterByName}
        handleFilterByName={handleFilterByName}
        filterByHouse={filterByHouse}
        handleFilterByHouse={handleFilterByHouse} />
      <CharacterList characterhouse={houseFilter}
        charactername={nameFilter}
        filterByHouse={filterByHouse}
        filterByName={filterByName}></CharacterList>


    </>
  );
}

export default App;
