'use client'

import { MovieList } from "./movie-list"
import { searchMovies } from "../lib/tmdb"
import { useEffect, useState } from "react"
const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export function MoviesSearchResult(queryObject) {
  let query = queryObject.query

  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

    useEffect(() => {
      let isCurrent = true

      setLoading(true)

      const throttle = async () => {
        await delay(300)
        searchMovies(query).then((movies) => {
          if (isCurrent) {
            setMovies(movies)
            setLoading(false)
            movies === null ? setError(true) : setError(false)
          }
        })
      }
      throttle()

      return() => {
        isCurrent = false
      }
    }, [query])

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error calling the API</p>}
      {movies && <MovieList movies={movies} />}
    </>
  )
}
