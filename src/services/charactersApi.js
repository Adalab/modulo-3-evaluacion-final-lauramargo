const getDataApi = () => {
    return fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((character, index) => {
                return {
                    id: index,
                    name: character.name,
                    alive: character.alive,
                    species: character.species,
                    image: character.image,
                    house: character.house,
                    gender: character.gender,
                    alternateNames: character.alternate_names,
                };
            });
            return cleanData;
        });
};
export default getDataApi;