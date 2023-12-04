const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { characters: [], error: null },
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
                return { ...character, details: detailData.result.properties };
              } catch (error) {
                console.error(error);
                return { ...character, details: {} }; // Si hay un error, asigna detalles vacíos
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
    },
  };
};

export default getState;
