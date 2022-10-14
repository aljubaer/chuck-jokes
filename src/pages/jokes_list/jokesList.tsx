import { FC, useEffect, useState } from "react";
import { Banner } from "../../components/banner/banner";
import { Category } from "../../components/category/category";
import { Footer } from "../../components/footer/footer";
import { JokeCard } from "../../components/joke-card/jokeCard";
import { LoadMore } from "../../components/load-more/loadMore";
import {
  getCategories,
  getJokesByCategory,
} from "../../services/apis/jokesApi";
import { Joke } from "../../services/apis/jokesType";

import "./jokesList.css";

export const JokesList: FC<{ loaded: boolean }> = ({ loaded }) => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  const [categories, setCategories] = useState<string[]>([]);

  const [page, setPage] = useState(0);

  const [category, setCategory] = useState<string | null>(null);

  const COLORS = [
    "#ff5b5b",
    "#57e690",
    "#ff915b",
    "#57dbe6",
    "#d0ba93",
    "#ffbe5b",
    "#8fe360",
    "#5e5e5e",
  ];

  useEffect(() => {
    (() => {
      setCategories(getCategories());
    })();
  }, [loaded]);

  useEffect(() => {
    (() => {
      setJokes(getJokesByCategory(category, page));
    })();
  }, [loaded, page, category]);

  const onClickItem = (joke: Joke) => {
    console.log(joke);
  };

  const onClickLoadMore = () => {
    setPage((page) => ++page);
  };

  const onClickCategory = (category: string) => {
    console.log(category);
    setPage(0);
    setCategory(category);
  };

  return (
    <>
      <Banner />
      <div className="category-container">
        {loaded &&
          categories.map((category, index) => (
            <Category
              onClick={() => onClickCategory(category)}
              category={category}
              color={COLORS[index % 8]}
            />
          ))}
      </div>
      <div className="list-container">
        {loaded &&
          jokes.map((joke) => (
            <JokeCard data={joke} onAction={() => onClickItem(joke)}>
              <>{joke.value} </>
            </JokeCard>
          ))}
      </div>
      <LoadMore onClick={onClickLoadMore} />
      <Footer />
    </>
  );
};
