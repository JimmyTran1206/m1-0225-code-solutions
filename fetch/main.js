'use strict';
const userURL = 'https://jsonplaceholder.typicode.com/users';
const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/1';
async function getAndLogData(url) {
  try {
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching: ', error);
  }
}
getAndLogData(userURL);
getAndLogData(pokemonURL);
