import { MovieList } from '../../components/movie-list'
import { NavMenu } from '../../components/nav-menu'

export const metadata = {
  title: 'My Movies',
  description: 'See your movie list',
}

export default function Movies() {
  const domain = 'www.themoviedb.org'
  const hasMoreMovies = true

  const movies = [
    { id: 0, featured: true, title: 'Indiana Jones and the Dial of Destiny' },
    { id: 1, featured: true, title: 'Guardians of the Galaxy Vol. 3' },
    { id: 2, featured: false, title: 'Mission: Impossible - Dead Reckoning Part One' },
    { id: 3, featured: false, title: 'Spider-Man: Across the Spider-Verse' },
    { id: 4, featured: false, title: 'The Super Mario Bros. Movie' },
  ]

  return (
    <main>
      <NavMenu />

      <h1>Movies</h1>

      <p>Here is a list of popular movies:</p>

      <MovieList movies={movies} />

      <p>
        {hasMoreMovies && <a href={`https://${domain}/`}>See more</a>}
      </p>
    </main>
  )
}
