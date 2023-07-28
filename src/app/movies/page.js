import { MovieList } from '../../components/movie-list'
import { fetchPopularMovies } from '../../lib/tmdb'

export const metadata = {
  title: 'Popular Movies',
  description: 'See the popular movies list',
}

export default async function MoviesPage() {
  const domain = 'www.themoviedb.org'
  const hasMoreMovies = true
  const movies = await fetchPopularMovies()

  // const movies = [
  //   { id: 0, featured: true, title: 'Indiana Jones and the Dial of Destiny' },
  //   { id: 1, featured: true, title: 'Guardians of the Galaxy Vol. 3' },
  //   { id: 2, featured: false, title: 'Mission: Impossible - Dead Reckoning Part One' },
  //   { id: 3, featured: false, title: 'Spider-Man: Across the Spider-Verse' },
  //   { id: 4, featured: false, title: 'The Super Mario Bros. Movie' },
  // ]

  return (
    <>
      <h1>Popular Movies</h1>

      <p>Here is a list of popular movies:</p>

      {movies !== null ? (
        <MovieList movies={movies} />
      ) : (
        <p>An error has occurred 🙁</p>
      )}

      <p>
        {hasMoreMovies && <a href={`https://${domain}/`}>See more</a>}
      </p>
    </>
  )
}
