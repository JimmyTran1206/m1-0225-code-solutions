const userURL: string = 'https://jsonplaceholder.typicode.com/users';
const pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon/1';
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
interface Pokemon {
  name: string;
  height: number;
  weight: number;
}
async function getAndLogData(url: string): Promise<void> {
  try {
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
    const data = (await res.json()) as User[] | Pokemon;
    console.log(data);
  } catch (error) {
    console.error('Error fetching: ', error);
  }
}

getAndLogData(userURL);
getAndLogData(pokemonURL);
