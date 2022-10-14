import { API_BASE_URL } from "../../constants";
import { Joke } from "./jokesType";

let categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

let jokes: Joke[] = [];
let currJokes: Joke[] = [];
const limit = 9;

export const fetchAllJokesFromApi = async () => {
  const response = await fetch(`${API_BASE_URL}/search?query=all`);
  jokes = (await response.json()).result;
};

export const fetchAllCategoriesFromApi = async () => {
  const response = await fetch(`${API_BASE_URL}/categories`);
  categories = await response.json();
};

export const buildJokesList = (jokes: Joke[], page = 0): Joke[] => {
  let last = (page+1) * limit;
  if (last > jokes.length) last = jokes.length;
  if (jokes.length) return jokes.slice(0, last);
  return [];
};

export const getJokesByCategory = (category: string | null, page = 0): Joke[] => {
  if (!category) return buildJokesList(jokes, page);
  let filter = [];
  filter = jokes.filter(
    (jokes) => jokes.categories.length && jokes.categories[0] === category
  );
  return buildJokesList(filter, page);
};
export const getCategories = () => {
  return categories || [];
};
