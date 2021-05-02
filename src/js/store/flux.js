const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			favorites: []
		},
		actions: {
			// load people
			loadPeople: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peoples: data.results });
			},

			loadPlanet: async () => {
				const url = "https://3000-turquoise-rook-t97nmtcw.ws-us03.gitpod.io/planets";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
            },
            login: async (data) =>{
                const url = "https://3000-turquoise-rook-t97nmtcw.ws-us03.gitpod.io/login";
				const response = await fetch(url, {
                    method:"POST", body:JSON.stringify({
                        email:data.email,password:data.password
                    }),headers:{
                        "Content-Type":"application/json",
                        // Authorization:"Bearer "+sessionStorage.getItem("token")
                    }
                });
                const data = await response.json();
                console.log(data);
                sessionStorage.setItem("token",data.token)
            },
			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count == 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
			},
			deleteFavorite: id => {
				const store = getStore();
				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({
					favorites: newFavorites
				});
			}
		}
	};
};

export default getState;
