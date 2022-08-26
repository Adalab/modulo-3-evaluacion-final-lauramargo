import { useState, useEffect } from 'react';
import getDataApi from '../services/charactersApi.js';
import CharacterList from './CharactersList.js';

function App() {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataUsers(dataFromApi);

    })
  }, []);

  return (
    <>
      <CharacterList character={dataUsers}></CharacterList>


    </>
  );
}

export default App;
