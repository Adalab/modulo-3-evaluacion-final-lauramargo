import { useState, useEffect } from 'react';
import getDataApi from '../services/charactersApi.js';
import CharacterList from './CharactersList.js';
import Filters from './Filters.js';
import CharacterDetail from './CharacterDetail.js';
import { matchPath, Route, Routes, useLocation } from "react-router-dom";

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
      if (filterByHouse !== 'Todas') {
        return (character.house === filterByHouse);
      } return true;
    })

    .filter((character) => {
      return character.name.toLowerCase().includes(filterByName.toLowerCase());
    });

  const handleFilterByName = (value) => { setFilterByName(value); }

  const { pathname } = useLocation();
  console.log(pathname);
  const dataPath = matchPath("/character/:characterId", pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataUsers.find(character => { return character.id === characterId });


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters filterByName={filterByName}
                handleFilterByName={handleFilterByName}

                handleFilterByHouse={handleFilterByHouse} />
              <CharacterList character={houseFilter}

                filterByHouse={filterByHouse}
                filterByName={filterByName}></CharacterList>
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={
            <CharacterDetail character={characterFound} />
          }
        />
      </Routes>



    </>
  );
}

export default App;
