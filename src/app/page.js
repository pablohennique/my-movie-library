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
  const moviesJSX = movies.map((movie) => <li key={movie.id} className={movie.featured && "featured"}>{movie.title}</li>)
  let moviesBlock
  if (movies.length > 0) {
    moviesBlock = (
      <body>
        <p>Here is a list of popular movies:</p>
        <ul className="movie-list">
          {moviesJSX}
        </ul>
        <p>
          {hasMoreMovies && <a href={`https://${domain}/`}>See more</a>}
        </p>
      </body>
      )
  } else {
    moviesBlock = "No movies available at the moment"
  }

  return (
    <>
      <main>
        <h1>{displayTitle && uppercaseTernary}</h1>
        <h2>The best ever</h2>
      </main>

      {moviesBlock}
    </>
  )
}
