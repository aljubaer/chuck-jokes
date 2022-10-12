import { FC, useEffect, useState } from "react"
import { getJokes } from "../../services/jokesApi";
import { Joke } from "../../services/jokesType";

export const JokesList: FC<{ loaded: boolean }> = ({ loaded }) => {

    const [jokes, setJokes] = useState<Joke[]>([]);

    useEffect(() => {
        (() => {
            setJokes(getJokes(0))
        })()
    }, []);

    return (
        <>
            { loaded && jokes.map(joke => (
                <div>{joke.value}</div>
            )) }
        </>
    )
}

