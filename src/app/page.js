import { MovieList } from '../components/movie-list'
import { PeopleList } from '../components/people-list'

export default function HomePage() {
  const domain = 'www.themoviedb.org'
  const hasMoreMovies = true
  const appTitle = 'My Movie Library'
  const displayTitle = true
  const uppercaseTitle = false
  const uppercaseTernary = uppercaseTitle ? appTitle.toUpperCase() : appTitle

  const movies = [
    { id: 0, featured: true, title: 'Indiana Jones and the Dial of Destiny' },
    { id: 1, featured: true, title: 'Guardians of the Galaxy Vol. 3' },
    { id: 2, featured: false, title: 'Mission: Impossible - Dead Reckoning Part One' },
    { id: 3, featured: false, title: 'Spider-Man: Across the Spider-Verse' },
    { id: 4, featured: false, title: 'The Super Mario Bros. Movie' },
  ]

  const people = [
    { id: 0, name: 'Gabriel Guevara' },
    { id: 1, name: 'Gary Coleman' },
    { id: 2, name: 'Angeli Khang' },
    { id: 3, name: 'Katherine LaNasa' },
    { id: 4, name: 'Rebecca Ferguson' },
  ]

  return (
      <main>
        <h1>{displayTitle && uppercaseTernary}</h1>
        <h2>The best ever</h2>

        <p>Here is a list of popular movies:</p>

        <MovieList movies={movies} />

        <p>
          {hasMoreMovies && <a href={`https://${domain}/`}>See more</a>}
        </p>

        <PeopleList people={people} />
      </main>
  )
}
