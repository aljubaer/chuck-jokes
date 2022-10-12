import { FC, useEffect, useState } from "react"
import { Banner } from "../../components/banner";
import { getJokes } from "../../services/apis/jokesApi";
import { Joke } from "../../services/apis/jokesType";

export const JokesList: FC<{ loaded: boolean }> = ({ loaded }) => {

    const [jokes, setJokes] = useState<Joke[]>([]);

    useEffect(() => {
        (() => {
            setJokes(getJokes(0))
        })()
    }, []);

    return (
        <>
            <Banner />
            { loaded && jokes.map(joke => (
                <div>{joke.value}</div>
            )) }
        </>
    )
}

