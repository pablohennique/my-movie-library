import { fetchMovie } from '../../../lib/tmdb'

export default async function MoviePage({ params }) {
  const movie = await fetchMovie(params.movieId)

  if (!movie) {
    return <p>Movie not found</p>
  }

  return (
    <>
      <h1>
        {movie.title} <small>({movie.release_date.split('-')[0]})</small>
      </h1>
        <p>
          <em>{movie.tagline}</em>
        </p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
    </>
  )
}

export async function generateMetadata({ params }) {
  const movie = await fetchMovie(params.movieId)
  if (!movie) {
    return { title: 'Movie not found' }
  }
  return { title: movie.title}
}
