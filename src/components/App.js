import { useState, useEffect } from 'react';
import getDataApi from '../services/charactersApi.js';
import CharacterList from './CharactersList.js';
import Filters from './Filters.js';
import CharacterDetail from './CharacterDetail.js';
import { matchPath, Route, Routes, useLocation } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import "../styles/components/App.scss";
import lS from "../services/lS.js";
import NotFoundPage from './NotFoundPage.js';


//useState
function App() {
  const [dataUsers, setDataUsers] = useState(lS.get("filterDataLs", []));
  const [filterByName, setFilterByName] = useState(lS.get("filterByNameLs", ""));
  const [filterByHouse, setFilterByHouse] = useState(lS.get("filterHouseLs", "Gryffindor"));
  const [filterByGender, setFilterByGender] = useState("Todos");

  // useEffect
  useEffect(() => {
    getDataApi().then((dataApi) => {
      setDataUsers(dataApi);

    })
  }, []);
  useEffect(() => {
    getDataApi(filterByHouse).then((charactersData) => {
      setDataUsers(
        charactersData.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      );
    });
  }, [filterByHouse]);

  useEffect(() => {
    lS.set("filterNameLs", filterByName);
    lS.set("filterHouseLs", filterByHouse);
    lS.set("filterDataLs", dataUsers);

  }, [dataUsers, filterByName, filterByHouse]);

  // filters
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


  //manejadoras
  const handleFilterByName = (value) => { setFilterByName(value); }

  const handleFilterByHouse = (value) => { setFilterByHouse(value); }

  const handleFilterByGender = (value) => { setFilterByGender(value); }

  //bonus
  const resetBtn = () => {
    setFilterByName("");
    setFilterByHouse("Gryffindor");
    setFilterByGender("Todos");

  };

  const noResults = () => {
    if (setFilterByName !== "" && houseFilter.length === 0) {
      return (
        <p >Ese nombre no es mágico, prueba con otro</p>
      );

    } else {
      return (<CharacterList character={houseFilter}

        filterByHouse={filterByHouse}
        filterByName={filterByName}

      />);
    }
  };

  const { pathname } = useLocation();
  const dataPath = matchPath("/character/:id", pathname);

  const characterId = dataPath !== null ? dataPath.params.id : null;
  const characterFound = houseFilter.find(character => { return character.id === parseInt(characterId) });


  const NotId = () => {
    if (characterFound === undefined) {
      return <NotFoundPage />

    }
    else { return <CharacterDetail character={characterFound} /> }
  };



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

                  {noResults()}
                </>
              }
            />
            <Route
              path="/character/:id"
              element={NotId()
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
