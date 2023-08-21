'use client'

import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { MoviesSearchResult } from '../../components/movies-search-results'

export default function SearchPage() {
  const [query, setQuery] = useState('')

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>

      <div className={styles.searchForm}>
        <label htmlFor="query"></label>
        <input
          id="query"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <MoviesSearchResult query={query}/>
    </div>
  )
}


{/* <form className={styles.searchForm} onSubmit={handleSubmit}>
<label htmlFor="query"></label>
<input
  id="query"
  type="text"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
/>
<button type="submit" className='button'>Search</button>
</form> */}
