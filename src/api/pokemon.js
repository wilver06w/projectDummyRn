import {API_HOST} from "../utils/constants"



export async function getPokemonsApi  (endpointUrl) {
try{
const url = `${API_HOST}/pokemon?limit=20&offset=0`;
const response = await fetch(endpointUrl || url);
const result = response.json();
return result;
}catch(error){
throw error;
}

}


export async function getPokemonDetailByKeyApi(url) {
try{
const response = await fetch(url);
const result = response.json();
return result;
}catch(error){
throw error;
}
}


export async function getPokemonDetailApi(id) {
try{
  const url = `${API_HOST}/pokemon/${id}`;
  const response = await fetch(url);
  const result = response.json();
  return result;
}catch(error){
  throw error;
}
}