import { API_BASE_URL } from "../../constants";
import { Joke } from "./jokesType";

let jokes: Joke[] = [];
const limit = 9;

export const fetchAllJokesFromApi = async () => {
  const response = await fetch(`${API_BASE_URL}/search?query=all`);
  jokes = (await response.json()).result;
};

export const getJokes = (page = 0): Joke[] => {
    if (jokes.length) return jokes.slice(page*limit, ++page*limit);
    return [];
}
