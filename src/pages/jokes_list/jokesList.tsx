import { FC, useEffect, useState } from "react";
import { Banner } from "../../components/banner/banner";
import { Footer } from "../../components/footer/footer";
import { JokeCard } from "../../components/joke-card/jokeCard";
import { LoadMore } from "../../components/load-more/loadMore";
import { getJokes } from "../../services/apis/jokesApi";
import { Joke } from "../../services/apis/jokesType";

import "./jokesList.css";

export const JokesList: FC<{ loaded: boolean }> = ({ loaded }) => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    (() => {
      setJokes(getJokes(page));
    })();
  }, [loaded, page]);

  const onClickItem = (joke: Joke) => {
    console.log(joke);
  };

  const onClickLoadMore = () => {
    setPage(page => ++page)
  }

  return (
    <>
      <Banner />
      <div className="list-container">
        {loaded &&
          jokes.map((joke) => (
            <JokeCard data={joke} onAction={() => onClickItem(joke)}>
              <>{joke.value}{" "}</>
            </JokeCard>
          ))}
      </div>
      <LoadMore onClick={onClickLoadMore} />
      <Footer />
    </>
  );
};
