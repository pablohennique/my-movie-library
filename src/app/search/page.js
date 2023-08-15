'use client'

import styles from './page.module.css'
import { useState } from 'react'
import { searchMovies } from '@/lib/tmdb'
import { MovieList } from '@/components/movie-list'


export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const movies = await searchMovies(query)
    setMovies(movies)
    setLoading(false)
    movies === null ? setError(true) : setError(false)
  }

  return (
    <>
      <h1>Search Movies</h1>

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <label htmlFor="query"></label>
        <input
          id="query"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className='button'>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>There was an error calling the API</p>}
      {movies && <MovieList movies={movies} />}
    </>
  )
}
