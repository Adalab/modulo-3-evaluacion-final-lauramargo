import { useState, useEffect } from 'react';
import getDataApi from '../services/charactersApi.js';
import CharacterList from './CharactersList.js';
import Filters from './Filters.js';

function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataUsers(dataFromApi);

    })
  }, []);
  const handleFilterByHouse = (value) => { setFilterByHouse(value); }

  const houseFilter = dataUsers
    .filter((character) => {
      return character.house === filterByHouse;
    });

  return (
    <>
      <Filters filterByHouse={filterByHouse}
        handleFilterByHouse={handleFilterByHouse} />
      <CharacterList character={houseFilter}></CharacterList>


    </>
  );
}

export default App;
