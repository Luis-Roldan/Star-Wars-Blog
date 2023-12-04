const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { characters: [], planets: [], error: null },
    actions: {
      fetchCharacters: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people/");
          if (!response.ok) {
            throw new Error(
              `Error al obtener los personajes. Código de estado: ${response.status}`
            );
          }

          const responseData = await response.json();
          const characters = responseData.results;

          const charactersWithDetails = await Promise.all(
            characters.map(async (character) => {
              try {
                const detailResponse = await fetch(character.url);
                if (!detailResponse.ok) {
                  throw new Error(
                    `Error al obtener detalles del personaje. Código de estado: ${detailResponse.status}`
                  );
                }

                const detailData = await detailResponse.json();
                console.log(detailData.result.properties, "Hola");
                return { ...character, details: detailData.result.properties };
              } catch (error) {
                console.error(error);
                return { ...character, details: {} };
              }
            })
          );

          const store = getStore();

          setStore({
            ...store,
            characters: charactersWithDetails,
            error: null,
          });
        } catch (error) {
          const store = getStore();

          setStore({
            ...store,
            characters: [],
            error: error.message,
          });
        }
      },

      fetchPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets/");
          if (!response.ok) {
            throw new Error(
              `Error al obtener los planetas. Código de estado: ${response.status}`
            );
          }

          const responseData = await response.json();
          const planets = responseData.results;

          const planetsWithDetails = await Promise.all(
            planets.map(async (planet) => {
              try {
                const detailResponse = await fetch(planet.url);
                if (!detailResponse.ok) {
                  throw new Error(
                    `Error al obtener detalles del planeta. Código de estado: ${detailResponse.status}`
                  );
                }

                const detailData = await detailResponse.json();
                console.log(detailData.result.properties);
                return { ...planet, details: detailData.result.properties };
              } catch (error) {
                console.error(error);
                return { ...planet, details: {} };
              }
            })
          );

          const store = getStore();

          setStore({
            ...store,
            planets: planetsWithDetails,
            error: null,
          });
        } catch (error) {
          const store = getStore();

          setStore({
            ...store,
            planets: [],
            error: error.message,
          });
        }
      },
    },
  };
};

export default getState;
