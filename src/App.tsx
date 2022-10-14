import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { JokesList } from './pages/jokes_list/jokesList'
import { fetchAllCategoriesFromApi, fetchAllJokesFromApi } from './services/apis/jokesApi'

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    ( async () => {

      const categoriesPromise = fetchAllCategoriesFromApi();

      const jokesPromise = fetchAllJokesFromApi();

      Promise.all([categoriesPromise, jokesPromise]).then(results => {
        setLoaded(true);
      })

    })();
  }, [])

  return (
    <div className="App">
      <JokesList loaded={loaded} />
    </div>
  )
}

export default App
