import { FC, useEffect, useState } from "react";
import { Banner } from "../../components/banner";
import { JokeCard } from "../../components/jokeCard";
import { getJokes } from "../../services/apis/jokesApi";
import { Joke } from "../../services/apis/jokesType";

import "./jokesList.css";

export const JokesList: FC<{ loaded: boolean }> = ({ loaded }) => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    (() => {
      setJokes(getJokes(0));
    })();
  }, [loaded]);

  const onClickItem = (joke: Joke) => {
    console.log(joke);
  };

  return (
    <>
      <Banner />
      <div className="list-container">
        {loaded &&
          jokes.map((joke) => (
            <JokeCard onAction={() => onClickItem(joke)}>
              <>{joke.value}{" "}</>
            </JokeCard>
          ))}
      </div>
    </>
  );
};
