import { MovieList } from '../../components/movie-list'
import { fetchPopularMovies } from '../../lib/tmdb'
import styles from './page.module.css'

export const metadata = {
  title: 'Popular Movies',
  description: 'See the popular movies list',
}

export default async function MoviesPage() {
  const domain = 'www.themoviedb.org'
  const hasMoreMovies = true

  const moviesObject = await fetchPopularMovies()
  const movies = moviesObject.content
  const callSuccess = moviesObject.success
  const error = moviesObject.error

  // const movies = [
  //   { id: 0, featured: true, title: 'Indiana Jones and the Dial of Destiny' },
  //   { id: 1, featured: true, title: 'Guardians of the Galaxy Vol. 3' },
  //   { id: 2, featured: false, title: 'Mission: Impossible - Dead Reckoning Part One' },
  //   { id: 3, featured: false, title: 'Spider-Man: Across the Spider-Verse' },
  //   { id: 4, featured: false, title: 'The Super Mario Bros. Movie' },
  // ]

  return (
    <>
      <div className={styles.headers}>
        <h1>Popular Movies</h1>

        <h2>Here is a list of popular movies:</h2>
      </div>

        {callSuccess ? (
          <MovieList movies={movies} />
          ) : (
            <p>{`Error: ${error}`}</p>
            )}

        <p>
          {hasMoreMovies && <a href={`https://${domain}/`} className="button">See more</a>}
        </p>
    </>
  )
}
