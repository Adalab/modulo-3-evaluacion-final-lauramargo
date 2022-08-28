import { useState, useEffect } from 'react';
import getDataApi from '../services/charactersApi.js';
import CharacterList from './CharactersList.js';
import Filters from './Filters.js';
import CharacterDetail from './CharacterDetail.js';
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import "../styles/components/App.scss";


function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");
  const [filterByName, setFilterByName] = useState("");
  const [filterByGender, setFilterByGender] = useState('all');


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
      if (filterByGender !== 'Todos') {
        return (character.gender === filterByGender);
      } return true;
    })

    .filter((character) => {
      return character.name.toLowerCase().includes(filterByName.toLowerCase());
    });


  const handleFilterByName = (value) => { setFilterByName(value); }

  const handleFilterByGender = (value) => { setFilterByGender(value); }

  const resetBtn = () => {
    setFilterByName("");
    setFilterByHouse("gryffindor");

  };




  const noResults = () => {
    if (setFilterByName !== "" && houseFilter.length === 0) {
      return (
        <p >Ese nombre no es mágico, prueba con otro</p>
      );
    }
  };

  const { pathname } = useLocation();
  const dataPath = matchPath("/character/:id", pathname);


  const characterId = dataPath !== null ? dataPath.params.id : null;
  const characterFound = houseFilter.find(character => { return character.id === parseInt(characterId) });

  return (
    <>
      <div className='page'>
        <Header />
        <main className='page__main'>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Filters filterByName={filterByName}
                    handleFilterByName={handleFilterByName}
                    filterByHouse={filterByHouse}
                    handleFilterByHouse={handleFilterByHouse}
                    filterByGender={filterByGender}
                    handleFilterByGender={handleFilterByGender}
                    resetBtn={resetBtn}

                  />
                  <CharacterList character={houseFilter}

                    filterByHouse={filterByHouse}
                    filterByName={filterByName}

                  />
                  {noResults()}
                </>
              }
            />
            <Route
              path="/character/:id"
              element={<CharacterDetail character={characterFound} />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default App;
